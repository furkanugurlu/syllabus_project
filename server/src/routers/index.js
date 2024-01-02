const router = require("express").Router();

const teacher = require("./teacher.routers");

router.use(teacher);

module.exports = router;
