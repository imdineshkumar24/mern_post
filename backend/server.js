const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1/mern-stack-sample', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));

// Routes
const tasksRouter = require('./task');
app.use('/tasks', tasksRouter);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
