const todoModel = require("../models/todoModel");
// create
// const createTodo = async (req, res) => {
//   const { task } = req.body;

//   try {
//     const todoDetails = new todoModel({
//       task,
//       description: req.body.description || "",
//     });
//     await todoDetails.save();
//     res.status(201).json({ meg: "task successfully created" });
//   } catch (error) {
//     res.status(500).json({ message: "server error", error });
//   }
// };
const createTodo = async (req, res) => {
  const { task } = req.body;

  try {
    const todoDetails = new todoModel({
      task,
      description: req.body.description || "",
    });
    const savedTodo = await todoDetails.save();
    res.status(201).json(savedTodo);
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
    const { task } = req.body;
    // console.log("updating with id", id);
    //data from req body
    // const updateTodo = req.body;
    const updatedTodo = await todoModel.findByIdAndUpdate(
      id,
      { task },
      {
        new: true,
      }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: "not found" });
    }
    return res.status(200).json(updatedTodo);
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
