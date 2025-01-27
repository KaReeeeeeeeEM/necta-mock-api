// Import required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize dotenv to load environment variables from a .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Environment Variables
const PORT = process.env.PORT || 5000;

// Basic Route
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.get('/results', (req, res) => {
  // Simulate API call to get results from a third-party service
  const results = [
    { subject: 'Mathematics', grade: 'A' },
    { subject: 'Science', grade: 'B' },
    { subject: 'English', grade: 'C' },
    { subject: 'History', grade: 'A' },
    { subject: 'Geography', grade: 'B' },
  ];

  res.json(results);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
