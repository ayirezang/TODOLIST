import React, { useState } from "react";
import FormTodo from "../Components/FormTodo";
import { v4 as uuidv4 } from "uuid";
import ListTask from "../Components/ListTask";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  //handle add
  const handleAddTask = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };
  //mark complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  //delete todo

  const deleteTodo = (id, newTodo) => {
    setTodos(todos.filter((tasks) => tasks.id !== id)); //deleting task
  };

  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }
  const handleUpdate = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center  py-10 bg-gray-50  ">
      <div className="w-full max-w-3xl flex flex-col justify-center items-center bg-white  shadow-2xl rounded-3xl p-6">
        <h1 className="mb-5 font-bold text-2xl">TODO LIST</h1>
        <FormTodo handleAddTask={handleAddTask} />
        <ListTask
          todos={todos}
          handleAddTask={handleAddTask}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default TodoPage;
