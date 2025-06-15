import React from "react";
import UserPages from "../../components/user/UserPages";
import { useAdminContext } from "../../contexts/AdminContext";
import { Link } from "react-router-dom";
import { useStateContext } from "../../contexts/UserContext";

const PreviousRequests = () => {
    //fetch the user data
    const { user, bookings } = useStateContext();
    //admin services data
    const { services } = useAdminContext();
    //user services data
    const userServices = services.filter(
        (service) => service.license_plate === user.license_plate
    );

    return (
        <UserPages title="Previous service requests">
            <div className="services  h-full bg-green-100 pb-8 ">
                <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-4">
                    <h1 className="text-center text-4xl my-2 py-4 font-bold">
                        Service requests
                    </h1>
                    {/* <Link to="/mechanic_register">
                        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 font-bold m-3 w-40">
                            Add mechanic
                        </button>{" "}
                    </Link> */}
                </div>
                <div className="overflow-x-auto">
                    <table className=" min-w-full w-full border-2 border-blue-500">
                        <thead className="bg-fuchsia-500 text-gray-950">
                            <tr className="text-center">
                                <th className="p-2 border-x border-white">
                                    License plate
                                </th>
                                <th className="p-2 border-x border-white">
                                    Vehicle Owner
                                </th>
                                <th className="p-2 border-x border-white">
                                    Request Date
                                </th>
                                <th className="p-2 border-x border-white">
                                    Mechanic name
                                </th>
                                <th className="p-2 border-x border-white">
                                    status
                                </th>
                                <th className="p-2 border-x border-white">
                                    More Info
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {userServices.length === 0 ? (
                                <p className="text-2xl text-center font-bold m-6">
                                    No vehicle service for now.
                                </p>
                            ) : (
                                userServices.map((service) => (
                                    <tr
                                        key={service.id}
                                        className="border-b-2 border-gray-300 bg-gray-100 pl-2 text-center"
                                    >
                                        <td className="p-2 border-x border-gray-300">
                                            {service.license_plate}
                                        </td>
                                        <td className="p-2 border-x border-gray-300">
                                            {service.vehicle_owner}
                                        </td>
                                        <td className="p-2 border-x border-gray-300">
                                            {service.request_date}
                                        </td>
                                        <td className="p-2 border-x border-gray-300">
                                            {service.mechanic_name}
                                        </td>
                                        <td className="p-2 border-x border-gray-300">
                                            {service.status}
                                        </td>
                                        <td className="p-2 border-x border-gray-300">
                                            <Link
                                                to={`/user_dashboard/previous_requests/${service.id}`}
                                            >
                                                <button className="bg-red-500 p-2 rounded-sm">
                                                    Details
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </UserPages>
    );
};

export default PreviousRequests;
