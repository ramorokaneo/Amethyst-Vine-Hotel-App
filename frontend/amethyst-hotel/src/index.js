import React from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import App from './App'; // Update the path

const stripePromise = loadStripe('pk_test_51NYR59GsGCEOx2tiYzGjLzUsfTjwG2ecnvNKcar3hip8mapr2END5Op6ItqNRZCDqJUkgK0ykRVks5pjX1Coblkw00TnISBlrp');

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

