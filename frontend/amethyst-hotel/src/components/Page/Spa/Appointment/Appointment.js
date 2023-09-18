import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Appointment.module.css";

const Appointment = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/');
    };
  const location = useLocation();
  const { cart } = location.state || {};
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
    guests: 1, // Default to 1 guest
    includeMeal: false, // Default to not including a meal
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [total, setTotal] = useState(0); // Initialize total with 0

  // ...
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Calculate the total based on the selected options
    let newTotal = 0; // Use a different variable name to avoid conflicts
    if (formData.includeMeal) {
      newTotal += 200.0; // Add R200.00 for the small meal
    }
  
    // Add the prices of items in the cart to the total
    if (cart && cart.length > 0) {
      newTotal += cart.reduce((accumulator, cartItem) => {
        return accumulator + cartItem.price;
      }, 0);
    }
  
    // Calculate VAT (15% of the total)
    const vatAmount = newTotal * 0.15;
  
    // Add VAT to the total
    newTotal += vatAmount;
  
    // Multiply the total by the number of guests
    newTotal *= formData.guests;
  
    // Set the 'total' state with the newTotal value
    setTotal(newTotal);
  
    // You can now use the 'total' variable as needed, e.g., send it to the server or display it
    console.log("Total (including VAT):", newTotal);
  
    // Navigate to another page with the form data and total
    navigate("/confirmation", { state: { formData, total: newTotal } });
  };
  


  return (
    <div className={styles.mainContainer}>
    <nav className={styles.navbar}>
      <h1>Amethyst Vine Hotel</h1>
      <button className={styles.whiteBtn} onClick={handleLogout}>
        Logout
      </button>
    </nav>
      <div className={styles.content}>
        <h2>Appointment Page</h2>
        {cart && cart.length > 0 ? (
          <ul className={styles.cartList}>
            {cart.map((cartItem) => (
              <li key={cartItem.id} className={styles.cartItem}>
                {cartItem.name} - ZAR {cartItem.price.toFixed(2)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in the cart.</p>
        )}
        <div className={styles.formContainer}>
          <h2>Appointment Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Time:</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Number of Guests:</label>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>
                Include Small Meal:
                <input
                  type="checkbox"
                  name="includeMeal"
                  checked={formData.includeMeal}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.formGroup}>
              <button type="submit" className={styles.submitBtn}>Submit</button>
            </div>
            {formData.includeMeal && (
  <div className={styles.formGroup}>
    <p>Total Amount: ZAR {(total).toFixed(2)}</p>
  </div>
)}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
