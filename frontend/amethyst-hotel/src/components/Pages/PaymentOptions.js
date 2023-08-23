import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faApple,
  faGooglePay,
  faStripe
} from '@fortawesome/free-brands-svg-icons';
import GooglePayButton from '../Payments/GooglePayButton';
import QRCodePayment from '../Payments/QRCodePayment';
import StripeCardPayment from '../Payments/StripeCardPayment';
import '../styles.css';

library.add(faApple, faGooglePay, faStripe);

function PaymentOptions({ onSelectPaymentMethod }) {
  return (
    <div className="payment-options-container">
      <h2 className="payment-options-heading">Payment Options</h2>
      <div className="payment-buttons">
      <button
  className="payment-button"
  onClick={() => onSelectPaymentMethod('Apple Pay')}
>
  <FontAwesomeIcon icon={faApple} /> Pay with Apple Pay
</button>

        <button
          className="payment-button"
          onClick={() => onSelectPaymentMethod('Google Pay')}
        >
          <FontAwesomeIcon icon={faGooglePay} /> Pay with Google Pay
        </button>
        <button
          className="payment-button"
          onClick={() => onSelectPaymentMethod('Stripe Card Payment')}
        >
          <FontAwesomeIcon icon={faStripe} /> Pay with Stripe Card
        </button>
        <GooglePayButton onSelectPaymentMethod={onSelectPaymentMethod} />
        <QRCodePayment onSelectPaymentMethod={onSelectPaymentMethod} />
        <StripeCardPayment onSelectPaymentMethod={onSelectPaymentMethod} />
      </div>
    </div>
  );
}

export default PaymentOptions;
