const express = require('express');
const fs = require('fs');

const app = express();

// Serve the notes.html file on the GET /notes route
app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html');
});

// Serve the index.html file on all other routes
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});