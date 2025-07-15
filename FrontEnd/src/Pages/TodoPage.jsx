import React, { useState, useEffect } from "react";
import FormTodo from "../Components/FormTodo";
import { v4 as uuidv4 } from "uuid";
import ListTask from "../Components/ListTask";
import { createTodo, retrieveTodo, updateTodo, deleteTodo } from "../api/api";
import { useNavigate } from "react-router-dom";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  //
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await retrieveTodo();
        setTodos(
          data.map((todo) => ({
            ...todo,
            id: todo._id.toString(),
            isEditing: false,
          }))
        );
        // setTodos(data);
      } catch (error) {
        console.error("Error:", error.response?.data || error.message);
      }
    };
    fetchTodos();
  }, []);
  //handle add + api
  const handleAddTask = async (newTodo) => {
    try {
      const createdTodo = await createTodo(newTodo);
      setTodos((prev) => [
        ...prev,
        { ...createdTodo, id: createdTodo._id.toString() },
      ]);
    } catch (error) {
      console.error("error: ", error.response?.data || error.message);
    }
  };
  //mark complete
  const toggleComplete = async (id) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      await updateTodo(id, {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      });
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (error) {
      console.error("toggle error:", error);
    }
  };
  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }
  //
  const handleUpdate = async (id, newTask) => {
    try {
      await updateTodo(id, { task: newTask });
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
        )
      );
    } catch (error) {
      console.error("error updating:", error);
    }
  };
  //delete todo with api

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((tasks) => tasks.id !== id)); //deleting task
    } catch (error) {
      console.error("error deleting :", error);
    }
  };

  //
  return (
    <div className="min-h-screen  relative bg-gray-50 p-4 ">
      <button
        onClick={() => navigate("/signout")}
        className=" absolute top-4 right-4 px-4 py-2 lg:px-8  text-white bg-blue-600 rounded-md hover:bg-red-600"
      >
        Sign out
      </button>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-full max-w-3xl flex flex-col justify-center items-center bg-white  shadow-2xl rounded-3xl p-6 mt-44">
          <h1 className="mb-5 font-bold text-2xl">TODO LIST</h1>
          <FormTodo handleAddTask={handleAddTask} />
          <ListTask
            todos={todos}
            handleAddTask={handleAddTask}
            toggleComplete={toggleComplete}
            handleDeleteTodo={handleDeleteTodo}
            editTodo={editTodo}
            handleUpdate={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
