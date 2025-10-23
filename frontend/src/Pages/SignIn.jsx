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

      // alert("successful login");

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
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white flex flex-col md:flex-row rounded-2xl md:rounded-3xl shadow-md md:shadow-xl overflow-hidden max-w-4xl w-full">
        {/**sign in  left*/}

        <div className="w-full md:w-1/2 p-6 sm:p-8  lg:p-10">
          <div className="mb-6 md:mb-8">
            <h1 className="font-bold text-2xl sm:text-3xl  md:text-4xl text-gray-800 mb-1 md:mb-2">
              Welcome back
            </h1>
            <p className="text-gray-600  text-sm sm:text-base md:text-lg">
              Please enter your details
            </p>
          </div>
          <form
            autoComplete="off"
            className="space-y-6 sm:space-y-8"
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
                className="w-full px-4 py-3 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white text-sm sm:text-base"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleChanges(e)}
              ></input>
              {errors.email && (
                <p className="text-red-500 text-xs sm:text-sm  mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            {/*password*/}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white text-sm sm:text-base"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleChanges(e)}
              ></input>
              {errors.password && (
                <p className="text-red-500 text-xs sm:text-sm   mt-1">
                  {errors.password}
                </p>
              )}
            </div>
            {/*check box remember*/}
            <div className="flex justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4   bg-gray-100 border-gray-300 rounded focus:ring-[#6A9ACA] focus:ring-2"
                />

                <label
                  htmlFor="remember"
                  className="ml-2 text-gray-700 text-sm sm:text-base"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="#"
                  className="text-sm sm:text-base hover:text-blue-800"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#6A9ACA]  text-white font-semibold py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl hover:shadow-lg focus:outline-none focus:ring-2 sm:ring-4 focus:ring-indigo-200"
            >
              Sign In
            </button>
            <div className="grid grid-cols-3 mt-10 items-center text-gray-500 ">
              <hr className="border-gray-400 w-full" />
              <p className=" text-center text-sm sm:text-base mx-2">OR</p>
              <hr className="border-gray-400 w-full" />
            </div>
            <div className="flex justify-between items-center text-sm sm:text-base">
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
        <div className="hidden md:block md:w-1/2">
          <div>
            <img
              src="Images/todo.jpg"
              alt="image"
              className=" inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
