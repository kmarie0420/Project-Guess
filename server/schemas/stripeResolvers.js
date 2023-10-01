const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const resolvers = {
  Mutation: {
    createPaymentIntent: async (_, { amount, currency, paymentMethodId }) => {
      try {
        // Create a payment intent using the Stripe API
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency,
          payment_method: paymentMethodId,
          // Add other payment options and confirm the payment
        });

        // Return the client secret to the client
        return {
          clientSecret: paymentIntent.client_secret,
        };
      } catch (error) {
        console.error('Error creating payment intent:', error);
        throw new Error('Payment intent creation failed');
      }
    },
  },
};

module.exports = resolvers;