import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const FormTodo = ({ handleAddTask }) => {
  const [task, setTask] = useState("");

  //
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  //handlesubmit
  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      return;
    }
    // const newTodo = {
    //   task: task,
    //   id: uuid(),
    //   completed: false,
    //   isEditing: false,
    // };

    handleAddTask({ task: task, completed: false });
    setTask("");
  };

  return (
    <div className="flex w-full justify-center items-center">
      <form
        autoComplete="off"
        className="flex w-full max-w-md lg:max-w-lg gap-4"
        onSubmit={handleTaskSubmit}
      >
        <input
          type="text"
          placeholder="Enter a task"
          className="flex-grow border px-4 py-2 lg:px-8  rounded outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          value={task}
          onChange={handleTaskChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2  lg:px-8 lg:py-4 rounded hover:bg-blue-600 transition-colors text-sm sm:text-base"
        >
          Add task
        </button>
      </form>
    </div>
  );
};

export default FormTodo;
