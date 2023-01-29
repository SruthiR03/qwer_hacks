const express = require('express');
const connectDB = require('./config/db');

const cors = require('cors');

const app = express();

const books = require('./routes/api/books');
const doctors = require('./routes/api/doctors');

// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/books', books);
app.use('/api/doctors', doctors);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
