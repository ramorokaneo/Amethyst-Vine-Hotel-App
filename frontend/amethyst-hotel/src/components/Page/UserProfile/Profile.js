import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';
import SearchForm from '../Search/SearchForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faSpa, faCalendarAlt, faHiking, faPhoneAlt, faPerson, faHouse } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [bookings, setBookings] = useState([]);
  const [showBookings, setShowBookings] = useState(false); // State to control visibility

  useEffect(() => {
    // Assuming you fetch booking data from an API
    // You might need to customize this part based on your actual data retrieval logic
    fetch('http://localhost:5000/api/bookings/bookings') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log('Data received:', data);
        setBookings(data); // Set the retrieved bookings in the component's state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  console.log('Bookings:', bookings); // Check what is in the bookings state

// Within the mapping of bookings
{bookings.map((booking, index) => {
  console.log('Booking', index, booking);
  // Rest of the mapping code
})}

  const handleLogout = () => {
    localStorage.removeItem('token');
  };

    // Group bookings by check-in and check-out dates
  const groupedBookings = {};
  bookings.forEach((booking) => {
    const checkInDate = booking.reservationData?.checkInDate || 'Not specified';
    if (!groupedBookings[checkInDate]) {
      groupedBookings[checkInDate] = [];
    }
    groupedBookings[checkInDate].push(booking);
  });

  const toggleShowBookings = () => {
    setShowBookings(!showBookings);
  };

  // Sort the grouped bookings by check-in date in descending order
  const sortedDates = Object.keys(groupedBookings).sort((a, b) => new Date(b) - new Date(a));


  return (
    <>
      <div className={styles.profile_container}>
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
          <SearchForm />
          <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
        </nav>
        <h1>Welcome Back</h1>
        <button onClick={toggleShowBookings} className={styles.showHideButton}>
  {showBookings ? 'Hide Bookings and Reservations' : 'Show Bookings and Reservations'}
</button>

        {showBookings && (
          <div>
            <h2>Bookings and Reservations</h2>
            {sortedDates.map((checkInDate, index) => (
              <div key={index} className={styles.dateSection}>
                <h3>Check-In Date: {checkInDate}</h3>
                <ul>
                  {groupedBookings[checkInDate].map((booking, bookingIndex) => (
                    <li key={bookingIndex} className={styles.bookingCard}>
                      <h4>Booking {bookingIndex + 1}</h4>
                      <div className={styles.cardContent}>
                        <div className={styles.cardLeft}>
                          <p>Room Name: {booking.selectedRoom?.name || 'Not specified'}</p>
                          <p>Check-Out Date: {booking.reservationData?.checkOutDate || 'Not specified'}</p>
                        </div>
                        <div className={styles.cardRight}>
                          <img src={booking.selectedRoom?.image} alt={booking.selectedRoom?.name || 'Room Image'} />
                        </div>
                      </div>
                      <p>Total Amount: {booking.totalAmount || 'Not specified'}</p>
                      {/* You can render more booking details as needed */}
                    </li>
                  ))}
        </ul>
      </div>
        ))}
        </div>
        )}
        </div>
    </>
  );
};

export default Profile;
