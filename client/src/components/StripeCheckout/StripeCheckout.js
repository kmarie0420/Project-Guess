import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripePaymentButton = () => {
  // This function will be called when the payment is successful.
  const handleToken = (token) => {
    // You can send the token to your server and process the payment there.
    // In a real application, you should call your backend API to handle the payment.
    // Example API call:
    // fetch('/your/payment/endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify(token),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle the response from your server
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <StripeCheckout
      token={handleToken}
      stripeKey="YOUR_STRIPE_PUBLIC_KEY"
      amount={1000} // Amount in cents
      name="Example Store"
      description="Example Product"
      currency="USD"
      image="https://yourwebsite.com/logo.png"
    >
      <button>Pay with Card</button>
    </StripeCheckout>
  );
};

export default StripePaymentButton;