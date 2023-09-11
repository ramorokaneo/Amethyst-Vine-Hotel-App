import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GuestInfo.module.css';
import BookingConfirmation from '../Confirmation/BookingConfirmation';

const GuestInfo = ({ location, room }) => {
  // Initialize the router navigation function
  const navigate = useNavigate();

  // Initialize the state to manage form data and saved info
  const [formData, setFormData] = useState({
    title: '',
    surname: '',
    name: '',
    phoneNumber: '',
    email: '',
  });

  // Initialize the state to manage saved info (you can use this as needed)
  const [savedInfo, setSavedInfo] = useState(null);

  // Define a function to handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Define a function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if room data is available in props or location.state
    const selectedRoom = room || location.state?.selectedRoom;

    if (selectedRoom) {
      // Perform the desired action with guest info and room data
      // For example, navigate to the booking confirmation page
      navigate(`/booking-confirmation/${formData.title}/${formData.surname}/${formData.name}/${formData.phoneNumber}/${formData.email}`, {
        state: { guestInfo: formData, roomData: selectedRoom },
      });
    } else {
      console.error('Room data is not available.'); // Handle this case as needed
    }
  };

  // Render the guest information form
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
