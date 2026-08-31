const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

// All task routes require authentication
router.use(authMiddleware);

// CREATE
router.post("/", createTask);

// READ ALL
router.get("/", getTasks);

// READ ONE
router.get("/:id", getTask);

// UPDATE
router.put("/:id", updateTask);

// DELETE
router.delete("/:id", deleteTask);

module.exports = router;
