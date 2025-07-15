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
      // return;
    }
    handleUpdate(todo.id, edit);
  };

  return (
    <div className="flex w-full  justify-center items-center">
      <form
        className="flex w-full max-w-md lg:max-w-lg gap-4"
        onSubmit={handleTaskSubmit}
      >
        <input
          type="text"
          placeholder=""
          className="flex-grow border px-4 py-2 lg:px-8 lg:py-4 rounded outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          value={edit}
          onChange={handleTaskChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 lg:px-8 lg:py-4 rounded hover:bg-blue-600 transition-colors text-sm sm:text-base"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTask;
