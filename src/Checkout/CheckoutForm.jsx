import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Checkout.css';

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 1000 }), // replace with the amount you want to charge
      });

      const clientSecret = await response.text();

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
        setLoading(false);
      } else {
        // Payment was successful
        setLoading(false);
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="cardElement">
          <CardElement />
        </div>
        {error && <p className="errorMessage">{error}</p>}
        <button disabled={!stripe || loading} type="submit">
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;