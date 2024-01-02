const teacher = require("../models/teacher.model");

const getTeacher = (req, res) => {
  const teacher = teacher.find({});
  res.send(teacher);
};

module.exports = { getTeacher };
