import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import '../styles.css';

function Reservation({ room }) {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guests, setGuests] = useState(1);

  return (
    <div className="reservation">
      <h2>Make a Reservation</h2>
      <label>
        Check-in:
        <DatePicker selected={checkIn} onChange={date => setCheckIn(date)} />
      </label>
      <label>
        Check-out:
        <DatePicker selected={checkOut} onChange={date => setCheckOut(date)} />
      </label>
      <label>
        Guests:
        <input
          type="number"
          value={guests}
          onChange={e => setGuests(e.target.value)}
        />
      </label>

      <Link to="/login" className="button">
        Book Now
      </Link>
    </div>
  );
}

export default Reservation;
