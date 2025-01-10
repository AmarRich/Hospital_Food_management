const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

// const MONGO_URI = process.env.MONGO_URI;

// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB:', err));


require('dotenv').config();
const connectDB = require('./db');

connectDB();


  const Patient = require('./models/Patient');

app.post('/patients', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).send(patient);
  } catch (error) {
    res.status(400).send(error);
  }
});


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const patientsRoute = require('./routes/patientsRoute');
app.use('/api/patients', patientsRoute);
