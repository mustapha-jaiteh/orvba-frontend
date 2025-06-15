import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/car-2.png";
import { FaHome, FaTools, FaUserShield, FaCog } from "react-icons/fa";

const SideNav = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <aside className="side-nav w-12 lg:w-[230px] bg-slate-950 h-[100vh] fixed top-0 left-0 z-50 flex flex-col justify-between text-gray-100 p-4">
      <nav className="grid grid-cols-1 lg:grid-cols-1">
        <ul className="my-2 lg:my-4 mx-0">
          <li className="mb-4 ">
            <NavLink
              to="/"
              className="grid grid-flow-col w-20"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <FaHome />
              Home
            </NavLink>
          </li>

          <li className="mb-4">
            <NavLink
              to="/services"
              className="grid grid-flow-col w-24"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <FaTools />
              Services
            </NavLink>
          </li>

          <li className="mb-4">
            <NavLink
              to="/admin"
              className="grid grid-flow-col w-20"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <FaUserShield />
              Admin
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/book_service"
              className="grid grid-flow-col w-24"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <FaCog />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
