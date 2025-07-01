import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInApi } from "../api/api";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //validation
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const validate = () => {
    let error = { ...errors };
    //username validation

    const emailCond = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      error.email = "Email is required";
    } else if (!emailCond.test(formData.email)) {
      error.email = "Please enter a valid email (email@domain.com)";
    } else {
      error.email = "";
    }
    //pass validation
    const passwordCond = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,20}$/;
    if (!formData.password.trim()) {
      error.password = "Password is required";
    } else if (!passwordCond.test(formData.password)) {
      error.password = "Enter a valid password (Password2@)";
    } else {
      error.password = "";
    }

    setErrors(error);
    return error;
  };
  //handlechanges
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    value;
  };
  //prevent submit
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );

    if (hasErrors) {
      return; // Don't submit if there are errors
    }

    try {
      await signInApi(formData.email, formData.password);
      alert("successful login");

      setFormData({
        email: "",
        password: "",
      });

      //navigate
      navigate("/todopage");
    } catch (error) {
      alert("sign in failed:" + error.message);
      console.log(error);
    }
    // console.log(` Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white flex rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full">
        {/**sign in  left*/}

        <div className="w-full md:w-1/2 p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="font-bold text-4xl text-gray-800 mb-2">
              Welcome back
            </h1>
            <p className="text-gray-600 text-lg">Please enter your details</p>
          </div>
          <form
            autoComplete="off"
            className="space-y-8"
            onSubmit={handleSignInSubmit}
          >
            {/*email*/}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleChanges(e)}
              ></input>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            {/*password*/}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleChanges(e)}
              ></input>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            {/*check box remember*/}
            <div className="flex justify-between  mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4   bg-gray-100 border-gray-300 rounded focus:ring-[#6A9ACA] focus:ring-2"
                />

                <label htmlFor="remember" className="ml-2 text-gray-700">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="">
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#6A9ACA]  text-white font-semibold py-3 px-6 rounded-xl    hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              Sign In
            </button>
            <div className="grid grid-cols-3 mt-10 items-center text-gray-500 ">
              <hr className="border-gray-400" />
              <p className="text-xl text-center">OR</p>
              <hr className="border-gray-400" />
            </div>
            <div className="flex justify-between">
              <p className="">Dont have an account?</p>

              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
        {/**sign in  left*/}
        <div className=" md:block hidden  md:w-1/2  ">
          <div>
            <img src="Images/todo.jpg" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
