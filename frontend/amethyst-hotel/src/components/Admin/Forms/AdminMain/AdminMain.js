import React from "react";
import { Link } from "react-router-dom";
import styles from "./AdminMain.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoneyCheckAlt, faPeopleGroup, faLaptop, faBowlFood, faBookOpen, faClock } from '@fortawesome/free-solid-svg-icons';


const AdminMain = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <ul className={styles.navigation_list}>
          <li>
            <Link to="/adminmain">
              <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
          </li>
          <li>
            <Link to="/bookings">
              <FontAwesomeIcon icon={faBookOpen} /> Bookings
            </Link>
          </li>
          <li>
            <Link to="/reservations">
              <FontAwesomeIcon icon={faBowlFood} /> Reservations
            </Link>
          </li>
          <li>
            <Link to="/appointments">
              <FontAwesomeIcon icon={faLaptop} /> Appointments
            </Link>
          </li>
          <li>
            <Link to="/payments">
              <FontAwesomeIcon icon={faMoneyCheckAlt} /> Payments
            </Link>
          </li>
         
          <li>
            <Link to="/schedule">
              <FontAwesomeIcon icon={faClock} /> Schedule
            </Link>
          </li>
          <li>
            <Link to="/clients">
              <FontAwesomeIcon icon={faPeopleGroup} /> Clients
            </Link>
          </li>
        </ul>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
  </div>
  );
};

export default AdminMain;

