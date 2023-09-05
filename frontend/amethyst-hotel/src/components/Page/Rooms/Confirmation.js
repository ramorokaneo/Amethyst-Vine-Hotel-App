import React from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation({ selectedRoom, selectedDates, guestCount, userInfo, paymentInfo }) {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/paymentoptions'); // Navigate to the PaymentOptions page
  };

  return (
    <div>
      <h3>Confirmation</h3>
      <p>Reservation Details:</p>
      <p>Room: {selectedRoom}</p>
      <p>Dates: {selectedDates}</p>
      <p>Guests: {guestCount}</p>
      <p>User Info:</p>
      <p>Name: {userInfo.name}</p>
      <p>Contact: {userInfo.contact}</p>
      <p>Payment Info:</p>
      <p>Card Number: {paymentInfo.cardNumber}</p>
      <p>Expiry: {paymentInfo.expiry}</p>
      <p>CVV: {paymentInfo.cvv}</p>
      <button onClick={handleConfirm}>Confirm Reservation</button>
    </div>
  );
}

export default Confirmation;
