import React from 'react';

const bookings = [
  {
    id: 1,
    room: 'Deluxe Suite',
    date: '2023-08-15',
    duration: '3 nights',
  },
  {
    id: 2,
    room: 'Standard Room',
    date: '2023-07-22',
    duration: '2 nights',
  },
  // Add more booking entries
];

function BookingHistory() {
  return (
    <div className="booking-history">
      <h2>Booking History</h2>
      <ul className="booking-list">
        {bookings.map((booking) => (
          <li key={booking.id} className="booking-item">
            <h3>{booking.room}</h3>
            <p>Booked on: {booking.date}</p>
            <p>Duration: {booking.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingHistory;
