import React from "react";

import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoPage from "./Pages/TodoPage";
import SignIn from "./Pages/SignIn";
import SignOut from "./Pages/SignOut";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> {/**  <TodoPage />*/}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/todopage" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
