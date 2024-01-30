const express = require('express');
const router = express.Router();
const Task = require('./schema');

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Add a new task
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
