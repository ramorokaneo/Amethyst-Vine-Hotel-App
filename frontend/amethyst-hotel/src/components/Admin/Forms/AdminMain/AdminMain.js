import React, { useState } from "react";
import styles from "./AdminMain.module.css";
import { roomData } from "../AdminMain/roomData";

const AdminMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
          </ul>
        </div>
        <div
          className={styles.page_content}
          style={{ marginLeft: isSidebarOpen ? "240px" : "0" }}
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

const RoomForm = ({ room = { id: "", name: "", price: "" }, onSubmit, onClose }) => {
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
      <h3>{room.id ? "Edit Room" : "Add Room"}</h3>
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
        <button type="submit">{room.id ? "Save" : "Add"}</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AdminMain;
