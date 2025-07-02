const express = require("express");
const router = express.Router();
const todoModel = require("../models/todoModel");
const {
  createTodo,
  retrieveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.post("/todos", createTodo);
router.get("/todos", retrieveTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;
