import React, { useState } from 'react';

function BookingRooms() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('single'); // You can add more room types

  // Add a function to handle booking
  const handleBookRoom = () => {
    // Implement booking logic here
    // You can use the booking details from state to process the booking
  };

  return (
    <div className="booking-rooms">
      <h2>Booking Rooms</h2>
      {/* Add form fields here */}
      <button onClick={handleBookRoom}>Book Now</button>
    </div>
  );
}

export default BookingRooms;
