import React, { useEffect } from 'react';

function GooglePayButton({ onSelectPaymentMethod }) {
  useEffect(() => {
    // Initialize Google Pay integration here
  }, []);

  return (
    <button onClick={() => onSelectPaymentMethod('googlePay')}>Pay with Google Pay</button>
  );
}

export default GooglePayButton;
