import React from "react";

const Responsive = () => {
  return (
    <div>
      <div>
        <nav className="flex flex-col sm:flex-row  sm:justify-between text-xl ">
          <a href="#" className="p-2">
            Home
          </a>
          <a href="#" className="p-2">
            About
          </a>
          <a href="#" className="p-2">
            Contact
          </a>
          <a href="#" className="p-2">
            Services
          </a>
        </nav>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-200">item 1</div>
        <div className="p-4 bg-red-200">item 1</div>
        <div className="p-4 bg-green-200">item 1</div>
        <div className="p-4 bg-violet-200">item 1</div>
      </div>
    </div>
  );
};

export default Responsive;
//means on mobile flex col but larger flex -row
