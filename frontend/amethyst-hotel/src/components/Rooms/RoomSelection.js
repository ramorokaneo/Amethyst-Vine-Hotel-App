import React from 'react';

function RoomSelection({ onSelectRoom }) {
  // Define your room data or fetch from API
  const rooms = [
    { id: 1, name: 'Standard Room', price: 100 },
    { id: 2, name: 'Deluxe Room', price: 150 },
    // ...
  ];

  return (
    <div>
      <h3>Select a Room</h3>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            {room.name} - ${room.price}
            <button onClick={() => onSelectRoom(room)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomSelection;
