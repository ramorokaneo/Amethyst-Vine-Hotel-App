import React from 'react';
import GuestInfoPage from './GuestInfoPage'; // Adjust the import path based on your project structure

function BookingPage() {
  // Define your room object
  const yourRoomObject = {
    id: 1,
    name: 'Sample Room',
    price: 100, // or any other value
    // ... other properties
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <GuestInfoPage room={yourRoomObject} />
      {/* Other content of the BookingPage */}
    </div>
  );
}

export default BookingPage;
