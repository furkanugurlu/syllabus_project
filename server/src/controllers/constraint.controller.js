const Constraint = require("../models/constraint.model");

const getConstraint = async (req, res) => {
  try {
    const constraints = await Constraint.find().populate("instructor");
    res.json(constraints);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createConstraint = async (req, res) => {
  try {
    const { instructor, day, time } = req.body;

    const newConstraint = new Constraint({
      instructor,
      day,
      time,
    });

    const savedConstraint = await newConstraint.save();

    res.status(201).json(savedConstraint);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteConstraint = async (req, res) => {
  const id = req.params.constraintsID;
  try {
    const removedConstraint = await Constraint.findByIdAndDelete(id);
    res.json(removedConstraint);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const updateConstraint = async (req, res) => {
  try {
    const id = req.params.constraintsID;

    const updateConstraint = await Constraint.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(updateConstraint);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getConstraint,
  createConstraint,
  deleteConstraint,
  updateConstraint,
};
