const express = require("express");
const router = express.Router();
const todoModel = require("../models/todoModel");
const {
  createTodo,
  retrieveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.post("/tasks", createTodo);
router.get("/tasks", retrieveTodo);
router.put("/tasks/:id", updateTodo);
router.delete("/tasks/:id", deleteTodo);

module.exports = router;
