const express = require("express");
const router = express.Router();
const Schedule = require("../models/Schedule");

// POST: Create a schedule
router.post("/", async (req, res) => {
  try {
    const schedule = await Schedule.create(req.body);
    res.status(201).json(schedule);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: Fetch all schedules
router.get("/", async (req, res) => {
  const schedules = await Schedule.find();
  res.json(schedules);
});

module.exports = router;