const mongoose = require("mongoose");
const Constraint = require("./constraint.model");

const InstructorsSchema = new mongoose.Schema({
  name: String,
  lessons: [{ lessonName: String, day: String, time: String, classNo: Number }],
});

const Instructor = mongoose.model("Instructor", InstructorsSchema);

module.exports = Instructor;
