const express = require('express');
const bodyParser = require('body-parser');
const { getWalletBalanceController } = require('./controllers/userWalletController');

const app = express();
app.use(bodyParser.json());

// GET /wallets/:userId/balance
app.get('/wallets/:userId/balance', getWalletBalanceController);

// Start the server
app.listen(3001, () => {
  console.log('User Wallet Service is running on port 3001');
});
