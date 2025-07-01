const todoModel = require("../models/todoModel");

const createTodo = async (req, res) => {
  const { task, description } = req.body;

  try {
    const todoDetails = new todoModel({ task, description });
    await todoDetails.save();
    res.status(201).json({ meg: "task successfully created" });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

const retrieveTodo = async (req, res) => {
  try {

    
  } catch (error) {}
};
module.exports = { createTodo };
