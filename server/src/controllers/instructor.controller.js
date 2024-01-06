const Constraint = require("../models/constraint.model");
const Instructor = require("../models/instructor.model");

const getInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.find();
    res.json(instructor);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const createInstructor = async (req, res) => {
  try {
    const { name, lessons } = req.body;

    const newInstructor = new Instructor({
      name,
      lessons,
    });

    const savedInstructor = await newInstructor.save();

    res.status(201).json(savedInstructor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteInstructor = async (req, res) => {
  const id = req.params.instructorID;
  try {
    const removedInstructor = await Instructor.findByIdAndDelete(id);
    res.json(removedInstructor);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const updateInstructor = async (req, res) => {
  const id = req.params.instructorID;
  try {
    const updatedInstructor = await Instructor.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedInstructor);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = {
  getInstructor,
  createInstructor,
  deleteInstructor,
  updateInstructor,
};
