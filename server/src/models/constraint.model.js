const mongoose = require('mongoose');

const constraintSchema = new mongoose.Schema({
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true },
  day: { type: String, required: true },
  time: { type: String, required: true },
});

const Constraint = mongoose.model('Constraint', constraintSchema);

module.exports = Constraint;