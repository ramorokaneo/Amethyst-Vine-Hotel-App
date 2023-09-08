import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GuestInfo.module.css";
import BookingConfirmation from "../Confirmation/BookingConfirmation";

const GuestInfo = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    title: "",
    surname: "",
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [savedInfo, setSavedInfo] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(
      `/booking-confirmation/${formData.title}/${formData.surname}/${formData.name}/${formData.phoneNumber}/${formData.email}`
    );
  };

  return (
    <div>
    <form className={styles.guest_form} onSubmit={handleSubmit}>
      <h2>Guest Information</h2>
      <div className={styles.form_group}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={styles.white_btn}>
        Save
      </button>
    </form>

    {savedInfo && (
        <BookingConfirmation guestInfo={savedInfo} /> 
      )}
    </div>
  );
};

export default GuestInfo;
