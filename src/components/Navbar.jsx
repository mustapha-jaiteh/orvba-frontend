import React from "react";
// import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import logo from "/images/car-2.png";
import Login from "../components/Login";
import Register from "../components/Register";
import AdminLogin from "./admin/AdminLogin";
import { useState, useEffect } from "react";

const Navbar = () => {
    // const isActive = () => {
    //   return "text-black";
    // };
    const [isLoginVisibe, setIsLoginVisible] = useState(false);
    const [isAdminLoginVisible, setIsAdminLoginVisible] = useState(false);

    const [isRegisterVisible, setIsRegisterVisible] = useState(false);

    const handleLoginPopup = () => {
        setIsLoginVisible(true);
    };
    const handleLoginClose = () => {
        setIsLoginVisible(false);
    };

    const handleRegisterPopup = () => {
        setIsRegisterVisible(true);
    };
    const handleRegisterClose = () => {
        setIsRegisterVisible(false);
    };

    const adminLoginOpen = () => {
        setIsAdminLoginVisible(true);
    };
    const adminLoginClose = () => {
        setIsAdminLoginVisible(false);
    };

    return (
        <div>
            {" "}
            <nav className="nav bg-slate-950 h-[300px] lg:h-20  grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center ">
                <div className="logo-container mx-4  flex p-2 ">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-8 h-8 lg:w-12 lg:h-12 rounded-xl "
                    />
                    <div className="flex flex-col justify-center  lg:mr-4 w-full lg:w-[100%] lg:justify-start items-center text-center lg:items-center lg:text-center">
                        <h1 className="text-4xl font-bold capitalize text-gray-200 mb-1">
                            ORVBA
                        </h1>
                        <p className="text-gray-100 text-sm  lg:w-full">
                            On Road Vehicle Breakdown Asistance
                        </p>
                    </div>
                </div>
                <div className="buttons flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-center text-center lg:text-center pt-0 lg:pt-2 gap-8 lg:gap-32">
                    <button
                        className=" bg-red-700 hover:bg-red-400  text-gray-100 font-bold py-2 px-2 rounded-md w-32 lg:w-32  "
                        onClick={handleRegisterPopup}
                    >
                        Register
                    </button>
                    {isRegisterVisible ? (
                        <Register handleRegisterClose={handleRegisterClose} />
                    ) : null}

                    {/* <Link to={"/login"}> */}
                    <button
                        className=" bg-blue-600 rounded-md border-gray-300  py-2 px-2 w-32  lg:w-32 font-bold text-gray-100 hover:bg-blue-400"
                        onClick={handleLoginPopup}
                    >
                        Login
                    </button>
                    {isLoginVisibe ? (
                        <Login handleLoginClose={handleLoginClose} />
                    ) : null}
                    {/* </Link> */}
                    <button
                        className=" bg-blue-600 rounded-md border-gray-300  py-2 px-2 w-32  lg:w-32 font-bold text-gray-100 hover:bg-blue-400"
                        onClick={adminLoginOpen}
                    >
                        Admin login
                    </button>
                    {isAdminLoginVisible ? (
                        <AdminLogin adminLoginClose={adminLoginClose} />
                    ) : null}
                    {/* </Link> */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
