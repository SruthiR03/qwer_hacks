const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  cleanliness: {
    type: Number,
    required: true
  },
  racial_inclusivity: {
    type: Number,
    required: true
  },
  helpfulness: {
    type: Number,
    required: true
  },
  pronouns: {
    type: Number,
    required: true
  },
  professionalism: {
    type: Number,
    required: true
  },
  reviews: {
    type: Array,
    // required: true,
  }
});

module.exports = Book = mongoose.model('book', BookSchema);
