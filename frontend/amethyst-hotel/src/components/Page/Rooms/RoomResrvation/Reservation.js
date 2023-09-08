import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useLocation } from 'react-router-dom';
import './Reservation.css';

function Reservation() {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guests, setGuests] = useState(1);

  const location = useLocation();
  const roomData = location.state ? location.state.roomData : null;

  if (!roomData) {
    // Handle the case where roomData is not available, e.g., redirect or show an error message.
    return <p>Room data not found.</p>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Make a Reservation</h2>
          <form>
            <h3>{roomData.name}</h3>
            <p>{roomData.description}</p>
            <p>Price per night: ZAR {roomData.price}</p>
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
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="form-control"
              />
            </div>
            <Link to="/login">
              <button type="button" className="btn btn-primary">
                Book Now
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
