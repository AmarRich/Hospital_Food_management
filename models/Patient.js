const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  roomNumber: { type: String, required: true },
  bedNumber: { type: String, required: true },
  floorNumber: { type: String, required: true },
  contactInfo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  diseases: { type: [String], default: [] },
  allergies: { type: [String], default: [] },
  }
);

module.exports = mongoose.model('Patient', PatientSchema);
