import React from "react";

import { VscEdit } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";

import EditTask from "./EditTask";
//to be able to display he tasks
const ListTask = ({
  todos,
  toggleComplete,
  handleDeleteTodo,
  editTodo,
  handleUpdate,
}) => {
  return (
    <div className=" flex  flex-col justify-center items-center gap-4 w-full mt-5">
      {todos.map((todo) => {
        return todo.isEditing ? (
          <EditTask key={todo.id} todo={todo} handleUpdate={handleUpdate} />
        ) : (
          <div
            key={todo.id}
            className="flex items-center w-full max-w-md lg:max-w-lg gap-3"
          >
            <div className="bg-white flex justify-between w-full shadow-sm sm:shadow-md px-4 py-2 lg:px-8 lg:py-4 cursor-pointer text-xl pb-2 lg:pb-4">
              {" "}
              <span
                onClick={() => toggleComplete(todo.id)}
                className={`${
                  todo.completed ? "line-through" : ""
                } text-base sm:text-xl `}
              >
                {todo.task}
              </span>
              <div className="flex gap-3">
                <VscEdit
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  onClick={() => editTodo(todo.id)}
                />
                {/* Edit */}

                <RiDeleteBin6Line
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  onClick={() => handleDeleteTodo(todo.id)}
                />
                {/* Delete */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTask;
