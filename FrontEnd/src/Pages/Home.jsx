import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-sky-400
       bg-center"
    >
      <div className="flex flex-col space-y-5">
        <h1 className="text-3xl font-bold">MY TO-DO APP</h1>
        <button
          onClick={() => navigate("/signin")}
          className="px-8 py-3 bg-white rounded-md hover:bg-[#6A9ACA]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
