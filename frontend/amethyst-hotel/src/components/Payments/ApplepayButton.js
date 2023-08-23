import React, { useEffect } from 'react';

function ApplePayButton({ onSelectPaymentMethod }) {
  useEffect(() => {
    // Initialize Apple Pay integration here
  }, []);

  return (
    <button onClick={() => onSelectPaymentMethod('applePay')}>Pay with Apple Pay</button>
  );
}

export default ApplePayButton;
