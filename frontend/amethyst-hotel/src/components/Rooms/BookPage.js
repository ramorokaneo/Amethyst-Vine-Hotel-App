import React, { useState } from 'react';
import Confirmation from './Confirmation';

function BookPage() {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedDates, setSelectedDates] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [userInfo, setUserInfo] = useState({ name: '', contact: '' });
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic (e.g., API call, data processing)
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <Confirmation
          selectedRoom={selectedRoom}
          selectedDates={selectedDates}
          guestCount={guestCount}
          userInfo={userInfo}
          paymentInfo={paymentInfo}
        />
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Room Selection */}
          <label>Choose a Room:</label>
          <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}>
            <option value="room1">Room 1</option>
            <option value="room2">Room 2</option>
            {/* Add more room options */}
          </select>

          {/* Date Selection */}
          <label>Select Dates:</label>
          <input
            type="text"
            value={selectedDates}
            onChange={(e) => setSelectedDates(e.target.value)}
            placeholder="MM/DD/YYYY - MM/DD/YYYY"
          />

          {/* Guest Count */}
          <label>Number of Guests:</label>
          <input
            type="number"
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
            min="1"
          />

          {/* User Information */}
          <label>Name:</label>
          <input
            type="text"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
          <label>Contact:</label>
          <input
            type="text"
            value={userInfo.contact}
            onChange={(e) => setUserInfo({ ...userInfo, contact: e.target.value })}
          />

          {/* Payment Information */}
          <label>Card Number:</label>
          <input
            type="text"
            value={paymentInfo.cardNumber}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
          />
          <label>Expiry:</label>
          <input
            type="text"
            value={paymentInfo.expiry}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
          />
          <label>CVV:</label>
          <input
            type="text"
            value={paymentInfo.cvv}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default BookPage;