const mongoose = require('mongoose');

const PantrySchema = new mongoose.Schema({
  staffName: { type: String, required: true },
  contactInfo: { type: String, required: true },
  location: { type: String, required: true },
  tasks: [
    {
      patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
      mealType: { type: String, enum: ['morning', 'evening', 'night'], required: true },
      status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    },
  ],
});

module.exports = mongoose.model('Pantry', PantrySchema);
