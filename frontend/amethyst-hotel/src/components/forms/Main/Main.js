import React, { useState } from "react";
import styles from "./Main.module.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
import SearchForm from "../../Page/Search/SearchForm";
import BookingConfirmation from "../../Page/Confirmation/BookingConfirmation";
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
  faWifi,
  faSnowflake,
  faTree,
  faTv,
  faBath,
  faSwimmingPool,
  faGlassMartiniAlt,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { reservationData, selectedRoom, totalAmount } = location.state || {};

  const [showSpecialRequest, setShowSpecialRequest] = useState(false);
  const [specialRequestNote, setSpecialRequestNote] = useState("");
  const [guestDetails, setGuestDetails] = useState(null);

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

  const handleSaveAndContinue = () => {
    // Capture the guest information from the form
    const guestInfo = {
      title: document.getElementById("title").value,
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      emergencyContactName: document.getElementById("emergencyContactName").value,
      emergencyContactPhoneNumber: document.getElementById("emergencyContactPhoneNumber").value,
      specialRequest: document.getElementById("specialRequest").value === "yes" ? specialRequestNote : "None",
    };

    // Save the form data in localStorage or API and navigate to BookingConfirmation component
    const formData = {
      // Add all the form data here
    };
    localStorage.setItem("formData", JSON.stringify(formData));

    // Pass the necessary data as state to the BookingConfirmation component
    setGuestDetails(guestInfo);
    navigate("/booking-confirmation", {
      state: {
        formData,
        selectedRoom,
        totalAmount,
        guestDetails: guestInfo,
        reservationData: {
          checkInDate: reservationData.checkInDate, // Include the check-in date here
          checkOutDate: reservationData.checkOutDate, // Include the check-out date here
        },
      },
    });
  };

  const handleSaveAndFinishLater = () => {
    // Save the form data with an expiration date of 3 days
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 3);
    const formData = {
      // Add all the form data here
    };
    localStorage.setItem(
      "formData",
      JSON.stringify({ data: formData, expiration: expirationDate.getTime() })
    );
    navigate("/profile");
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
                        <p>Check-In Date: {reservationData?.checkInDate || "Not specified"}</p>
                        <p>Check-Out Date: {reservationData?.checkOutDate || "Not specified"}</p>
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
            <br/>
            <br/>
            <br/>
            <div className={styles.form_row}>
              <button className={styles.blue_btn} type="button" onClick={handleSaveAndContinue}>
                Save &amp; Continue
              </button>
              <button className={styles.white_btn} type="button" onClick={handleSaveAndFinishLater}>
                Save &amp; Finish Later
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
