import React, { useState, useEffect } from 'react';
import styles from './AdminMain.module.css';
import { roomData } from './roomData';

const AdminMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
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
    setRooms(rooms.map((room) => (room.id === updatedRoom.id ? updatedRoom : room)));
  };

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
                className={isSidebarOpen ? styles.active : ''}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                Rooms
              </a>
            </li>
          </ul>
        </div>
        <div
          className={styles.page_content}
          style={{ marginLeft: isSidebarOpen ? '240px' : '0' }}
        >
          {isSidebarOpen && (
            <div className={styles.page}>
              <h2>Rooms</h2>
              <button onClick={() => setSelectedRoom(null)}>Add Room</button>
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
                        <button onClick={() => setSelectedRoom(room)}>Edit</button>
                        <button onClick={() => handleDeleteRoom(room.id)}>Delete</button>
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
              {selectedRoom === null && (
                <RoomForm onSubmit={handleAddRoom} onClose={() => setSelectedRoom(null)} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const RoomForm = ({ room = { id: '', name: '', price: '' }, onSubmit, onClose }) => {
  const [id, setId] = useState(room.id);
  const [name, setName] = useState(room.name);
  const [price, setPrice] = useState(room.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id, name, price });
    onClose();
  };

  return (
    <div>
      <h3>{room.id ? 'Edit Room' : 'Add Room'}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">{room.id ? 'Save' : 'Add'}</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

const AdminScreen = ({ route }) => {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState('');
  const [bookingStats, setBookingStats] = useState({ weeklyStats: 0, monthlyStats: 0 });
  const [reservationData, setReservationData] = useState(null); // Initialize reservationData as null

  const addRoom = () => {
    if (roomName.trim() === '') {
      return;
    }
    const newRoom = {
      id: Math.random().toString(),
      name: roomName,
    };
    setRooms((prevRooms) => [...prevRooms, newRoom]);
    setRoomName('');
  };

  const editRoom = (roomId, updatedDetails) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId ? { ...room, ...updatedDetails } : room
      )
    );
  };

  const deleteRoom = (roomId) => {
    setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
  };

  const viewBookings = (roomId) => {
    // Implement code to view bookings for the selected room
    // For simplicity, let's just log the selected room's ID for now.
    console.log(`View bookings for room with ID: ${roomId}`);
  };

  const generateBookingStatistics = () => {
    // Implement your logic to calculate weeklyStats and monthlyStats here
    // For demonstration purposes, let's set some dummy values.
    const calculatedStats = {
      weeklyStats: 50, // Replace with your calculation
      monthlyStats: 200, // Replace with your calculation
    };
    setBookingStats(calculatedStats);
  };

  // Function to fetch reservation data from the ConfirmationScreen
  const fetchReservationData = () => {
    // Check if the route parameter contains reservation data
    if (route.params && route.params.reservationData) {
      const newReservationData = route.params.reservationData;
      setReservationData(newReservationData);
    }
  };

  useEffect(() => {
    fetchReservationData();
  }, [route.params]);

  return (
    <div className="container">
      <h1 className="title">Room Listing Management</h1>
      <input
        className="input"
        type="text"
        placeholder="Enter room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <button onClick={addRoom}>Add Room</button>
      <ul>
        {rooms.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => editRoom(item.id, { name: 'Updated Name' })}>Edit</button>
            <button onClick={() => deleteRoom(item.id)}>Delete</button>
            <button onClick={() => viewBookings(item.id)}>View Bookings</button>
          </li>
        ))}
      </ul>

      {reservationData && (
        <div>
          <h2 className="title">Reservation Data</h2>
          <p>Name: {reservationData.name}</p>
          <p>Number of Guests: {reservationData.guests}</p>
          {reservationData.date && <p>Date: {reservationData.date.toDateString()}</p>}
          {reservationData.time && <p>Time: {reservationData.time.toLocaleTimeString()}</p>}
          {reservationData.room && <p>Room: {reservationData.room.name}</p>}
        </div>
      )}
    </div>
  );
};

export default AdminMain;
