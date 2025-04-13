import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md rounded-lg navbar">
      <h1 className="text-3xl text-blue-500">Noted.</h1>
      <div className="mx-10">
        <ul className="flex gap-x-10 text-lg font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create" className="hover:text-blue-500">
              New Note
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
