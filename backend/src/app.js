const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Routes
app.post('/merge-pdfs', upload.array('pdfs'), (req, res) => {
  // PDF merging logic will go here
  res.json({ message: 'PDFs received for merging' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
module.exports = app;