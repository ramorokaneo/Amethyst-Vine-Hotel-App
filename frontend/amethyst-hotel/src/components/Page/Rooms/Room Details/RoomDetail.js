// src/components/RoomDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './RoomDetail.css';

import Bedroom1Image from '../RoomImages/Bedroom1.jpg';
import Bedroom2Image from '../RoomImages/Bedroom2.jpg';
import Bedroom3Image from '../RoomImages/Bedroom3.jpg';
import Bedroom4Image from '../RoomImages/bedroom4.jpg';
import Bedroom5Image from '../RoomImages/bedroom5.jpg';
import Bedroom6Image from '../RoomImages/Bedroom6.jpg';

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

function RoomDetail() {
  const { id } = useParams();
  const room = roomData.find((room) => room.id === parseInt(id));

  if (!room) {
    return <div>Room not found.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6">
          <img src={room.image} alt={room.name} className="img-fluid rounded" />
        </div>
        <div className="col-lg-6">
          <h2>{room.name}</h2>
          <p>{room.description}</p>
          <p>Price per night: ZAR {room.price}</p>
          <Link to={`/room/${id}/book`} className="btn btn-success" role="button">
            Book Reservation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomDetail;
