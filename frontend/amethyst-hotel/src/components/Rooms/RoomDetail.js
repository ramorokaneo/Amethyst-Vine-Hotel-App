import React from 'react';
import { useParams } from 'react-router-dom';
import Reservation from '../Rooms/Reservation';
import Header from '../../components/Extras/Header';
import Footer from '../../components/Extras/Footer';
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import BathtubIcon from "@mui/icons-material/Bathtub";
import TvIcon from "@mui/icons-material/Tv";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import PoolIcon from "@mui/icons-material/Pool";

import Bedroom1Image from '../../assests/Images/Bedroom1.jpg';
import Bedroom2Image from '../../assests/Images/Bedroom 2.jpg';
import Bedroom3Image from '../../assests/Images/Bedroom 3.jpg';
import Bedroom4Image from '../../assests/Images/bedroom 4.jpg';
import Bedroom5Image from '../../assests/Images/bedroom 5.jpg';
import Bedroom6Image from '../../assests/Images/Bedroom 6.jpg';

const roomData = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'A spacious room with a view of the city.',
    price: 1224,
    image: Bedroom1Image,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV'],
  },
  {
    id: 2,
    name: 'Twin Room',
    description: 'A twin bed room, complete with modern amenities for a relaxing stay for 2.',
    price: 1143,
    image: Bedroom2Image,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'TV'],
  },
  {
    id: 3,
    name: 'Haddasah Suite',
    description: 'A comfortable suite for a family, featuring separate bedrooms and a shared living space.',
    price: 1251,
    image: Bedroom3Image,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV'],
  },
  {
    id: 4,
    name: 'Haddasah Suite',
    description: 'A comfortable suite for a family, featuring separate bedrooms and a shared living space.',
    price: 1390,
    image: Bedroom4Image,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV'],
  },
  {
    id: 5,
    name: 'Haddasah Suite',
    description: 'A comfortable suite for a family, featuring separate bedrooms and a shared living space.',
    price: 3420,
    image: Bedroom5Image,
  },
  {
    id: 6,
    name: 'Haddasah Suite',
    description: 'A comfortable suite for a family, featuring separate bedrooms and a shared living space.',
    price: 3800,
    image: Bedroom6Image,
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

function RoomDetail() {
  const { id } = useParams();
  const room = roomData.find(room => room.id === parseInt(id));

  if (!room) {
    return <div>Room not found.</div>;
  }
  
  const currencySymbol = "ZAR";

  return (
    <div>
    <Header />
    <div className="room-detail">
      <img src={room.image} alt={room.name} />
      <h2>{room.name}</h2>
      <p>{room.description}</p>
      <ul>
              {room.amenities.map((amenity, index) => (
                <li key={index}>
                  {getAmenityIcon(amenity)} {amenity}
                </li>
              ))}
            </ul>
            <p>Price: {room.price} {currencySymbol} per night</p>
      <Reservation room={room} />
    </div>
    <Footer />
    </div>
  );
}

export default RoomDetail;
