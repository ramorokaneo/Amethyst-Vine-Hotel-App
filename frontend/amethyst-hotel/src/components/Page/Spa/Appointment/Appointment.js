import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Appointment.module.css";

const Appointment = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const location = useLocation();
  const { cart } = location.state || { cart: [] }; // Provide a default empty array for cart

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
    guests: 1,
    includeMeal: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [total, setTotal] = useState(0);

  // Use useEffect to calculate the total whenever cart or formData changes
  useEffect(() => {
    // Calculate the total cost of items in the cart including VAT
    let cartTotal = 0;
    let cartItemPrices = [];

    if (cart.length > 0) {
      cartTotal = cart.reduce((accumulator, cartItem) => {
        // Add the item price with 15% VAT to the accumulator
        const itemPrice = cartItem.price * 1.15;
        cartItemPrices.push(itemPrice); // Store the price
        return accumulator + itemPrice; // Adding 15% VAT
      }, 0);
    }

    // Multiply the cart total by the number of guests
    const totalWithoutMeal = cartTotal * formData.guests;

    // Calculate the final total by adding the small meal cost (200 ZAR)
    const finalTotal = totalWithoutMeal + 200.0; // Adding 200 ZAR for the small meal

    // Set the 'total' state with the finalTotal value
    setTotal(finalTotal);

    // Save form data, total, and cart item prices in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem('total', finalTotal.toString());
    localStorage.setItem('cartItemPrices', JSON.stringify(cartItemPrices));

    // You can now use the 'finalTotal' variable as needed
    console.log("Final Total (including VAT and small meal):", finalTotal);
  }, [cart, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Navigate to the Confirmation component
    navigate("/confirmation");
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
