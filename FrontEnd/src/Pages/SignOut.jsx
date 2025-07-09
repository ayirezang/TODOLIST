import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOutApi } from "../api/api";

const SignOut = () => {
  const navigate = useNavigate();

  //prevent submit
  const handleSignOut = async (e) => {
    try {
      await signOutApi();
      navigate("/signin", {
        state: {
          message: "you have signed out successfully",
          messageType: "success",
        },
      });
    } catch (error) {
      console.error("signed out failed:", error);
    }
  };

  const handleCancel = () => {
    navigate("/todopage");
  };
  return (
    <div className="bg-gray-50 min-h-screen p-4 ">
      <div className=" min-h-screen flex justify-center items-center space-x-6">
        <button
          onClick={handleSignOut}
          type="submit"
          className=" bg-red-500  text-white font-semibold py-3 px-6 rounded-xl    hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200"
        >
          Sign Out
        </button>

        <button
          onClick={handleCancel}
          className="text-white py-3 px-6 rounded-xl bg-[#6A9ACA] hover:sha hover:text-blue-800  shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 font-semibold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SignOut;
