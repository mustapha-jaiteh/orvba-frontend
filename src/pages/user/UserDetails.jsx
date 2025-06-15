import React from "react";
import { useParams } from "react-router-dom";
import AdminPages from "../../components/admin/AdminPages";
import { useAdminContext } from "../../contexts/AdminContext";

const UserDetails = () => {
    //fetch the user data
    const { users, services, bookings } = useAdminContext();

    //fetch the user data
    const { id } = useParams();
    const user = users.find((item) => item.id === parseInt(id));

    //user services data
    const userServices = services.filter(
        (service) => service.licensePlate === user.licensePlate
    );
    //current service status
    const currentService = userServices.reduce(
        (latest, current) =>
            new Date(latest.date) > new Date(current.date) ? latest : current,
        { date: "No service data available for this mechanic." }
    );
    // Determine button class based on service status
    const getServiceStatus = () => {
        switch (currentService.status) {
            case "completed":
                return "bg-green-500 hover:bg-green-600 text-white";
            case "in progress":
                return "bg-blue-500 hover:bg-blue-600 text-white";
            case "pending":
                return "bg-yellow-500 hover:bg-yellow-600 text-white";
            default:
                return "bg-gray-500 hover:bg-gray-600 text-white";
        }
    };

    //the number of bookings made by the user
    const userBookings = bookings.filter(
        (booking) => booking.licensePlate === user.licensePlate
    ).length;

    return (
        <AdminPages title="User Details">
            <div className="Phone grid grid-cols-1 lg:grid-cols-3 py-8 bg-blue-100">
                {/* <div className="profile-details"> */}
                <div className="image">
                    <h2 className=" text-4xl font-bold text-center justify-center w-full ">
                        {user.name}
                    </h2>
                    <h3 className="text-center text-md font-bold m-2">
                        The details on the card below will be shown to user's
                        profile too
                    </h3>
                    <div className="card bg-gray-50 flex flex-row m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2 relative px-8">
                        <div>
                            <h2 className=" font-bold text-start my-2 mx-1 text-blue-800">
                                <span className="text-black">Name:</span>{" "}
                                {user.name}
                            </h2>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Email:</span>{" "}
                                {user.email}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Phone:</span>{" "}
                                {user.phone}
                            </p>
                            <p className="text-start my-2 mx-1">
                                {" "}
                                <span className="font-bold">
                                    Street address:
                                </span>{" "}
                                {user.street_address}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">City:</span>{" "}
                                {user.city}
                            </p>

                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Region:</span>{" "}
                                {user.region}
                            </p>

                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Vehicle name:</span>{" "}
                                {user.vehicle_name}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">
                                    License plate:
                                </span>{" "}
                                {user.license_plate}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">
                                    Vehicle model:
                                </span>{" "}
                                {user.vehicle_model}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Vehicle year:</span>{" "}
                                {user.vehicle_year}
                            </p>
                        </div>
                    </div>
                </div>
                {/* current service status details */}
                <div className="details  bg-gradient-to-r from-slate-950 to-slate-700 text-gray-100 p-8  rounded-md space-y-2">
                    {currentService ? (
                        <div>
                            <h1 className="text-2xl font-bold text-center justify-center w-full">
                                current service details:
                            </h1>

                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">
                                    License plate:{" "}
                                </span>{" "}
                                {currentService.license_plate}
                            </p>
                            <p className="text-start my-2 mx-1">
                                {" "}
                                <span className="font-bold">
                                    Request date:
                                </span>{" "}
                                {currentService.request_date}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">
                                    Mechanic name:
                                </span>{" "}
                                {currentService.mechanic_name}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">
                                    Mechanic location:
                                </span>{" "}
                                {currentService.mechanic_location}
                            </p>
                            <p>
                                <span className="font-bold">
                                    Mechanic contact:
                                </span>{" "}
                                {currentService.mechanic_phone}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">
                                    Issue description:
                                </span>{" "}
                                {currentService.issue_description}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Charges:</span>{" "}
                                {currentService.charges}
                            </p>

                            <p className="text-start my-2 mx-1 font-bold">
                                <span className="font-bold">
                                    Payment status:
                                </span>{" "}
                                {currentService.payment_status}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Paid date:</span>{" "}
                                {currentService.paid_date}
                            </p>
                            <div className=" text-center justify-center  my-8">
                                <h2 className=" text-4xl font-bold text-center justify-center w-full ">
                                    Service status:{" "}
                                </h2>
                                <button
                                    className={` justify-center items-center rounded-3xl border-gray-300 shadow-md  w-40 font-bold lg:w-60 h-12 lg:h-16 text-gray-100  mt-8 ${getServiceStatus(
                                        currentService.status
                                    )}`}
                                >
                                    {currentService.status}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <h1 className="text-4xl font-bold text-center justify-center w-full items-center my-32">
                            There is no ongoing service for this user.
                        </h1>
                    )}
                </div>
                {/* services stats */}
                <div className="buttons text-center items-center ">
                    <h4 className="text-4xl font-bold  ">Bookings:</h4>
                    <h3 className="text-center text-md font-bold m-2">
                        The number of bookings made by the user since
                        registration
                    </h3>
                    <div className="performance-stats flex flex-col justify-between items-center">
                        <div className="job-order h-40 lg:h-48 bg-gradient-to-r from-slate-950 to-slate-700 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
                            <h3 className="font-bold text-sm text-center">
                                Number of bookings
                            </h3>
                            <div>
                                <h3 className="font-bold text-white text-4xl">
                                    {userBookings}
                                </h3>{" "}
                                <p className="text-gray-400">
                                    service requests
                                </p>
                            </div>
                            <p className="text-gray-400">
                                from the user's reqistration date
                            </p>
                        </div>
                    </div>
                    <button className=" bg-red-600 rounded-3xl border-gray-300 shadow-md  w-40 font-bold lg:w-60 h-12 lg:h-16 text-gray-100  mt-8 ">
                        Delete user
                    </button>
                </div>
            </div>
        </AdminPages>
    );
};

export default UserDetails;
