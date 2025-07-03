import Cookie from "js-cookie";
import axios from "axios";

//set baseUrl for axios

const api = axios.create({
  baseURL: "http://127.0.0.1:4001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

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

export const createTodo = async (task) => {
  try {
    const response = await api.post("/tasks", taskName);
    return response.data;
  } catch (error) {
    console.error("creating error", error);
    console.error("error response", error.message);
    console.error("error Data", error.response?.data);
    throw new Error(error.response?.data?.message || "creating task failed");
  }
};
