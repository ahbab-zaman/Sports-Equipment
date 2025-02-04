import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";
import Theme from "./Theme/Theme";
import logo from "../assets/sports.png";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar bg-base-200 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-base-200 shadow-lg" : "bg-white"
      }`}
    >
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allEquipment">All Equipments</NavLink>
            </li>
            <li>
              <NavLink to="/addEquipment">Add Equipments</NavLink>
            </li>
            <li>
              <NavLink to="/myList">My Equipment List</NavLink>
            </li>
          </ul>
        </div>{" "}
        <div className="flex items-center justify-center gap-3">
          <img className="w-10 text-transparent" src={logo} alt="" />
          <h2 className="lg:text-[22px] text-base  font-semibold">
            SportsGear
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 font-semibold text-[16px]">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allEquipment">All Equipments</NavLink>
          </li>
          <li>
            <NavLink to="/addEquipment">Add Equipments</NavLink>
          </li>
          <li>
            <NavLink to="/myList">My Equipment List</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex lg:flex-row flex-col lg:space-x-2 space-x-0">
        <Theme></Theme>
        {user ? (
          <div className="flex items-center gap-2">
            <span className="" id="my-anchor-element-id">
              <img
                className="w-12 rounded-full cursor-pointer"
                src={user?.photoURL}
              />
            </span>
            <Tooltip
              anchorSelect="#my-anchor-element-id"
              className="text-white z-10"
              content={`${user?.displayName}`}
            />
            <Link to="/login">
              <button
                onClick={userSignOut}
                className="px-4 py-2 rounded-full
            bg-[#1c1c1ccd] text-white font-semibold hover:bg-base-200 hover:text-black hover:transition-all hover:duration-300"
              >
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-x-3">
            <Link to="/login">
              <button
                className="px-4 py-2 rounded-full
            bg-[#1c1c1ccd] text-white font-semibold hover:bg-base-200 hover:text-black hover:transition-all hover:duration-300"
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                className="px-4 py-2 rounded-full
            bg-[#1c1c1ccd] text-white font-semibold hover:bg-base-200 hover:text-black hover:transition-all hover:duration-300"
              >
                Registration
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
