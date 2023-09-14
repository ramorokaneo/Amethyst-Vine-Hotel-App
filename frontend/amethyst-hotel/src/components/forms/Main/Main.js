import React, { useState } from "react";
import styles from "./Main.module.css";
import { useParams, useLocation, Link } from "react-router-dom";
import SearchForm from "../../Page/Search/SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUtensils,
  faSpa,
  faCalendarAlt,
  faHiking,
  faPhoneAlt,
  faPerson,
  faHouse, faWifi, faSnowflake, faTree, faTv, faBath, faSwimmingPool, faGlassMartiniAlt
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const location = useLocation();
  const { reservationData, selectedRoom, totalAmount } = location.state || {};
  const { id } = useParams();

  const [showSpecialRequest, setShowSpecialRequest] = useState(false);
  const [specialRequestNote, setSpecialRequestNote] = useState("");

  const amenityIcons = {
    "Free Wi-Fi": faWifi,
    "Air Conditioning": faSnowflake,
    "Mini-bar": faGlassMartiniAlt,
    "Private Bathroom": faBath,
    TV: faTv,
    "Nature View": faTree,
    "Private Pool": faSwimmingPool,
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleSpecialRequestChange = (e) => {
    setShowSpecialRequest(e.target.value === "yes");
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

      <div className={styles.guest_info_container}>
        <SearchForm />
        <div className={styles.guest_form}>
          <h2>Guest Information</h2>
          <form>
            <div className={styles.reservation_info}>
              {selectedRoom && (
                <div className={styles.card}>
                  <h2>Selected Room: {selectedRoom.name}</h2>
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    className={styles.room_image}
                  />
                  <div className={styles.room_data}>
                    <p>Room Price: ZAR {selectedRoom.price}</p>
                    <p>Room Description: {selectedRoom.description}</p>
                    {selectedRoom.amenities && selectedRoom.amenities.length > 0 && (
                      <div>
                        <p>Amenities:</p>
                        <ul className={styles.amenitiesList}>
                          {selectedRoom.amenities.map((amenity, index) => (
                            <li key={index}>
                              {amenityIcons[amenity] && (
                                <FontAwesomeIcon
                                  icon={amenityIcons[amenity]}
                                  className={styles.amenityIcon}
                                />
                              )}
                              {amenity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <p>Guests: {reservationData?.guestCount || "Not specified"}</p>
              <p>Total Amount: ZAR {totalAmount || 0}</p>
              <div className={styles.form_row}>
                <label htmlFor="title">Title:</label>
                <select id="title" name="title">
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  {/* Add more title options if needed */}
                </select>
              </div>
              <div className={styles.form_row}>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required />
              </div>
              <div className={styles.form_row}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.form_row}>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" required />
              </div>
              <div className={styles.form_row}>
                <label htmlFor="emergencyContactName">Emergency Contact Name:</label>
                <input type="text" id="emergencyContactName" name="emergencyContactName" required />
              </div>
              <div className={styles.form_row}>
                <label htmlFor="emergencyContactPhoneNumber">Emergency Contact Phone Number:</label>
                <input type="tel" id="emergencyContactPhoneNumber" name="emergencyContactPhoneNumber" required />
              </div>
              <div className={styles.form_row}>
                <label htmlFor="specialRequest">Special Request:</label>
                <select id="specialRequest" name="specialRequest" onChange={handleSpecialRequestChange}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              {showSpecialRequest && (
                <div className={styles.special_request}>
                  <h3>Special Request Note</h3>
                  <textarea
                    id="specialRequestNote"
                    name="specialRequestNote"
                    rows="4"
                    cols="50"
                    value={specialRequestNote}
                    onChange={(e) => setSpecialRequestNote(e.target.value)}
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
