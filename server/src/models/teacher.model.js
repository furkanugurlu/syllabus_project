const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  ad: String,
  ders: String,
  gun: String,
  saat: String,
  sinif: String,
});

const teacher = mongoose.model("teacher", TeacherSchema);

module.exports = teacher;
