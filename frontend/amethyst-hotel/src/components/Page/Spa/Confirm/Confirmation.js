import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Confirm.module.css";

const Confirmation = () => {
  const [formData, setFormData] = useState({});
  const [total, setTotal] = useState(0);
  const [cartItemPrices, setCartItemPrices] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    // Retrieve the data from localStorage
    const savedFormData = localStorage.getItem('formData');
    const savedTotal = localStorage.getItem('total');
    const savedCartItemPrices = JSON.parse(localStorage.getItem('cartItemPrices'));

    if (savedFormData && savedTotal && savedCartItemPrices) {
      setFormData(JSON.parse(savedFormData));
      setTotal(parseFloat(savedTotal));
      setCartItemPrices(savedCartItemPrices);
    }
  }, []);


  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleCheckboxChange = () => {
    setIsConfirmed(!isConfirmed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isConfirmed) {
        // Save the confirmation data to localStorage
localStorage.setItem('confirmationData', JSON.stringify(formData));

      // Navigate to the policy agreement page
      navigate("/payment");
    }
  };





  return (
    <div className={styles.mainContainer}>
        <nav className={styles.navbar}>
          <h1>Amethyst Vine Hotel</h1>
          <button className={styles.whiteBtn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
        <div className={`${styles.confirmationContainer} card-style`}>
      <h2 className={styles.confirmationHeader}>Confirmation Page</h2>
      <p className={styles.confirmationInfo}>Name: {formData.name}</p>
      <p className={styles.confirmationInfo}>Email: {formData.email}</p>
      <p className={styles.confirmationInfo}>Phone Number: {formData.phoneNumber}</p>
      <p className={styles.confirmationInfo}>Date: {formData.date}</p>
      <p className={styles.confirmationInfo}>Time: {formData.time}</p>
      <p className={styles.confirmationInfo}>Number of Guests: {formData.guests}</p>
      
      <h3 className={styles.confirmationHeader}>Cart Items:</h3>
      <ul className={styles.confirmationList}>
        {cartItemPrices.map((itemPrice, index) => (
          <li key={index}>Item {index + 1} Price: ZAR {itemPrice.toFixed(2)}</li>
        ))}
      </ul>
      
      {formData.includeMeal && (
        <p className={styles.confirmationInfo}>Total Amount (including VAT and small meal): ZAR {total.toFixed(2)}</p>
      )}
      <h3 className={styles.confirmationHeader}>Arrival Information</h3>
      <p className={styles.confirmationInfo}>Please ensure that you arrive 30 minutes prior to your booked time slot to be on time for your appointment.</p>
      <p className={styles.confirmationInfo}>Special Dietary requirements can be accommodated at an additional cost. (Gluten Free, Lactose Intolerant, Vegan etc)</p>
      <p className={styles.confirmationInfo}>If you have any questions, please give us a call on 010 595 0225 or send us an email using info@amethystvinehotel.org.</p>
    </div>
    <br/>
    <form onSubmit={handleSubmit}>
    <label>
        <input
          type="checkbox"
          checked={isConfirmed}
          onChange={handleCheckboxChange}
        />
        Confirm that the information above is correct
      </label>
      <br/>
      <Link
  to={{
    pathname: "/payment",
    state: {
      formData,
      total,
      cartItemPrices,
    },
  }}
  className={styles.submitBtn}
  disabled={!isConfirmed}
>
  Submit
</Link>
        </form>
    </div>
  );
};

export default Confirmation;
