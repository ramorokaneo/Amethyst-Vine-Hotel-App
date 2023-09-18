import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Payment.module.css';

const Payment = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(null); // State to store 'state' data (formerly 'savedInformation')

  useEffect(() => {
    // Retrieve 'state' data from local storage (formerly 'savedInformation')
    const stateData = JSON.parse(localStorage.getItem('state'));
    setState(stateData);
  }, []); // Empty dependency array to fetch the data only once

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const selectedRoom = state?.selectedRoom || {};
  const totalAmountWithoutVAT = state?.totalAmount || 0;

  // Calculate the VAT amount (15% of the total amount)
  const vatAmount = 0.15 * totalAmountWithoutVAT;

  // Calculate the total amount including VAT
  const totalAmountWithVAT = totalAmountWithoutVAT + vatAmount;

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={`${styles.card} ${styles.container}`}>
        <h1>Payment Details</h1>
        <p>Here are your booking details:</p>
        <ul>
     
          <li>Room: {selectedRoom.name || "Not specified"}</li>
          <li>Check-In Date: {state?.reservationData?.checkInDate || "Not specified"}</li>
          <li>Check-Out Date: {state?.reservationData?.checkOutDate || "Not specified"}</li>
          
          <img
          src={selectedRoom.image}
          alt={selectedRoom.name}
          className={styles.room_image}
        />
          <li>Total Amount (excl. VAT): ZAR {totalAmountWithoutVAT}</li>
          <li>VAT (15%): ZAR {vatAmount.toFixed(2)}</li>
          <li>Total Amount (incl. VAT): ZAR {totalAmountWithVAT.toFixed(2)}</li>
         
      
        </ul>
       

        <div className={styles.cancellation_policy}>
          <h2>Cancellation Policy</h2>
          <p>All bookings are subject to our cancellation policy. You must cancel your booking at least 48 hours before the check-in date to receive a full refund. If you cancel within 48 hours of the check-in date, you will be charged 50% of the total amount.</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
