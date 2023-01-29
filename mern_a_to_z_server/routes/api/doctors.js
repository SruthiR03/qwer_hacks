const express = require('express');
const router = express.Router();

// Load Book model
const Doctor = require('../../models/Doctor');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('doctor route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Doctor.find()
    .then((doctors) => res.json(doctors))
    .catch((err) => res.status(404).json({ nodoctorsfound: 'No Doctors found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Doctor.findById(req.params.id)
    .then((doctor) => res.json(doctor))
    .catch((err) => res.status(404).json({ nobookfound: 'No Doctor found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Doctor.create(req.body)
    .then((doctor) => res.json({ msg: 'Doctor added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this doctor' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Doctor.findByIdAndUpdate(req.params.id, req.body)
    .then((doctor) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then((doctor) => res.json({ mgs: 'Doctor entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a doctor' }));
});

module.exports = router;
