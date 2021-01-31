const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  popularity: Number,
  biography: String,
  image: String,
  colleagues: Array,
});

module.exports = mongoose.model('Employee', employeeSchema);
