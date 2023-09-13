import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { roomData } from '../RoomDetails/RoomDetail'; 
import SearchForm from '../../Search/SearchForm';
import styles from "./Reservation.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faSpa, faHiking } from '@fortawesome/free-solid-svg-icons';
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import BathtubIcon from "@mui/icons-material/Bathtub";
import TvIcon from "@mui/icons-material/Tv";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import PoolIcon from "@mui/icons-material/Pool";


const getAmenityIcon = (amenity) => {
  switch (amenity) {
    case 'Free Wi-Fi':
      return <WifiIcon />;
    case 'Air Conditioning':
      return <AcUnitIcon />;
    case 'Mini-bar':
      return <LocalBarIcon />;
    case 'Private Bathroom':
      return <BathtubIcon />;
    case 'TV':
      return <TvIcon />;
    case 'Nature View':
      return <NaturePeopleIcon />;
    case 'Private Pool':
      return <PoolIcon />;
    default:
      return null;
  }
};

function Reservation() {
  const { id } = useParams();
  const selectedRoom = roomData.find((room) => room.id === parseInt(id));


  const [reservationData, setReservationData] = useState({
    checkInDate: '',
    checkOutDate: '',
    guestCount: 1,
    
  });

  const [totalAmount, setTotalAmount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input Name: ${name}, Input Value: ${value}`); 
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const calculateTotalAmount = () => {
    const checkInDate = new Date(reservationData.checkInDate);
    const checkOutDate = new Date(reservationData.checkOutDate);
    const pricePerNight = selectedRoom.price;
    const numberOfNights = Math.floor((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

    if (!isNaN(numberOfNights)) {
      const total = pricePerNight * numberOfNights;
      setTotalAmount(total);
    } else {
      setTotalAmount(0);
    }
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [reservationData.checkInDate, reservationData.checkOutDate]);



  const navigate = useNavigate(); // Define navigate using useNavigate

  const handleSubmitReservation = (e) => {
    e.preventDefault();
    // Handle the reservation submission here, including the totalAmount
    console.log('Selected Room Data:', selectedRoom);
    console.log('Reservation Data:', reservationData);
    console.log('Total Amount:', totalAmount);

   // Store the reservation data in local storage
   localStorage.setItem('reservationData', JSON.stringify(reservationData));

   // Redirect to the 'Login' page
   navigate('/login');
 };
  return (
    <div className={styles.Reservation_container}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <ul className={styles.navigation_list}>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
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
        </ul>
        <SearchForm />
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className={`col-lg-6 d-flex ${styles.card}`}>
            <div className={styles.cardContent}>
              <div className={styles.roomImageContainer}>
                <img src={selectedRoom.image} alt={selectedRoom.name} className={`${styles.roomImage} img-fluid rounded`} />
              </div>
              {selectedRoom && (
                <>
                  <p>{selectedRoom.description}</p>
                  {selectedRoom.amenities && selectedRoom.amenities.length > 0 && (
                    <div className={styles.amenitiesRow}>
                      {selectedRoom.amenities.map((amenity, index) => (
                        <div key={index} className={styles.amenity}>
                          {getAmenityIcon(amenity)} <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <p>Price per night: ZAR {selectedRoom.price}</p>
                </>
              )}
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className={styles.cardContent}>
              <h1>Room Reservation</h1>
              <h2>Selected Room: {selectedRoom ? selectedRoom.name : 'Room not found'}</h2>
              <form onSubmit={handleSubmitReservation}>
                <div>
                  <label htmlFor="checkInDate">Check-In Date:</label>
                  <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={reservationData.checkInDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="checkOutDate">Check-Out Date:</label>
                  <input
                    type="date"
                    id="checkOutDate"
                    name="checkOutDate"
                    value={reservationData.checkOutDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="guestCount">Guest Count:</label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    value={reservationData.guestCount}
                    onChange={handleInputChange}
                    min="1"
                    required
                  />
                </div>
                <div>
              <label>Total Amount:</label>
              <input
                type="text"
                id="totalAmount"
                name="totalAmount"
                value={`ZAR ${totalAmount}`}
                readOnly
              />
            </div>
                <button type="submit">Book</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
