import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen w-full  flex flex-col items-center justify-center p-4 bg-[#6A9ACA]
       "
    >
      <div className="flex flex-col space-y-4 md:space-y-5 text-center">
        <h1 className="text-2xl md:text-3xl text-white font-bold">
          MY TO-DO APP
        </h1>
        <button
          onClick={() => navigate("/signin")}
          className="px-8 py-3 bg-white rounded-md hover:bg-[#DA8929] hover:text-white"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
