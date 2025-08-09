import React from "react";
import LightDark from "../../Components/NavItems/LightDark/LightDark";
import NavLinks from "../../Components/NavItems/NavLinks/NavLinks";
import Logo from "../../Components/NavItems/Logo/Logo";
import { Link } from "react-router"; // ✅ FIXED: use react-router-dom

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-50 dark:bg-gray-800 backdrop-blur-md border-b border-gray-700">
      <div className="w-4/5 mx-auto navbar">
        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-2">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* CENTER: Nav links (desktop only) */}
        <div className="hidden lg:flex flex-1 justify-end">
          <ul className="menu menu-horizontal px-1 dark:text-white">
            <NavLinks />
          </ul>
        </div>

        {/* RIGHT: Example button or theme toggle */}
        <div className="flex items-center">
          <LightDark />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
