const express = require("express");
const router = express.Router();
const todoModel = require("../models/todoModel");
const { createTodo, retrieveTodo } = require("../controllers/todoController");

router.post("/todos", createTodo);
router.get("/todos", retrieveTodo);

module.exports = router;
