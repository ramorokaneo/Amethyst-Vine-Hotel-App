import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Payment.module.css";

const Payment = () => {
  const location = useLocation();
  const { state } = location;

  // Check if state contains the data
  if (!state || !state.formData || state.total === undefined || !Array.isArray(state.cartItemPrices)) {
    
    
    return (
      <div className={styles.mainContainer}>
        <h2>Error: Data not found.</h2>
        {/* You can add a message or redirect to an error page */}
      </div>
    );
  }

  const { formData, total, cartItemPrices } = state;

  return (
    <div className={styles.mainContainer}>
      <h1>Amethyst Vine Hotel</h1>
      <h2>Payment Page</h2>
      <div className={styles.paymentDetails}>
        <h3>Confirmation Details:</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone Number: {formData.phoneNumber}</p>
        {/* Display other confirmation details as needed */}
        <h3>Payment Information:</h3>
        <p>Total Amount: ZAR {total.toFixed(2)}</p>
        <h3>Cart Items:</h3>
        <ul>
          {cartItemPrices.map((itemPrice, index) => (
            <li key={index}>Item {index + 1} Price: ZAR {itemPrice.toFixed(2)}</li>
          ))}
        </ul>
        {/* You can display additional payment-related information here */}
      </div>
      {/* Add your payment form or payment processing logic here */}
    </div>
  );
};

export default Payment;
