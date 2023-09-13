import React from "react";
import { Link } from "react-router-dom";
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import BathtubIcon from "@mui/icons-material/Bathtub";
import TvIcon from "@mui/icons-material/Tv";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import PoolIcon from "@mui/icons-material/Pool";
import styles from "./RoomList.module.css";
import SearchForm from "../../Search/SearchForm";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBed, faUtensils, faSpa, faHiking } from '@fortawesome/free-solid-svg-icons';

export const roomData = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "A spacious room with a view of the city.",
    price: 1224,
    image: require("../RoomImages/Bedroom1.jpg"),
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV'],
  },
  {
    id: 2,
    name: "Twin Room",
    description: "A spacious room with a view of the city.",
    price: 1143,
    image: require("../RoomImages/Bedroom2.jpg"),
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'TV'],
  },
  {
    id: 3,
    name: "Haddasah Suite",
    description: "A spacious room with a view of the city.",
    price: 1251,
    image: require("../RoomImages/Bedroom3.jpg"),
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV'],
  },
  {
    id: 4,
    name: "Blair Suite",
    description: "A spacious room with a view of the city.",
    price: 1390,
    image: require("../RoomImages/bedroom4.jpg"),
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV'],
  },
  {
    id: 5,
    name: "Zapphora Suite",
    description: "A spacious room with a view of the city.",
    price: 3420,
    image: require("../RoomImages/bedroom5.jpg"),
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV', 'Private Garden'],
  },
  {
    id: 6,
    name: "Manroe Suite",
    description: "A spacious room with a view of the city.",
    price: 3800,
    image: require("../RoomImages/Bedroom6.jpg"),
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'Private Pool', 'TV'],
  },
];

function getAmenityIcon(amenity) {
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
    case 'Private Garden':
      return <NaturePeopleIcon />;
    case 'Private Pool':
      return <PoolIcon />;
    default:
      return null;
  }
}

function RoomList() {
  const currencySymbol = "ZAR";

  

  return (
    <div className={styles.RoomList_container}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <ul className={styles.navigation_list}>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/rooms">
              <FontAwesomeIcon icon={faBed} /> Rooms
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
    <div>
      <h2>Choose a Room</h2>
      <div className={styles.roomList}>
          {roomData.map((room) => (
            <div key={room.id} className={styles.roomCard}>
              <div className={styles.roomImageContainer}>
                <img
                  src={room.image}
                  alt={room.name}
                  className={styles.roomImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <div className={styles.amenitiesRow}>
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className={styles.amenity}>
                      {getAmenityIcon(amenity)} <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                <p>Price: {room.price} {currencySymbol} per night</p>
                <Link to={`/room/${room.id}`}>
                  <button>View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomList;