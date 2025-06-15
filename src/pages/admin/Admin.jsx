import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
// import { mechanics, users, bookings } from "../services/data.js";
import logo from "/images/car-2.png";
import AdminDashboard from "../admin/AdminDashboard.jsx";
import Users from "../user/Users.jsx";
import Mechanics from "../mechanic/Mechanics.jsx";
import Bookings from "./Bookings.jsx";
import SideNav from "../components/SideNav.jsx";

const Admin = () => {
    // const mechanicData = useLoaderData();
    // console.log(mechanicData);
    // const [mechanics, setMechanic] = useState([]);
    // const [users, setUser] = useState([]);
    // const [bookings, setBooking] = useState([]);
    const getStyle = {
        textDecoration: "underline",
        color: "blue",
    };
    return (
        <>
            <SideNav />
            <div className="admin-page ml-14 lg:ml-[220px] bg-gray-300 ">
                <nav className="shared-nav bg-slate-950 h-[500px] lg:h-20 flex  justify-center text-white flex-col-reverse">
                    <div className="logo-container ml-4 lg:ml-8 flex p-4 gap-12 ">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-8 h-8 lg:w-12 lg:h-12 rounded-xl "
                        />
                        <div className="flex flex-col justify-center lg:mr-4 lg:w-[100%] lg:justify-start items-center text-center">
                            <h1 className="text-4xl font-bold capitalize text-gray-200">
                                ORVBA
                            </h1>
                            <p className="text-gray-100 text-sm  lg:w-full">
                                On Road Vehicle Breakdown Asistance
                            </p>
                        </div>
                    </div>
                </nav>
                <div className="admin-page-content my-4 mx-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold self-center">
                            Admin 1
                        </h1>
                        <div className="flex flex-col justify-center  lg:justify-start items-center text-center ">
                            <h2 className="font-bold">Manage all operations</h2>
                            <p>from mechanics to users to bookings</p>
                        </div>

                        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 font-bold m-3">
                            Add Admin
                        </button>
                    </div>
                    <nav className="admin-nav ">
                        <ul className="flex font-bold grid-col-1 lg:grid-flow-col gap-20">
                            <li className="nav-item hover:text-blue-700 hover:cursor-pointer">
                                <NavLink
                                    to="dashboard"
                                    style={({ isActive }) =>
                                        isActive ? getStyle : null
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item hover:text-blue-700 hover:cursor-pointer">
                                <NavLink
                                    to="mechanics"
                                    style={({ isActive }) =>
                                        isActive ? getStyle : null
                                    }
                                >
                                    Mechanics
                                </NavLink>
                            </li>
                            <li className="nav-item hover:text-blue-700 hover:cursor-pointer">
                                <NavLink
                                    to="users"
                                    style={({ isActive }) =>
                                        isActive ? getStyle : null
                                    }
                                >
                                    Users
                                </NavLink>
                            </li>
                            <li className="nav-item hover:text-blue-700 hover:cursor-pointer">
                                <NavLink
                                    to="bookings"
                                    style={({ isActive }) =>
                                        isActive ? getStyle : null
                                    }
                                >
                                    Bookings
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default Admin;
