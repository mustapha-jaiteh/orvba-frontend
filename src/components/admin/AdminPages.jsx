import React from "react";
import { NavLink } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/outline";

const AdminPages = ({ title, buttons = "", children }) => {
    const getStyle = {
        textDecoration: "underline",
        color: "blue",
    };
    return (
        <>
            <header className="bg-white shadow">
                <div className=" flex justify-between items-center mx-auto  px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        {title}
                    </h1>
                    {buttons}
                </div>
            </header>
            <main>
                <div className="    px-4 lg:px-8 mx-auto bg-gray-300">
                    <div className="admin-page  bg-gray-300 ">
                        <div className="admin-page-content py-2 mx-8">
                            <div className="flex flex-col lg:flex-row gap-2 justify-between items-center mb-6">
                                <h1 className="text-3xl font-bold self-center">
                                    Admin 1
                                </h1>
                                <div className="flex flex-col justify-center  lg:justify-start items-center text-center ">
                                    <h2 className="font-bold">
                                        Manage all operations
                                    </h2>
                                    <p>
                                        from mechanics, users, bookings,
                                        services, and payments
                                    </p>
                                </div>

                                <NavLink to=" ">
                                    <button className="bg-blue-500 text-white rounded-lg px-4 py-2 font-bold m-3 w-52 gap-2 flex items-center justify-center text-center">
                                        Add admin
                                        <UserPlusIcon className="h-8 w-8" />
                                    </button>{" "}
                                </NavLink>
                            </div>
                            <nav className="admin-nav ">
                                <ul className="flex flex-col lg:flex-row font-bold gap-1 lg:gap-20 items-center text-center ">
                                    <li className="nav-item hover:text-blue-700 hover:cursor-pointer">
                                        <NavLink
                                            to="/admin_dashboard"
                                            style={({ isActive }) =>
                                                isActive ? getStyle : null
                                            }
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="nav-item hover:text-blue-700 hover:cursor-pointer">
                                        <NavLink
                                            to="/admin_dashboard/mechanics"
                                            style={({ isActive }) =>
                                                isActive ? getStyle : null
                                            }
                                        >
                                            Mechanics
                                        </NavLink>
                                    </li>
                                    <li className="nav-item hover:text-blue-700 hover:cursor-pointer">
                                        <NavLink
                                            to="/admin_dashboard/users"
                                            style={({ isActive }) =>
                                                isActive ? getStyle : null
                                            }
                                        >
                                            Users
                                        </NavLink>
                                    </li>
                                    <li className="nav-item hover:text-blue-700 hover:cursor-pointer">
                                        <NavLink
                                            to="/admin_dashboard/bookings"
                                            style={({ isActive }) =>
                                                isActive ? getStyle : null
                                            }
                                        >
                                            Bookings
                                        </NavLink>
                                    </li>
                                    <li className="nav-item hover:text-blue-700 hover:cursor-pointer">
                                        <NavLink
                                            to="/admin_dashboard/services"
                                            style={({ isActive }) =>
                                                isActive ? getStyle : null
                                            }
                                        >
                                            Services
                                        </NavLink>
                                    </li>
                                    <li className="nav-item hover:text-blue-700 hover:cursor-pointer">
                                        <NavLink
                                            to="/admin_dashboard/payments"
                                            style={({ isActive }) =>
                                                isActive ? getStyle : null
                                            }
                                        >
                                            Payments
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* Your content */}
                    {children}
                </div>
            </main>
        </>
    );
};

export default AdminPages;
