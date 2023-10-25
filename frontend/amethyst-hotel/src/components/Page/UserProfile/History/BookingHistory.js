import React from 'react';
import { useParams } from 'react-router-dom';

function BookingHistory() {
  const { roomId, roomName, checkIn, checkOut, totalAmount } = useParams();

  return (
    <div>
      <h1>Booking History</h1>
      <p>Selected Room Image: {decodeURIComponent(roomId)}</p>
      <p>Room Name: {decodeURIComponent(roomName)}</p>
      <p>Check-In Date: {decodeURIComponent(checkIn)}</p>
      <p>Check-Out Date: {decodeURIComponent(checkOut)}</p>
      <p>Total Amount with VAT: {decodeURIComponent(totalAmount)}</p>
    </div>
  );
}

export default BookingHistory;
