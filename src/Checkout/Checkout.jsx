import React from "react";
import "./Checkout.css";
import data from "../data/data";
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";

const Checkout = ({items, setItems, total}) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
    return(
        <div className="checkout">
            <h2>Total: ${total}</h2>
            <h1>Checkout</h1>
            {items && items.map((item,index) => {
                return(
                    <div key={index}>
                        {/* {name: item.name, price: item.price, count: 1} */}
                        <img className='food-image-checkout' src={data[item.id - 1].img} alt={item.name} />
                        <h3>{item.name} x {item.count} = $ {item.price * item.count}</h3>
                    </div>
                )
            })}
            <CheckoutForm />
        </div>
    );
};

export default Checkout;