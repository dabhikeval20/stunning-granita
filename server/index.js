const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory store for consultation requests (No database required)
const consultationRequests = [];

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'DZ Infotech API Server is running' });
});

// Contact / Consultation Form Submission Endpoint
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, phone, email, age, income, goal, message } = req.body;

  if (!firstName || !phone) {
    return res.status(400).json({
      status: 'error',
      message: 'First name and phone number are required.'
    });
  }

  const newRequest = {
    id: Date.now(),
    firstName,
    lastName,
    phone,
    email,
    age,
    income,
    goal,
    message,
    submittedAt: new Date().toISOString()
  };

  consultationRequests.push(newRequest);
  console.log('New Consultation Request Received:', newRequest);

  res.status(200).json({
    status: 'success',
    message: 'Thank you! Our expert advisor will reach out within 24 hours.',
    data: newRequest
  });
});

// Endpoint to list requests (for verification)
app.get('/api/contact/requests', (req, res) => {
  res.json({
    status: 'success',
    count: consultationRequests.length,
    data: consultationRequests
  });
});

// Standalone execution check
if (require.main === module) {
  const clientDistPath = path.join(__dirname, '../client/dist');
  app.use(express.static(clientDistPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(`DZ Infotech MERN Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
