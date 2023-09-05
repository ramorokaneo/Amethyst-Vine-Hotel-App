import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

function Reservation() {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guests, setGuests] = useState(1);

  return (
    <div className="reservation">
      <h2>Make a Reservation</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="checkIn" className="form-label">
            Check-in:
          </label>
          <DatePicker
            id="checkIn"
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="checkOut" className="form-label">
            Check-out:
          </label>
          <DatePicker
            id="checkOut"
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="guests" className="form-label">
            Guests:
          </label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="form-control"
          />
        </div>
        {/* Use Link to navigate to the LoginForm */}
        <Link to="/login">
          <button type="button" className="btn btn-primary">
            Book Now
          </button>
        </Link>
      </form>
    </div>
  );
}


export default Reservation;
