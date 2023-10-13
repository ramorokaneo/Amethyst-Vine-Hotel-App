import React from 'react';

function Activities() {
    const outdoorActivitiesList = [
        'Swimming',
        'Hiking',
        'Golf',
        'Tennis',
        'Cycling',
        'Beach Volleyball',
        'Fishing',
        'Canoeing',
  ];

  return (
    <div>
      <h2>Outdoor Activities at Amethyst Vine Hotel</h2>
      <ul>
        {outdoorActivitiesList.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
