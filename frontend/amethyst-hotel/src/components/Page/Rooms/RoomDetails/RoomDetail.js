import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SearchForm from '../../Search/SearchForm';
import styles from './RoomDetail.module.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faSpa, faHiking } from '@fortawesome/free-solid-svg-icons';

import Bedroom1Image from '../RoomImages/Bedroom1.jpg';
import Bedroom2Image from '../RoomImages/bedroom7.jpg';
import Bedroom3Image from '../RoomImages/Bedroom3.jpg';
import Bedroom4Image from '../RoomImages/bedroom4.jpg';
import Bedroom5Image from '../RoomImages/bedroom5.jpg';
import Bedroom6Image from '../RoomImages/Bedroom6.jpg';

import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import BathtubIcon from "@mui/icons-material/Bathtub";
import TvIcon from "@mui/icons-material/Tv";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import PoolIcon from "@mui/icons-material/Pool";

export const roomData = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "A spacious room with a view of the city.",
    price: 1224,
    image: Bedroom1Image,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV'],
  },
  {
    id: 2,
    name: "Twin Room",
    description: "A twin bed room, complete with modern amenities for a relaxing stay for 2.",
    price: 1143,
    image: Bedroom2Image,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'TV'],
  },
  {
    id: 3,
    name: "Haddasah Suite",
    description: "A comfortable suite for a family, featuring separate bedrooms and a shared living space.",
    price: 1251,
    image: Bedroom3Image,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV'],
  },
  {
    id: 4,
    name: "Blair Suite",
    description: "A comfortable suite for a family, featuring separate bedrooms and a shared living space.",
    price: 1390,
    image: Bedroom4Image,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV'],
  },
  {
    id: 5,
    name: "Zaphora Suite",
    description: "A comfortable suite for a family, featuring separate bedrooms and a shared living space.",
    price: 3420,
    image: Bedroom5Image,
  },
  {
    id: 6,
    name: "Manroe Suite",
    description: "A comfortable suite for a family, featuring separate bedrooms and a shared living space.",
    price: 3800,
    image: Bedroom6Image,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'Private Pool', 'TV'],
  },
];


const getAmenityIcon = (amenity) => {
  switch (amenity) {
    case 'Free Wi-Fi':
      return <WifiIcon />;
    case 'Air Conditioning':
      return <AcUnitIcon />;
    case 'Mini-bar':
      return <LocalBarIcon />;
    case 'Private Bathroom':
      return <BathtubIcon />;
    case 'TV':
      return <TvIcon />;
    case 'Nature View':
      return <NaturePeopleIcon />;
    case 'Private Pool':
      return <PoolIcon />;
    default:
      return null;
  }
};

function RoomDetail() {
  const { id } = useParams();
  const room = roomData.find((room) => room.id === parseInt(id));

  if (!room) {
    return <div>Room not found</div>;
  }

  

  console.log("roomData in RoomDetail:", room);



  return (
    <div className={styles.RoomDetail_container}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <ul className={styles.navigation_list}>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
                   <li>
            <Link to="/dining">
              <FontAwesomeIcon icon={faUtensils} /> Dining
            </Link>
          </li>
          <li>
            <Link to="/spa">
              <FontAwesomeIcon icon={faSpa} /> Spa
            </Link>
          </li>
          <li>
            <Link to="/activities">
              <FontAwesomeIcon icon={faHiking} /> Activities
            </Link>
          </li>
        </ul>
        <SearchForm />
        </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6 text-center">
            <img src={room.image} alt={room.name} className={`${styles.roomDetailImage} img-fluid rounded`} />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className={styles.cardContent}>
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              {room.amenities && room.amenities.length > 0 && (
                <div className={styles.amenitiesRow}>
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className={styles.amenity}>
                      {getAmenityIcon(amenity)} <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              )}
              <p>Price per night: ZAR {room.price}</p>
              <Link to={`/reservation/${id}`} className={`${styles.customButton} btn btn-lg`} role="button">
                Book Reservation
              </Link>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default RoomDetail;