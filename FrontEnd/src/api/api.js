import Cookie from "js-cookie";
import axios from "axios";

//set baseUrl for axios

const api = axios.create({
  baseURL: "http://127.0.0.1:4001/api",
  headers: {
    "Content-Type": "application/json",
  },
});
//signup
export const signUpApi = async (Username, email, password) => {
  try {
    const response = await api.post("/signup", {
      Username,
      email,
      password,
    });
    Cookie.set("token", response.data.token, { expires: 5 });
    return response.data;
  } catch (error) {
    console.error("sign up error:", error);
    console.error("error response:", error.response);
    throw new Error(error.response?.data?.message || "sign up failed");
  }
};
// signinApi
export const signInApi = async (email, password) => {
  try {
    const response = await api.post("/signin", { email, password });
    Cookie.set("token", response.data.token, { expires: 5 });
    return response.data;
  } catch (error) {
    console.error("sign in error:", error);
    console.error("error response:", error.response);
    throw new Error(error.response?.data?.message || "sign in failed");
  }
};
// signoutApi
export const signOutApi = async (email, password) => {
  try {
    const response = await api.post("/signout", { email, password });
    Cookie.set("token", response.data.token, { expires: 5 });
    return response.data;
  } catch (error) {
    console.error("sign out error:", error);
    console.error("error response:", error.response);
    throw new Error(error.response?.data?.message || "sign out failed");
  }
};
// createtodo
export const createTodo = async (task) => {
  try {
    const response = await api.post("/tasks", task);
    return response.data;
  } catch (error) {
    console.error("creating error", error);
    console.error("error response", error.message);
    console.error("error Data", error.response?.data);
    throw new Error(error.response?.data?.message || "creating task failed");
  }
};
export const retrieveTodo = async () => {
  try {
    const response = await api.get("/tasks");
    return response.data;
  } catch (error) {
    console.error("retrieving  error", error);
    console.error("error response", error.message);
    console.error("error Data", error.response?.data);
    throw new Error(error.response?.data?.message || "retrieving task failed");
  }
};
export const updateTodo = async (id, updatedData) => {
  try {
    const response = await api.put(`/tasks/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("updating  error", error);
    console.error("error response", error.message);
    console.error("error Data", error.response?.data);
    throw new Error(error.response?.data?.message || "updating task failed");
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error("deleting   error", error);
    console.error("error response", error.message);
    console.error("error Data", error.response?.data);
    throw new Error(error.response?.data?.message || "deleting  task failed");
  }
};
