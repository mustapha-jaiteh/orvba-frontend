import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AdminPages from "../../components/admin/AdminPages";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { useAdminContext } from "../../contexts/AdminContext";

const Users = () => {
    const { users } = useAdminContext();
    // const users = useLoaderData();
    // console.log(users);
    return (
        <AdminPages title="Users">
            <div className="Users  h-full bg-green-100 pb-8">
                <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-4">
                    <h1 className="text-center text-4xl my-2 py-4 font-bold">
                        Users
                    </h1>
                    {/* TO DO-- change link to user register */}
                    <Link to="/user_dashboard">
                        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 font-bold m-3 w-52 gap-2 flex items-center justify-center text-center">
                            Add a user
                            <UserPlusIcon className="h-8 w-8" />
                        </button>{" "}
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full w-full border-2 border-blue-500">
                        <thead className="bg-green-700 text-gray-50">
                            <tr className="text-center">
                                <th className="p-2 border-x border-white">
                                    Full Name
                                </th>
                                <th className="p-2 border-x border-white">
                                    City
                                </th>
                                <th className="p-2 border-x border-white">
                                    Phone
                                </th>
                                <th className="p-2 border-x border-white">
                                    Vehicle Name
                                </th>
                                <th className="p-2 border-x border-white">
                                    License Plate
                                </th>
                                <th className="p-2 border-x border-white">
                                    More Info
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr
                                    key={user.id}
                                    className="border-b-2 border-gray-300 bg-gray-100 pl-4 items-center text-center"
                                >
                                    <td className="p-2 border-x border-gray-300">
                                        {user.name}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {user.city}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {user.phone}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {user.vehicle_name}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {user.license_plate}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        <Link
                                            to={`/admin_dashboard/users/${user.id}`}
                                        >
                                            <button className="bg-red-500 p-2 rounded-sm w-20 ">
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

export default Users;
