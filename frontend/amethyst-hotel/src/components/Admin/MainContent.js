import React, { useEffect, useState } from 'react';
import { getRooms } from './api';

function MainContent() {
  // State to store the fetched rooms data
  const [rooms, setRooms] = useState([]);

  // Fetch rooms data when the component mounts using useEffect
  useEffect(() => {
    // Call the getRooms function from the api module
    getRooms()
      .then(response => setRooms(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="content">
        <div className="charts">
          {/* Add your charts and data visualizations here */}
          <p>Charts will be displayed here</p>
        </div>
        <div className="data-table">
          <h3>Rooms List</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                {/* Add more table headers */}
              </tr>
            </thead>
            <tbody>
              {/* Map over the rooms data and render rows */}
              {rooms.map(room => (
                <tr key={room.id}>
                  <td>{room.id}</td>
                  <td>{room.name}</td>
                  {/* Add more table cells */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
