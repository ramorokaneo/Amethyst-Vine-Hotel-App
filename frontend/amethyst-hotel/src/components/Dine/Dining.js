import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dining.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faSpa, faCalendarAlt, faHiking, faPhoneAlt, faPerson, faHouse } from '@fortawesome/free-solid-svg-icons';


function Dining() {
  const [selectedLocation, setSelectedLocation] = useState('Indoor Restaurant');

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  const makeReservation = () => {
    
    alert(`You have successfully made a reservation for ${selectedLocation}.`);
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
      <h2>Dining Reservations</h2>
      <p>Select a dining location:</p>
      <div>
        <label>
          <input
            type="radio"
            value="Indoor Restaurant"
            checked={selectedLocation === 'Indoor Restaurant'}
            onChange={() => handleLocationChange('Indoor Restaurant')}
          />
          Indoor Restaurant
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Golf Country House"
            checked={selectedLocation === 'Golf Country House'}
            onChange={() => handleLocationChange('Golf Country House')}
          />
          Golf Country House
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Vineyard Restaurant"
            checked={selectedLocation === 'Vineyard Restaurant'}
            onChange={() => handleLocationChange('Vineyard Restaurant')}
          />
          Vineyard Restaurant
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Tent in the Game Lodge"
            checked={selectedLocation === 'Tent in the Game Lodge'}
            onChange={() => handleLocationChange('Tent in the Game Lodge')}
          />
          Tent in the Game Lodge
        </label>
      </div>
      <button onClick={makeReservation}>Make Reservation</button>
    </div>
    </div>
  );
}

export default Dining;
