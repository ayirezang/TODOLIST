const express = require("express");
const router = express.Router();
const todoModel = require("../models/todoModel");
const { createTodo } = require("../controllers/todoController");

router.post("/todos", createTodo);

module.exports = router;
