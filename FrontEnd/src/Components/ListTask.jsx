import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditTask from "./EditTask";
//to be able to display he tasks
const ListTask = ({
  todos,
  toggleComplete,
  deleteTodo,
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
                <FaRegEdit className="" onClick={() => editTodo(todo.id)} />
                <MdDelete className="" onClick={() => deleteTodo(todo.id)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTask;
