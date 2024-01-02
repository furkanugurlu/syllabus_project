const router = require("express").Router();
const { getTeacher } = require("../controllers/teacher.controller");

router.get("/", getTeacher);

module.exports = router;
