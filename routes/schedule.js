const express = require("express");
const router = express.Router();
const scheduleController = require("../controllers/sheduleController.js");


router.post("/professor/schedule/:userId", scheduleController.addProfessorItem);

router.delete("/professor/schedule/:userId", scheduleController.removeProfessorItem);

router.delete("/professor/schedule/recurring/:userId", scheduleController.removeProfessorRecurringItem);

router.get("/schedule/:professorId", scheduleController.getItems);

router.post("/student/schedule/:userId", scheduleController.addStudentItem);

router.delete("/student/schedule/:userId", scheduleController.removeStudentItem);

module.exports = router;
