import React from 'react';
import { useStripe, useElements, CardElement, Elements } from '@stripe/react-stripe-js';

function StripeCardPayment({ onSelectPaymentMethod }) {
  const stripe = useStripe();
  const elements = useElements();

  const handleStripePayment = async () => {
    if (!stripe || !elements) {
      console.log("Stripe or elements haven't loaded yet.");
      return;
    }

    // Create a PaymentIntent on your server
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 1000, // Replace with your desired payment amount in cents
        currency: 'usd', // Replace with your desired currency
      }),
    });

    const data = await response.json();

    // Handle any errors from creating the PaymentIntent
    if (data.error) {
      console.log('Error creating PaymentIntent:', data.error.message);
      return;
    }

    // Confirm the PaymentIntent
    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement), // Use CardElement from elements object
      },
    });

    if (result.error) {
      console.log('Error confirming PaymentIntent:', result.error.message);
    } else {
      console.log('PaymentIntent confirmed:', result.paymentIntent.id);
      // Notify parent component about successful payment
      onSelectPaymentMethod('stripeCard');
    }
  };

  return (
    <div>
      <Elements stripe={stripe}>
        <CardElement /> {/* Display the card element for collecting card information */}
        <button onClick={handleStripePayment}>Pay with Card</button>
      </Elements>
    </div>
  );
}

export default StripeCardPayment;
