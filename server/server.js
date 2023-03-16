const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('pk_live_51MlncVHw8fIJEUqvnmi1Bojn84giJRXd9kFNbOiBDAIZZkGK9VwrvIYVygD4i8MIwccPaLlsTuAf3zhK1YQSKNYZ00kJoTC2OR');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.status(200).send(paymentIntent.client_secret);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});