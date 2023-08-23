import React, { useState } from 'react';

const sidebarStyle = {
  backgroundColor: 'lightgrey',
  color: 'white',
  width: '200px',
  minHeight: '100vh',
  padding: '20px',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',  // Center vertically
};

const mainContentStyle = {
  flex: 1,  // Allow main content to take remaining width
  textAlign: 'center',  // Center content horizontally
};

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const handleMenuItemClick = (menuItem) => {
    setSelectedItem(menuItem);
    // Perform logic related to selected menu item (e.g., navigate or update content)
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <ul>
          <li
            onClick={() => handleMenuItemClick('Dashboard')}
            className={selectedItem === 'Dashboard' ? 'selected' : ''}
          >
            Dashboard
          </li>
          <li
            onClick={() => handleMenuItemClick('Rooms')}
            className={selectedItem === 'Rooms' ? 'selected' : ''}
          >
            Rooms
          </li>
          <li
            onClick={() => handleMenuItemClick('Reservations')}
            className={selectedItem === 'Reservations' ? 'selected' : ''}
          >
            Reservations
          </li>
          {/* Add more menu items */}
        </ul>
      </div>
      <div style={mainContentStyle}>
        {/* Centered main content */}
        <h2>Dashboard Content</h2>
        {/* Add additional dashboard content here */}
      </div>
    </div>
  );
}

export default Sidebar;
