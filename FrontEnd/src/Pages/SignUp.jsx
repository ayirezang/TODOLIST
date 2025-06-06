import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `username: ${username}, Email: ${email}, Password: ${password}`
    );

    setUsername("");
    setEmail("");
    setPassword("");
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
          <form onSubmit={handleSubmit} className="space-y-6">
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
                value={username}
                onChange={handleUsernameChange}
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
                value={username}
                onChange={handleEmailChange}
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
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6A9ACA] focus:outline-none  bg-gray-50 focus:bg-white"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={username}
                onChange={handlePasswordChange}
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
    // <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
    //   {/**div containing the form and the image */}
    //   <div className="bg-white flex rounded-3xl shadow-2xl p-5 m items-center overflow-hidden max-w-4xl w-full">
    //     {/**sign in  left*/}
    //     <div className=" md:w-1/2  p-8 lg:p-12">
    //       <h1 className="font-bold text-4xl text-gray-800">Welcome back</h1>
    //       <p className="mb-6 text-lg text-gray-600">
    //         Sign in to continue to your account{" "}
    //       </p>
    //     </div>
    //     {/**form section */}
    //     <div>
    //       <form
    //         action=""
    //         className="flex flex-col gap-4 "
    //         onSubmit={handleSubmit}
    //       >
    //         <div className="">
    //           {/*username*/}
    //           <label htmlFor="username " className="block mb-3">
    //             Username
    //           </label>
    //           <input
    //             type="text"
    //             className="p-2   border rounded-xl w-full"
    //             name="username"
    //             id="Username"
    //             placeholder="Username"
    //             value={username}
    //             onChange={handleUsernameChange}
    //           ></input>
    //         </div>
    //         {/*email*/}
    //         <div className="">
    //           <label htmlFor="Email " className="block mb-3">
    //             Email
    //           </label>
    //           <input
    //             type="text"
    //             className="p-2 border rounded-xl w-full"
    //             name="email"
    //             id="Email"
    //             placeholder="Email"
    //             value={email}
    //             onChange={handleEmailChange}
    //           ></input>
    //         </div>
    //         {/*password*/}
    //         <div>
    //           <label htmlFor="password " className="block mb-3">
    //             Password
    //           </label>
    //           <input
    //             type="password"
    //             className="p-2 border rounded-xl w-full "
    //             name="password"
    //             id="Password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={handlePasswordChange}
    //           ></input>
    //         </div>
    //         <button className="bg-[#6C63FF] mt-3 rounded-xl text-white py-2 hover:scale-105 duration-300">
    //           Login
    //         </button>
    //       </form>
    //       {/**divide */}
    //       <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
    //         <hr className="border-gray-400" />
    //         <p className="text-center">OR</p>
    //         <hr className="border-gray-400" />
    //       </div>
    //       {/**google login button*/}
    //       <button className="bg-white py-2 w-full  border rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-110 duration-300">
    //         <FcGoogle size={34} className="mr-3" /> Login with Google
    //       </button>
    //       {/**forgot password */}
    //       <div className="mt-5 text-sm py-6 border-b border-gray-400 ">
    //         Forgot your password?
    //       </div>
    //       <div className="text-xs flex justify-between items-center mt-5">
    //         <p>Dont have an account?</p>
    //         <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
    //           signup
    //         </button>
    //       </div>
    //     </div>
    //     {/**right  image*/}

    //     <div className=" md:block hidden w-1/2">
    //       <img className="rounded-2xl" src="/Images/lady.svg" alt="image" />
    //     </div>
    //   </div>
    //   {/**div containing closing  the form and the image */}
    // </div>
  );
};

export default SignUp;
