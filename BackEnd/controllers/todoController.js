const todoModel = require("../models/todoModel");
// create
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

//retrieve

const retrieveTodo = async (req, res) => {
  try {
    const todo = await todoModel.find();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "failed to fetch" });
  }
};
//update
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("updating with id", id);
    //data from req body
    const updateTodo = req.body;
    const updatedTodo = await todoModel.findByIdAndUpdate(id, updateTodo, {
      new: true,
    });
    if (!updatedTodo) {
      return res.status(404).json({ message: "not found" });
    }
    return res
      .status(200)
      .json({ message: "updated successfully", data: updatedTodo });
  } catch (error) {
    console.error("error:", error);
    return res
      .status(400)
      .json({ message: "no id found", error: error.message });
  }
};
//delete

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("deleting with id", id);
    const deletedTodo = await todoModel.findByIdAndDelete(id);
    if (!deletedTodo) {
      console.log("todo not found with id", id);
      return res
        .status(400)
        .json({ message: "todo not found", data: deletedTodo });
    }
    console.log("successfully deleted", deleteTodo);
    return res.json({ message: "deleted successfully", data: deletedTodo });
  } catch (error) {
    console.error("error:", error);
    return res.status(500).json({ message: "error", error: error.message });
  }
};
//update

//

module.exports = { createTodo, retrieveTodo, deleteTodo, updateTodo };
