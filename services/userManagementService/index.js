const express = require('express');
const bodyParser = require('body-parser');
const { getUserInformationController, getUserInformationByEmailController } = require('./controllers/userManagementController');

const app = express();
app.use(bodyParser.json());

// GET /users/:id
app.get('/users/:id', getUserInformationController);

app.get('/users/:email', getUserInformationByEmailController);

// Start the server
app.listen(3000, () => {
  console.log('User Management Service is running on port 3000');
});
