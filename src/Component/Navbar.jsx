import React from "react";

const Navbar = () => {
  return (
    <div className="text-white">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl ml-16">Easin Arafat</a>
        </div>
        <div className="navbar-center ml-60 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="">About me</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
            <li>
              <a href="">contact me</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-sm border-0 rounded-full text-white bg-gradient-to-r from-orange-400 to-blue-600">Hire me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
