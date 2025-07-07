import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { createTodo, retrieveTodo } from "../api/api";

const FormTodo = ({ handleAddTask }) => {
  const [task, setTask] = useState("");

  //
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    const getTodo = async () => {
      try {
        const retrievedTodo = await retrieveTodo();
        console.log(retrievedTodo);
      } catch (error) {
        console.error("Error:", error.response?.data || error.message);
      }
    };
    getTodo();
  }, []);

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

    try {
      const createdTodo = await createTodo({
        task: task,
        completed: false,
      });
      handleAddTask(createdTodo); //add inpu
      // console.log(createdTodo);
      // setTask("");
      // const response = await createTodo(newTodo);
      // console.log("backend response:", response);
      // if (response.task) {
      //   handleAddTask(response.task);
      // }
      setTask("");
    } catch (error) {
      console.log("error creating task", error);
    }
  };

  return (
    <div className="flex w-full  justify-center items-center ">
      <form
        autoComplete="off"
        className="flex w-full max-w-md gap-4"
        onSubmit={handleTaskSubmit}
      >
        <input
          type="text"
          placeholder="Enter a task"
          className="flex-grow border px-4 py-2  rounded outline-none focus:ring-2 focus:ring-blue-400"
          value={task}
          onChange={handleTaskChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add task
        </button>
      </form>
    </div>
  );
};

export default FormTodo;
