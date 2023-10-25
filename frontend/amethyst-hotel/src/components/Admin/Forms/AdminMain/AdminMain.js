import React, { useState, useEffect } from "react";
import styles from "./AdminMain.module.css";
import { roomData } from "../AdminMain/roomData";

const AdminMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showBookings, setShowBookings] = useState(false); // State to control visibility
  const [bookings, setBookings] = useState([]);

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
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [rooms, setRooms] = useState(roomData);

  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleAddRoom = (room) => {
    setRooms([...rooms, room]);
  };

  const handleDeleteRoom = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  const handleUpdateRoom = (updatedRoom) => {
    setRooms(
      rooms.map((room) => (room.id === updatedRoom.id ? updatedRoom : room))
    );
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
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
        </nav>
      <br />
      <h1>Admin Panel</h1>
      <br />
      <div className={styles.sidebar_content}>
        <div className={styles.sidebar}>
          <ul>
            <li>
              <a
                href="#"
                className={isSidebarOpen ? styles.active : ""}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                Rooms
              </a>
            </li>
            <li>
              <a href="#">Add Rooms</a>
            </li>
            <li>
              <a href="#">Users</a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setShowBookings(!showBookings)}
              >
                {showBookings ? 'Hide Bookings' : 'Show Bookings'}
              </a>
            </li>
          </ul>
        </div>
        <div
          className={styles.page_content}
          style={{ marginLeft: isSidebarOpen ? "240px" : "0" }}
        >
          {isSidebarOpen && (
            <div className={styles.page}>
              <h2>Rooms</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => (
                    <tr key={room.id}>
                      <td>{room.id}</td>
                      <td>{room.name}</td>
                      <td>{room.price}</td>
                      <td>
                        <button onClick={() => setSelectedRoom(room)}>
                          Edit
                        </button>
                        <button onClick={() => handleDeleteRoom(room.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {selectedRoom && (
                <RoomForm
                  room={selectedRoom}
                  onSubmit={handleUpdateRoom}
                  onClose={() => setSelectedRoom(null)}
                />
              )}
            </div>
          )}
          {showBookings && (
            <div className={styles.bookingsSection}>
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
      </div>
    </div>
  );
};

const RoomForm = ({ room = { id: "", name: "", price: "" }, onSubmit, onClose }) => {
  // RoomForm component remains the same
};

export default AdminMain;