import React from "react";
import UserPages from "../../components/user/UserPages";
import { useAdminContext } from "../../contexts/AdminContext";
import { useStateContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import SearchBar from "../../components/user/SearchBar";
import SearchResult from "../../components/user/SearchResult";

const UserDashboard = () => {
    //fetch the user data
    const { mechanics, services, bookings } = useAdminContext();
    const { user, login, logout } = useStateContext();
    //fetch the user data
    // const { id } = useParams();

    //user services data
    const userServices = services.filter(
        (service) => service.license_plate === user.license_plate
    );
    //current service status
    const currentService = userServices.reduce(
        (latest, current) =>
            new Date(latest.date) > new Date(current.date) ? latest : current,
        { date: "No service data available for this mechanic." }
    );
    //
    //the number of bookings made by the user
    const userBookings = bookings.filter(
        (booking) => booking.license_plate === user.license_plate
    ).length;
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

    // payment status
    const getPaymentStatus = () => {
        switch (currentService.payment_ptatus) {
            case "completed":
                return "text-green-500 hover:text-green-600 ";
            case "in progress":
                return "text-blue-500 hover:text-blue-600 ";
            case "pending":
                return "text-yellow-500 hover:text-yellow-600 ";
            default:
                return "text-gray-500 hover:text-gray-600 ";
        }
    };

    const [query, setQuery] = useState("");
    const [filterBy, setFilterBy] = useState("name");

    // Filtered companies based on search query and filter
    const filteredMechanics = mechanics.filter((mechnic) =>
        mechnic[filterBy].toLowerCase().includes(query.toLowerCase())
    );

    // Handle search input change
    const handleSearch = (value) => {
        setQuery(value);
    };

    // Handle filter selection change
    const handleFilter = (value) => {
        setFilterBy(value);
    };

    // return the user data
    return (
        <UserPages title="Dashboard">
            <div>
                <h2 className=" text-4xl font-bold text-center justify-center w-full text-blue-800">
                    Welcome to your user dashboard
                </h2>
                <h3 className="text-center text-md font-bold m-2">
                    You can manage your account here, book a service, check your
                    previous service request status, search for a nearby
                    mechanic for an emergency service, etc.
                </h3>
            </div>
            <div className="py-2 gap-2 z-10 bg-gray-100 my-4 mx-8 rounded-t-xl items-center justify-center text-center ">
                <SearchBar
                    query={query}
                    filterBy={filterBy}
                    onSearch={handleSearch}
                    onFilter={handleFilter}
                />
            </div>
            <SearchResult
                query={query}
                filterBy={filterBy}
                filteredMechanics={filteredMechanics}
            />
            {/* user details */}
            <div className="Phone grid grid-cols-1 lg:grid-cols-3 py-8 bg-blue-100">
                {/* <div className="profile-details"> */}
                <div className="image">
                    <h2 className=" text-4xl font-bold text-center justify-center w-full ">
                        {user.name}
                    </h2>

                    <div className="card bg-gray-50 flex flex-row m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2 relative px-8">
                        <div>
                            <h2 className=" font-bold text-start my-2 mx-1 text-blue-800">
                                <span className="text-black">User name:</span>{" "}
                                {user.name}
                            </h2>
                            {/* <p className="text-start my-2 mx-1">
                                <span className="font-bold">Email:</span>{" "}
                                {user.email}
                            </p> */}

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
                        </div>
                    </div>
                    <div className="card2 bg-gray-50 flex flex-row m-4  gap-2 shadow-2xl bg-transparent items-center justify-center rounded-2xl shadow-slate-950 p-2 relative px-8">
                        <Link to={"/book_service"}>
                            <button className=" bg-blue-600 hover:bg-blue-400 rounded-3xl border-gray-300 shadow-md  w-40 font-bold lg:w-60 h-12 lg:h-16 text-gray-100  mt-8 place-self-center ">
                                Book a regular service
                            </button>
                        </Link>
                    </div>
                </div>
                {/* current service status details */}
                <div className="details  bg-gradient-to-r from-slate-950 to-slate-700 text-gray-100 p-8  rounded-md space-y-2">
                    {currentService ? (
                        <div>
                            <h1 className="text-2xl font-bold text-center justify-center w-full">
                                Latest service details:
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
                                <span className="font-bold">Charges:</span>{" "}
                                {currentService.charges}
                            </p>
                            <p
                                className={`text-start my-2 mx-1 font-bold ${getPaymentStatus(
                                    currentService.payment_status
                                )}`}
                            >
                                <span className="font-bold text-white">
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
                            There is no ongoing service for you at the moment.
                        </h1>
                    )}
                </div>
                {/* services stats */}
                <div className="buttons text-center items-center my-4 lg:my-2 ">
                    <h4 className="text-4xl font-bold  ">Bookings:</h4>
                    <h3 className="text-center text-md font-bold m-2">
                        The number of bookings you made since your account
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
                                made by this user so far
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </UserPages>
    );
};

export default UserDashboard;
