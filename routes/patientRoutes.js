// const express = require('express');
// const Patient = require('../models/Patient');

// const router = express.Router();

// // Add a new patient
// router.post('/', async (req, res) => {
//     try {
//       const patient = new Patient(req.body);
//       await patient.save();
//       res.status(201).json(patient);
//     } catch (error) {
//       if (error.name === 'ValidationError') {
//         return res.status(400).json({ message: 'Validation failed', errors: error.errors });
//       }
//       res.status(500).json({ message: 'Server error', error: error.message });
//     }
//   });
  

// // Get all patients
// router.get('/', async (req, res) => {
//   try {
//     const patients = await Patient.find();
//     res.status(200).json(patients);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get a specific patient by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const patient = await Patient.findById(req.params.id);
//     if (!patient) return res.status(404).json({ message: 'Patient not found' });
//     res.status(200).json(patient);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Update a patient
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedPatient) return res.status(404).json({ message: 'Patient not found' });
//     res.status(200).json(updatedPatient);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Delete a patient
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
//     if (!deletedPatient) return res.status(404).json({ message: 'Patient not found' });
//     res.status(200).json({ message: 'Patient deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;

// server.js or routes file
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Patient = require('./models/Patient'); // Replace with the actual path to your Patient model

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to create a new patient
app.post('/api/patients', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient); // Respond with the saved patient
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors (validation or connection issues)
  }
});

// Connect to MongoDB and start the server
mongoose.connect('mongodb://localhost:27017/hospital_food_manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
})
.catch(err => console.log(err));
