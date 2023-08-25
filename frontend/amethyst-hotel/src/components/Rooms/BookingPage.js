import React, { useState } from 'react';
import Reservation from './Reservation'; // Adjust the import path
import GuestInfoPage from './GuestInfoPage'; // Adjust the import path
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function BookingPage() {
  // Shared state
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guests, setGuests] = useState(1);

  // Pass state and functions as props to Reservation and GuestInfoPage
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Reservation
              checkIn={checkIn}
              setCheckIn={setCheckIn}
              checkOut={checkOut}
              setCheckOut={setCheckOut}
              guests={guests}
              setGuests={setGuests}
            />
          )}
        />
        <Route
          path="/guest-info/:roomId"
          render={(props) => (
            <GuestInfoPage
              {...props}
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guests}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default BookingPage;
