const router = require("express").Router();
const {
  getInstructor,
  createInstructor,
  deleteInstructor,
  updateInstructor,
} = require("../controllers/instructor.controller");

router.get("/instructor", getInstructor);
router.post("/instructor", createInstructor);
router.delete("/instructor/:instructorID", deleteInstructor);
router.put("/instructor/:instructorID", updateInstructor);

module.exports = router;
