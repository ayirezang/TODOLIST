import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

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
            className="flex items-center w-full max-w-md gap-3  pb-2  "
          >
            <div className="bg-white flex justify-between w-full  shadow-md  px-4 py-2  cursor-pointer">
              {" "}
              <span
                onClick={() => toggleComplete(todo.id)}
                className={`${todo.completed ? "line-through" : ""} text-xl `}
              >
                {todo.task}
              </span>
              <div className="flex gap-2">
                <FaRegEdit
                  size={20}
                  // className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                  onClick={() => editTodo(todo.id)}
                />
                {/* Edit */}
                {/* </button> */}
                <AiOutlineDelete
                  size={20}
                  // className="bg-red-500 text-white font-bold py-2 px-4 rounded "
                  onClick={() => handleDeleteTodo(todo.id)}
                />
                {/* Delete */}
                {/* </button> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTask;
