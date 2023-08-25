import React, { useState } from 'react';

function GuestForm() {
  const [guestInfo, setGuestInfo] = useState({
    title: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Guest Info:', guestInfo);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={guestInfo.title}
          onChange={(e) => setGuestInfo({ ...guestInfo, title: e.target.value })}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={guestInfo.name}
          onChange={(e) => setGuestInfo({ ...guestInfo, name: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={guestInfo.email}
          onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={guestInfo.phone}
          onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
        />
      </label>

      <button type="submit">Submit Guest Information</button>
    </form>
  );
}

export default GuestForm;
