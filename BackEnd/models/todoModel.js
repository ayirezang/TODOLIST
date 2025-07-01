const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;
