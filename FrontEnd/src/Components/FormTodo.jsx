import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const FormTodo = ({ handleAddTask }) => {
  const [task, setTask] = useState("");
  //
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  //handlesubmit
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      return;
    }
    let newTodo = {
      task: task,
      id: uuid(),
      completed: false,
      isEditing: false,
    };
    handleAddTask(newTodo); //add inpu
    // addTodo("Task added:", task);
    setTask("");
  };

  return (
    <div className="flex w-full  justify-center items-center">
      <form className="flex w-full max-w-md" onSubmit={handleTaskSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          className="flex-grow border px-4 py-1  rounded-l outline-none focus:ring-2 focus:ring-blue-400"
          value={task}
          onChange={handleTaskChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors"
        >
          Add task
        </button>
      </form>
    </div>
  );
};

export default FormTodo;
