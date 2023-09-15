import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from './BookingConfirmation.module.css';
import axios from 'axios';

const BookingConfirmation = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate(); 

  const [isInformationCorrect, setIsInformationCorrect] = useState(false);
  const [savedInformation, setSavedInformation] = useState(null); // Store saved information here



  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleConfirm = async () => {
    if (!isInformationCorrect) {
      // If the checkbox is not checked, show an alert or take appropriate action
      alert('Please confirm that the information is correct.');
      return;
    }
  
    // Store the information in state
    setSavedInformation(state);
    console.log("BookingConfirmation.js, line30, setSaveInformation(state):" , state)
  
    try {
      // Send the data to the server using Axios
      const response = await axios.post('http://localhost:5000/api/bookings/', state);
      localStorage.setItem("state", JSON.stringify(state));
  
      
      // Redirect to the login page
      navigate('/login');
    } catch (error) {
      console.error(error);
      // Show an error message or take appropriate action
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
      <div>
      <div className={`${styles.card} ${styles.container}`}>
        <h1>Booking Confirmation</h1>
        <p>Thank you for your reservation!</p>
        <p>Here are your reservation details:</p>
        <ul>
          <li>Room: {state.selectedRoom?.name}</li>
          <li>Total Amount: ZAR {state.totalAmount}</li>
          <li>Check-In Date: {state.reservationData?.checkInDate || "Not specified"}</li>
          <li>Check-Out Date: {state.reservationData?.checkOutDate || "Not specified"}</li>
          {/* Add more details as needed */}
        </ul>
        <img src={state.selectedRoom?.image} alt={state.selectedRoom?.name} className={styles.room_image} />
        <p>We have saved your information for future reference:</p>
        {state.formData && (
          <ul>
           
          </ul>
        )}
        {state.guestDetails && (
  <ul>
    <li>Title: {state.guestDetails.title}</li>
    <li>Full Name: {state.guestDetails.fullName}</li>
    <li>Email: {state.guestDetails.email}</li>
    <li>Phone Number: {state.guestDetails.phoneNumber}</li>
    <li>Emergency Contact Name: {state.guestDetails.emergencyContactName}</li>
    <li>Emergency Contact Phone Number: {state.guestDetails.emergencyContactPhoneNumber}</li>
    <li>Special Request: {state.guestDetails.specialRequest}</li>
  </ul>
)}
 {/* Checkbox for confirming information */}
 <label>
            <input
              type="checkbox"
              checked={isInformationCorrect}
              onChange={() => setIsInformationCorrect(!isInformationCorrect)}
            />
            The above information is correct?
          </label>
        <button className={styles.confirm_btn} onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
    </div>
  );
};

export default BookingConfirmation;
