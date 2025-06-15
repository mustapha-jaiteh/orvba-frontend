import React from "react";
import { Link } from "react-router-dom";
import AdminPages from "../../components/admin/AdminPages";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { FaUsers } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { GiMechanicGarage } from "react-icons/gi";
import { TbBrandBooking } from "react-icons/tb";
import { MdHomeRepairService } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";

const AdminDashboard = () => {
    return (
        <>
            <AdminPages title="Admin dashboard">
                <div className="bg-gray-200 grid grid-cols-1 lg:grid-cols-3 py-8">
                    {/* mechanics */}
                    <NavLink to="mechanics">
                        <div className="card bg-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent items-center justify-center text-center  rounded-2xl shadow-slate-950 p-2 relative">
                            <GiMechanicGarage className="text-blue-800 text-3x hover:text-blue-600 h-32 w-32" />
                            <h2 className=" text-2xl font-bold text-center justify-center w-full text-blue-800">
                                View and manage Mehcanics
                            </h2>
                        </div>
                    </NavLink>
                    {/* users */}
                    <NavLink to="users">
                        <div className="card bg-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent items-center justify-center text-center  rounded-2xl shadow-slate-950 p-2 relative">
                            <FaUsers className="text-green-800 text-3x hover:text-green-600 h-32 w-32" />
                            <h2 className=" text-2xl font-bold text-center justify-center w-full text-green-800">
                                View and manage Users
                            </h2>
                        </div>
                    </NavLink>
                    {/* bookings */}
                    <NavLink to="bookings">
                        <div className="card bg-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent items-center justify-center text-center  rounded-2xl shadow-slate-950 p-2 relative">
                            <TbBrandBooking className="text-yellow-800 text-3x hover:text-yellow-600 h-32 w-32" />
                            <h2 className=" text-2xl font-bold text-center justify-center w-full text-yellow-800">
                                View and manage Bookings
                            </h2>
                        </div>
                    </NavLink>
                    {/* services */}
                    <NavLink to="services">
                        <div className="card bg-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent items-center justify-center text-center  rounded-2xl shadow-slate-950 p-2 relative">
                            <MdHomeRepairService className="text-fuchsia-800 text-3x hover:text-fuchsia-600 h-32 w-32" />
                            <h2 className=" text-2xl font-bold text-center justify-center w-full text-fuchsia-800">
                                View and manage Services
                            </h2>
                        </div>
                    </NavLink>
                    {/* payments */}
                    <NavLink to="payments">
                        <div className="card bg-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent items-center justify-center text-center  rounded-2xl shadow-slate-950 p-2 relative">
                            <RiMoneyDollarCircleFill className="text-gray-600 text-3x hover:text-gray-400 h-32 w-32" />
                            <h2 className=" text-2xl font-bold text-center justify-center w-full text-gray-600">
                                View and manage Payments
                            </h2>
                        </div>
                    </NavLink>
                    {/* settings */}
                    {/* <NavLink to=" "> */}
                    <div className="card bg-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent items-center justify-center text-center  rounded-2xl shadow-slate-950 p-2 relative">
                        <VscSettingsGear className="text-black text-3x hover:text-gray-700 h-32 w-32" />
                        <h2 className=" text-2xl font-bold text-center justify-center w-full text-black">
                            View and manage settings
                        </h2>
                    </div>
                    {/* </NavLink> */}
                </div>
            </AdminPages>
        </>
    );
};

export default AdminDashboard;
