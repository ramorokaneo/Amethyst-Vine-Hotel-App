import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { roomData } from '../RoomDetails/RoomDetail'; 
function Reservation() {
  const { id } = useParams();
  const selectedRoom = roomData.find((room) => room.id === parseInt(id));

  const [reservationData, setReservationData] = useState({
    checkInDate: '',
    checkOutDate: '',
    guestCount: 1,
    contactInfo: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitReservation = (e) => {
    e.preventDefault();
    // Handle the reservation submission here, using `room` and `reservationData` if needed
    console.log("Selected Room Data:");
    console.log("Reservation Data:", reservationData);
  };

  return (
    <div>
      <h1>Room Reservation</h1>
      <h2>Selected Room: {selectedRoom ? selectedRoom.name : 'Room not found'}</h2>
      <form onSubmit={handleSubmitReservation}>
        <div>
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={reservationData.checkInDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={reservationData.checkOutDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="guestCount">Guest Count:</label>
          <input
            type="number"
            id="guestCount"
            name="guestCount"
            value={reservationData.guestCount}
            onChange={handleInputChange}
            min="1"
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={reservationData.contactInfo.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={reservationData.contactInfo.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={reservationData.contactInfo.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Book Reservation</button>
      </form>
      <Link to={`/confirmation`}>Go to Confirmation</Link> {/* Use Link for navigation */}
    </div>
  );
}
export default Reservation;
