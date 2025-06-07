import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpApi } from "../api/api";

const SignUp = () => {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //usernmae
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  //email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  //prevent submit
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    // console.log(
    //   `username: ${username}, Email: ${email}, Password: ${password}`
    // );
    try {
      await signUpApi(Username, email, password);
      alert("signup successful!");

      setUsername("");
      setEmail("");
      setPassword("");

      navigate("/todopage");
      //
    } catch (error) {
      alert("sign up failed:" + error.message);
      console.log(error);
    }

    //
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white flex rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full">
        {/**sign in  left*/}

        <div className="w-full md:w-1/2 p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="font-bold text-4xl text-gray-800 mb-2">Welcome</h1>
            <p className="text-gray-600 text-lg">Enter your details</p>
          </div>
          <form
            autoComplete="off"
            onSubmit={handleSignUpSubmit}
            className="space-y-6"
          >
            {/*username*/}
            <div>
              <label
                htmlFor="username"
                className=" block text-sm font-semibold text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
                name="username"
                id="username"
                placeholder="Enter your username"
                value={Username}
                onChange={handleUsernameChange}
                required
              ></input>
            </div>
            {/*email*/}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              ></input>
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
                value={password}
                onChange={handlePasswordChange}
                required
              ></input>
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
              Sign up
            </button>
            <div className="flex justify-between">
              <p className="">Already have an account?</p>
              <Link
                to="/signin"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Sign in
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

export default SignUp;
