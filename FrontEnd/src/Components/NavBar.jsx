import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/signin">signin</Link>
          </li>
          <li>
            <Link to="/signout">signout</Link>
          </li>
          <li>
            <Link to="/todopage">todopage</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
