const express = require('express');
const bodyParser = require('body-parser');
const { processPaymentController } = require('./controllers/paymentGatewayController');

const app = express();
app.use(bodyParser.json());

// POST /payments
app.post('/payments', processPaymentController);

// Start the server
app.listen(3003, () => {
  console.log('Payment Gateway Service is running on port 3003');
});
