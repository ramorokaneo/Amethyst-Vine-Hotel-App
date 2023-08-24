import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles.css';

function GuestInfoPage({ room }) {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const handleBookingSubmit = (event) => {
    event.preventDefault();

    if (!room) {
      return <div>Loading or Room Not Found</div>;
    }

    console.log('Booking Details:');
    console.log('Room:', room.name);
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Special Requests:', specialRequests);

    // Handle the submission and booking logic here
    // You can use the state variables to create the booking and calculate the total amount
  };

  return (
    <div>
      <h2>Guest Details and Special Requests</h2>
      <form onSubmit={handleBookingSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Special Requests:
          <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
          />
        </label>
        {room && <p>Total Amount: ZAR{room.price} (per night)</p>}

        <button type="submit">Confirm Booking</button>
      </form>

      <h2>Make a Reservation</h2>
      <form>
        <label>
          Check-in:
          <DatePicker selected={checkIn} onChange={(date) => setCheckIn(date)} />
        </label>
        <label>
          Check-out:
          <DatePicker selected={checkOut} onChange={(date) => setCheckOut(date)} />
        </label>
        <label>
          Guests:
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </label>
      
        {room && (
          <Link to={`/rooms/${room.id}`} className="button">
            Back to Room Details
          </Link>
        )}
      </form>
    </div>
  );
}

export default GuestInfoPage;
