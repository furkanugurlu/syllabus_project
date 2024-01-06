const router = require("express").Router();

const instructor = require("./instructor.routers");
const constraint = require("./constraint.routers");

router.use(instructor);
router.use(constraint);

module.exports = router;
