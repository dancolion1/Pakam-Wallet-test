const express = require('express');
const bodyParser = require('body-parser');
const { sendDepositNotificationController } = require('./controllers/notificationController');
const cors = require('cors');
require('dotenv').config()

const app = express();

// Enable CORS
app.use(cors());
app.use(bodyParser.json());



// POST /notifications/deposit
app.post('/notifications/deposit', sendDepositNotificationController);

// Start the server
app.listen(3002, () => {
  console.log('Notification Service is running on port 3002');
});
