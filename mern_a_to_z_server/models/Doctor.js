const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  medical_expertise: {
    type: Number,
    required: true
  },
  racial_inclusivity: {
    type: Number,
    required: true
  },
  timeliness: {
    type: Number,
    required: true
  },
  pronouns: {
    type: Number,
    required: true
  },
  consideration: {
    type: Number,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  reviews: {
    type: Array,
  }
});

module.exports = Doctor = mongoose.model('doctor', DoctorSchema);
