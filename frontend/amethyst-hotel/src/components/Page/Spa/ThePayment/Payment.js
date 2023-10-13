import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Payment.module.css";

const Payment = () => {
  const location = useLocation();
  const { state } = location;

  // Check if state contains the data and if cartItemPrices is available
  if (!state || !state.confirmationData || !state.confirmationData.cartItemPrices) {
    return (
      <div className={styles.mainContainer}>
        <h2>Error: Data not found.</h2>
      </div>
    );
  }

  const { confirmationData } = state;

  

  return (
    <div className={styles.mainContainer}>
      <h1>Amethyst Vine Hotel</h1>
      <h2>Payment Page</h2>
      <div className={styles.paymentDetails}>
        <h3>Confirmation Details:</h3>
        <p>Name: {confirmationData.name}</p>
        <p>Email: {confirmationData.email}</p>
        <p>Phone Number: {confirmationData.phoneNumber}</p>
        <p>Date: {confirmationData.date}</p>
        <p>Time: {confirmationData.time}</p>
        <p>Number of Guests: {confirmationData.guests}</p>
        <h3>Cart Items:</h3>
        <ul>
          {confirmationData.cartItemPrices.map((itemPrice, index) => (
            <li key={index}>Item {index + 1} Price: ZAR {itemPrice.toFixed(2)}</li>
          ))}
        </ul>
        {confirmationData.includeMeal && (
          <p className={styles.confirmationInfo}>
            Total Amount (including VAT and small meal): ZAR {confirmationData.total.toFixed(2)}
          </p>
        )}
        {/* You can display additional payment-related information here */}
      </div>
      {/* Add your payment form or payment processing logic here */}
    </div>
  );
};

export default Payment;

