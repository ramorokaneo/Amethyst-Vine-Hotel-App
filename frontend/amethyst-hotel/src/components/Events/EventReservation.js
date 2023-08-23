import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import '../styles.css';

function EventReservation({ event }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [guests, setGuests] = useState(1);

  

  return (
    <div className="reservation">
      <h2>Make a Reservation for {event.title}</h2>
 
        <div className="label-input-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="label-input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="label-input-group">
          <label>Date:</label>
          <DatePicker selected={date} onChange={date => setDate(date)} />
        </div>
        <div className="label-input-group">
          <label>Guests:</label>
          <input
            type="number"
            value={guests}
            onChange={e => setGuests(e.target.value)}
          />
        </div>
        <div className="button-container">
          <Link to="/login" className="button">
            Book Now
          </Link>
        </div>

    </div>
  );
}

export default EventReservation;
