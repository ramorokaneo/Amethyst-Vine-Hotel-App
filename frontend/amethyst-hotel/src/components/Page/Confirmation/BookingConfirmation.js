import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './BookingConfirmation.module.css';

const BookingConfirmation = () => {
  const { title, surname, name, phoneNumber, email } = useParams();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleConfirm = () => {
    // Handle the confirmation action here
    alert("Booking confirmed!"); // Replace this with your actual confirmation logic

    // Redirect to the payment gateway route
    navigate('/payment-gateway');
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.booking_info}>
        <h2>Booking Confirmation</h2>
        <p>Title: {title}</p>
        <p>Surname: {surname}</p>
        <p>Name: {name}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Email: {email}</p>
        <div className={styles.confirm_checkbox}>
          <input type="checkbox" id="confirmCheckbox" />
          <label htmlFor="confirmCheckbox">The above information is correct</label>
        </div>
        <button className={styles.confirm_btn} onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
