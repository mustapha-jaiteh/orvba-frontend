import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AdminPages from "../../components/admin/AdminPages";
import { useState } from "react";
import { useAdminContext } from "../../contexts/AdminContext";

const Bookings = () => {
    const { bookings } = useAdminContext();
    // const bookings = useLoaderData();
    return (
        <AdminPages title="Bookings">
            <div className="books w-full  h-full bg-green-100 pb-8">
                <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-4">
                    <h1 className="text-center text-4xl my-2 py-4 font-bold">
                        Bookings
                    </h1>
                    {/* <Link to="/mechanic_register">
                        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 font-bold m-3 w-40">
                            Add mechanic
                        </button>{" "}
                    </Link> */}
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full w-full border-2 border-blue-500">
                        <thead className="bg-yellow-500 text-gray-950">
                            <tr className="text-center">
                                <th className="p-2 border-x border-white">
                                    Vehicle Name
                                </th>
                                <th className="p-2 border-x border-white">
                                    License Plate
                                </th>
                                <th className="p-2 border-x border-white">
                                    Vehicle Owner
                                </th>
                                <th className="p-2 border-x border-white">
                                    Location
                                </th>
                                <th className="p-2 border-x border-white">
                                    Date
                                </th>
                                <th className="p-2 border-x border-white">
                                    More Info
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((book) => (
                                <tr
                                    key={book.id}
                                    className="border-b-2 border-gray-300 bg-gray-100 pl-2  items-center text-center"
                                >
                                    <td className="p-2 border-x border-gray-300">
                                        {book.vehicle_name}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {book.license_plate}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {book.vehicle_owner}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {book.city}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {book.date}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        <Link
                                            to={`/admin_dashboard/bookings/${book.id}`}
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

export default Bookings;
