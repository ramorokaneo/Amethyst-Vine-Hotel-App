import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUtensils,
  faSpa,
  faCalendarAlt,
  faHiking,
  faPhoneAlt,
  faPerson,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("bookings");
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    async function fetchUserData() {
      try {
        const response = await axios.get("/api/users");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();

    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      const { data, expiration } = JSON.parse(savedFormData);
      if (expiration && new Date().getTime() > expiration) {
        localStorage.removeItem("formData");
      } else {
        setFormData(data);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const renderDashboardSection = () => {
    switch (selectedTab) {
      case "bookings":
        return <div>Bookings Section</div>;
      case "rewards":
        return <div>Rewards Section</div>;
      case "payments":
        return <div>Payments Section</div>;
      case "notifications":
        return <div>Notifications Section</div>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.main_container}>
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
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.user_profile}>
        <div className={styles.user_card}>
          {user ? (
            <>
              <div className={styles.user_details}>
                <h2>
                  {user.firstName} {user.lastName}
                </h2>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phoneNumber}</p>
              </div>
              <div className={styles.dashboard}>
                <div className={styles.dashboard_tabs}>
                  <button
                    onClick={() => setSelectedTab("bookings")}
                    className={selectedTab === "bookings" ? styles.active_tab : ""}
                  >
                    Bookings
                  </button>
                  <button
                    onClick={() => setSelectedTab("rewards")}
                    className={selectedTab === "rewards" ? styles.active_tab : ""}
                  >
                    Rewards
                  </button>
                  <button
                    onClick={() => setSelectedTab("payments")}
                    className={selectedTab === "payments" ? styles.active_tab : ""}
                  >
                    Payments
                  </button>
                  <button
                    onClick={() => setSelectedTab("notifications")}
                    className={selectedTab === "notifications" ? styles.active_tab : ""}
                  >
                    Notifications
                  </button>
                </div>
                {renderDashboardSection()}
              </div>
            </>
          ) : (
            <p>Loading user profile...</p>
          )}
        </div>
      </div>
      {formData ? (
        <div className={styles.form_data}>
          <h2>Saved Form Data</h2>
          <ul>
            <li>Title: {formData.title}</li>
            <li>Full Name: {formData.fullName}</li>
            {/* Add more form data fields as needed */}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;