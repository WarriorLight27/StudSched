const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  subject: String,
  date: String,
  time: String,
});

module.exports = mongoose.model("Schedule", scheduleSchema);