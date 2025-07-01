import { Routes, Route } from "react-router-dom";
import TodoPage from "./Pages/TodoPage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todopage" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;

// import React from "react";

// import { Routes, Route } from "react-router-dom";

// import TodoPage from "./Pages/TodoPage";
// import SignIn from "./Pages/SignIn";
// import SignUp from "./Pages/SignUp";
// import NavBar from "./Components/NavBar";
// import Home from "./Pages/Home";

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} /> {/**  <TodoPage />*/}
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/todopage" element={<TodoPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
