const express = require('express');
const path = require('path');
const cors = require('cors');

require('dotenv').config()

const app = express();

// Enable CORS
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the base URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(process.env.HOST || 8000, () => {
  console.log('Server is running on port 8000');
});