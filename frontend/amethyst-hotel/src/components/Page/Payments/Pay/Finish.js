import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Finish.module.css';

const Finish = () => {
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

  const handlePayment = () => {
    if (state) {
      const stateJson = JSON.stringify(state);
      navigate(`/pay?state=${encodeURIComponent(stateJson)}&roomImage=${selectedRoom.image}&roomName=${selectedRoom.name}&checkInDate=${state.reservationData.checkInDate}&checkOutDate=${state.reservationData.checkOutDate}&totalAmount=${totalAmountWithVAT.toFixed(2)}`);
      
      // Save the data to local storage before navigating
      localStorage.setItem('paymentData', stateJson);
    } else {
      console.error("State is null or undefined");
    }
  };

  const handleViewProfile = () => {
    if (state) {
      const stateJson = JSON.stringify(state);

      // Pass the data as a query parameter to the Profile component and navigate
      navigate(`/profile?state=${encodeURIComponent(stateJson)}`);
    } else {
      console.error("State is null or undefined");
    }
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={`${styles.card} ${styles.container}`}>
        <h1 className={styles.payment_heading}>Payment Details</h1>
        <p className={styles.details_text}>Here are your booking details:</p>
        <ul className={styles.details_list}>
          <li className={styles.details_item}>
            <span className={styles.item_label}>Room:</span> {selectedRoom.name || "Not specified"}
          </li>
          <li className={styles.details_item}>
            <span className={styles.item_label}>Check-In Date:</span> {state?.reservationData?.checkInDate || "Not specified"}
          </li>
          <li className={styles.details_item}>
            <span className={styles.item_label}>Check-Out Date:</span> {state?.reservationData?.checkOutDate || "Not specified"}
          </li>
        </ul>

        <img
          src={selectedRoom.image}
          alt={selectedRoom.name}
          className={styles.room_image}
        />

        <ul className={styles.details_list}>
          <li className={styles.details_item}>
            <span className={styles.item_label}>Total Amount (excl. VAT):</span> ZAR {totalAmountWithoutVAT}
          </li>
          <li className={styles.details_item}>
            <span className={styles.item_label}>VAT (15%):</span> ZAR {vatAmount.toFixed(2)}
          </li>
          <li className={styles.details_item}>
            <span className={styles.item_label}>Total Amount (incl. VAT):</span> ZAR {totalAmountWithVAT.toFixed(2)}
          </li>
        </ul>

        <div className={styles.cancellation_policy}>
          <h2 className={styles.policy_heading}>Cancellation Policy</h2>
          <p className={styles.policy_text}>All bookings are subject to our cancellation policy. You must cancel your booking at least 48 hours before the check-in date to receive a full refund. If you cancel within 48 hours of the check-in date, you will be charged 50% of the total amount.</p>
        </div>
        <button className={styles.pay_button} onClick={handlePayment}>
          Pay
        </button>
      </div>
    </div>
  );
};

export default Finish;
