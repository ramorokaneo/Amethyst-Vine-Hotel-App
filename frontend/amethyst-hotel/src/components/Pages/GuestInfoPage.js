import React from 'react';
import Header from '../Extras/Header';
import Footer from '../Extras/Footer';
import { useParams } from 'react-router-dom';

function GuestInfoPage({ roomData }) {
  const { roomId } = useParams();
  const selectedRoom = roomData.find(room => room.id === parseInt(roomId));

  if (!selectedRoom) {
    return <div>Room not found.</div>;

  };

  return (
    <div>
      <Header />

      <h2>Guest Information</h2>
      <img src={selectedRoom.image} alt={selectedRoom.name} />

            <Footer />
    </div>
  );
}

export default GuestInfoPage;
