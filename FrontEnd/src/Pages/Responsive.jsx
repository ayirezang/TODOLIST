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
      <div className="hidden md:block lg:inline">
        <img
          src="Images/grandPa.jpg"
          alt="grandpa"
          className=" md:w-32 lg:w-48"
        />
      </div>
      {/* this case, the element is hidden by default but becomes visible
      (block) on screens that are lg (1024px) or wider. */}
      <div className="flex  flex-row  md:flex-col">
        <div className="bg-blue-300 p-4">1</div>
        <div className="bg-orange-300 p-4">1</div>
      </div>
      {/* Start Small (Mobile-First)

Base size (text-sm) targets mobile, where space is limited.

Avoid oversized text on small screens.

Gradually Increase on Larger Screens

Use md:, lg:, xl: to scale up logically.

Example progression: sm → lg → xl → 2xl.

Avoid Overriding Unnecessarily

If text-sm looks good on both mobile and tablet, skip md: and jump to lg:.

Match Your Design System

Ensure sizes align with your typography scale (e.g., text-sm = 14px, text-lg = 18px).
If your design calls for larger text on mobile (e.g., headlines), reverse the logic:

html
<h1 class="text-xl md:text-lg">Big on mobile, smaller on desktop</h1> */}
    </div>
  );
};

export default Responsive;
//means on mobile flex col but larger flex -row
