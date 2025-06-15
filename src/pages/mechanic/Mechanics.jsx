import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AdminPages from "../../components/admin/AdminPages";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { useAdminContext } from "../../contexts/AdminContext";

const Mechanics = () => {
    const { mechanics } = useAdminContext();
    // const mechanics = useLoaderData();
    // console.log(mechanics);
    return (
        <AdminPages title="Mechanics">
            <div className=" w-full mechanics h-full bg-blue-100 pb-8">
                <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-4">
                    <h1 className="text-center text-4xl my-2 py-4 font-bold">
                        Mechanics
                    </h1>
                    {/* TO DO-- change link to mechanic register */}
                    <Link to="/mechanic_dashboard">
                        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 font-bold m-3 w-52 gap-2 flex items-center justify-center text-center">
                            Add mechanic
                            <UserPlusIcon className="h-8 w-8" />
                        </button>{" "}
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full w-full border-2 border-blue-500">
                        <thead className="bg-blue-700 text-gray-50">
                            <tr className="text-center">
                                <th className="p-2 border-x border-white">
                                    Profile Picture
                                </th>
                                <th className="p-2 border-x border-white">
                                    Full Name
                                </th>
                                <th className="p-2 border-x border-white">
                                    City
                                </th>
                                <th className="p-2 border-x border-white">
                                    Street Address
                                </th>
                                <th className="p-2 border-x border-white">
                                    Phone
                                </th>
                                <th className="p-2 border-x border-white">
                                    More Info
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {mechanics.map((mechanic) => (
                                <tr
                                    key={mechanic.id}
                                    className="border-b-2 border-gray-300 bg-gray-100 pl-2 items-center text-center"
                                >
                                    <td className="p-2 border-x border-gray-300 items-center">
                                        <img
                                            src={mechanic.img}
                                            alt="Profile Picture"
                                            className="w-12 h-12 rounded-full ml-0 lg:ml-10 self-center"
                                        />
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {mechanic.name}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {mechanic.city}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {mechanic.street_address}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {mechanic.phone}
                                    </td>
                                    <td className="p-2 border-x border-gray-200">
                                        <Link
                                            to={`/admin_dashboard/mechanics/${mechanic.id}`}
                                        >
                                            <button className="bg-red-500 p-2 rounded-sm w-20">
                                                Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminPages>
    );
};

export default Mechanics;
