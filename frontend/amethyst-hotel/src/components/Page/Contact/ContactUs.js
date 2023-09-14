import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faSpa, faCalendarAlt, faHiking, faPerson, faHouse } from '@fortawesome/free-solid-svg-icons';
import SearchForm from '../Search/SearchForm';
import styles from './ContactUs.module.css';


function ContactUs() {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setMessageSent(true);
    }, 1000); // Simulate a 1-second delay

    // Optionally, you can reset the form fields here.
    e.target.reset();
  };

  return (
    <div className={styles.contact_container}>
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
        <SearchForm />
        </nav>
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="w-75">
        <h2 className="text-center mb-4">Contact Us</h2>
        {isMessageSent ? (
          <div className="alert alert-success" role="alert">
            Message sent successfully!
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
    </div>
  );
}

export default ContactUs;
