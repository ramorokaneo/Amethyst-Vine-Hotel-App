import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faSpa, faCalendarAlt, faHiking, faPhoneAlt, faPerson, faHouse } from '@fortawesome/free-solid-svg-icons';
import styles from './Payment.module.css';

function Payment({ location }) {
  const savedInformation = location.state; // Access the saved information from the route state

  const handlePayment = () => {
    fetch("http://localhost:8080/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
      }),
    })
      .then(res => {
        if (res.ok) return res.json();
        return res.json().then(json => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch(e => {
        console.error(e.error);
      });
  };

  return (
    <div className={styles.home_container}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <ul className={styles.navigation_list}>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
          </li>
          <li>
            <Link to="/rooms">
              <FontAwesomeIcon icon={faBed} /> Rooms
            </Link>
          </li>
          <li>
            <Link to="/dining">
              <FontAwesomeIcon icon={faUtensils} /> Dining
            </Link>
          </li>
          <li>
            <Link to="/spa">
              <FontAwesomeIcon icon={faSpa} /> Spa
            </Link>
          </li>
          <li>
            <Link to="/activities">
              <FontAwesomeIcon icon={faHiking} /> Activities
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FontAwesomeIcon icon={faPhoneAlt} /> Contact
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <FontAwesomeIcon icon={faCalendarAlt} /> Admin
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FontAwesomeIcon icon={faPerson} /> Profile
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        {/* Your payment-related JSX */}
        <p>
          By clicking "Make Payment," you agree to the following terms and conditions:
        </p>
        <ol>
          <li>
            You must provide accurate and complete payment information.
          </li>
          <li>
            Payments are non-refundable and non-transferable.
          </li>
          <li>
            Amethyst Vine Hotel is not responsible for any unauthorized charges.
          </li>
          <li>
            You consent to receiving electronic communications from Amethyst Vine Hotel.
          </li>
        </ol>
        <button onClick={handlePayment}>Make Payment</button>
      </div>
    </div>
  );
}

export default Payment;
