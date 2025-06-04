import React from "react";

const SignIn = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/**div containing the form and the image */}
      <div className="bg-violet-100 flex rounded-2xl shadow-lg p-5 max-w-3xl">
        {/**sign in  left*/}
        <div className=" w-1/2">
          <h1 className="font-bold text-2xl">login</h1>
          <p className="mt-4">if you already have an account signin</p>
        </div>
        {/**right  image*/}

        <div className="  w-1/2">
          <img className="rounded-2xl" src="/Images/lady.svg" alt="image" />
        </div>
      </div>
      {/**div containing closing  the form and the image */}
    </div>
  );
};

export default SignIn;
