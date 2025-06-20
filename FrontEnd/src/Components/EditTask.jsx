import React from "react";
import { useState, useEffect } from "react";

const EditTask = ({ todo, handleUpdate }) => {
  const [edit, setEdit] = useState("");

  useEffect(() => {
    setEdit(todo.task);
  }, [todo]);

  //
  const handleTaskChange = (e) => {
    setEdit(e.target.value);
  };
  //
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (edit.trim() === "") {
      return;
    }
    handleUpdate(todo.id, edit);
  };
  // let newTodo = { task: task, id: uuid() };
  // (updatedTodo = newTodo.id), { todo: edit };
  return (
    <div className="flex w-full  justify-center items-center">
      <form className="flex w-full max-w-md gap-4" onSubmit={handleTaskSubmit}>
        <input
          type="text"
          placeholder=""
          className="flex-grow border px-4 py-2  rounded outline-none focus:ring-2 focus:ring-blue-400"
          value={edit}
          onChange={handleTaskChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTask;
