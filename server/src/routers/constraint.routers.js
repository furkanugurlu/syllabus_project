const router = require("express").Router();
const {
  getConstraint,
  createConstraint,
  deleteConstraint,
  updateConstraint,
} = require("../controllers/constraint.controller");

router.get("/constraint", getConstraint);
router.post("/constraint", createConstraint);
router.delete("/constraint/:constraintsID", deleteConstraint);
router.put("/constraint/:constraintsID", updateConstraint);

module.exports = router;
