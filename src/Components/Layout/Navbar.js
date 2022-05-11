import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-Grey p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" className="font-semibold text-xl tracking-tight">
            Home
          </Link>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Services
            </Link>
            <Link
              to="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              About
            </Link>
            <Link
              to="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </Link>
          </div>
          <div>
            <Link
              to="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 mr-2 lg:mt-0"
            >
              Contact Us
            </Link>
            <Link
              to="/Login"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-6"
            >
              Login
            </Link>
            <Link
              to="/SignUp"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Sign Up
            </Link>
            <Link
              to="/Admin"
              className="block mt-4 lg:inline-block lg:mt-0 text-Green font-bold font-FontInter hover:text-white mr-4 underline"
            >
              Admin
            </Link>
            <Link
              to="/User"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#969696] font-bold font-FontInter hover:text-white mr-4 underline"
            >
              User
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
