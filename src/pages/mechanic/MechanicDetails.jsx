import React from "react";
import { useParams } from "react-router-dom";
import { useAdminContext } from "../../contexts/AdminContext";
import AdminPages from "../../components/admin/AdminPages";

const MechanicDetails = () => {
    const { mechanics, services, bookings, feedback } = useAdminContext();
    // console.log("User feedback", feedback);

    const { id } = useParams(); // Get the id from the URL
    const mechanic = mechanics.find((item) => item.id === parseInt(id));
    //mechanic services data
    const mechanicServices = services.filter(
        (service) => service.mechanicLicense === mechanic.certificationNumber
    );
    //bookings assigned to the mechanic
    const assignedBookings = bookings.filter(
        (booking) => booking.mechanicLicense === mechanic.certificationNumber
    );

    //number of services in the last 6 months
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const jobOrder = assignedBookings.filter(
        (service) => new Date(service.date) >= sixMonthsAgo
    ).length;

    //total services completed
    const completedServices = mechanicServices.filter(
        (service) => service.status === "completed"
    ).length;

    //current service status
    const latestService = mechanicServices.reduce(
        (latest, current) =>
            new Date(latest.date) > new Date(current.date) ? latest : current,
        { date: "No service data available for this mechanic." }
    );

    const feedbackMessage = feedback.find(
        (feed) => feed.service_id === latestService.id
    );

    // console.log("Feedback message:", feedbackMessage?.message);

    // Determine button class based on status

    const getStatusClass = () => {
        switch (latestService.status) {
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

    return (
        <>
            <AdminPages title="Mechanic Details">
                <div className="Phone grid grid-cols-1 lg:grid-cols-2 py-8 bg-blue-100">
                    <div className="profile-details">
                        <div className="image">
                            <h2 className=" text-4xl font-bold text-center justify-center w-full ">
                                {mechanic.name}
                            </h2>
                            <h3 className="text-center text-md font-bold m-2">
                                The details on the card below will be shown to
                                mechanic's clients too
                            </h3>
                            <div className="card bg-gray-50 flex flex-row m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2 relative">
                                <img
                                    src={mechanic.img}
                                    alt=""
                                    className="img h-32 w-32 p-s3 rounded-full "
                                />
                                <div>
                                    <h2 className=" font-bold text-start my-2 mx-1">
                                        <span>Name:</span> {mechanic.name}
                                    </h2>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Email:
                                        </span>{" "}
                                        {mechanic.email}
                                    </p>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Phone:
                                        </span>{" "}
                                        {mechanic.phone}
                                    </p>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Location:
                                        </span>{" "}
                                        {mechanic.city}
                                    </p>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Specialization:
                                        </span>{" "}
                                        {mechanic.specialization}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="details  h-auto bg-gradient-to-r from-slate-950 to-slate-700 text-gray-100 p-8  rounded-md space-y-2">
                            <h1 className="text-4xl font-bold text-center justify-center w-full">
                                Full Details:
                            </h1>
                            <h2 className="name font-bold">
                                <span className="font-bold text-gray-400">
                                    Mechanic name:{" "}
                                </span>{" "}
                                {mechanic.name}
                            </h2>
                            <p>
                                {" "}
                                <span className="font-bold text-gray-400">
                                    Email:
                                </span>{" "}
                                {mechanic.email}
                            </p>
                            <p>
                                <span className="font-bold text-gray-400">
                                    Phone:
                                </span>{" "}
                                {mechanic.phone}
                            </p>
                            <p>
                                <span className="font-bold text-gray-400">
                                    Street Address:
                                </span>{" "}
                                {mechanic.street_address}
                            </p>
                            <p>
                                <span className="font-bold text-gray-400">
                                    City:
                                </span>{" "}
                                {mechanic.city}
                            </p>
                            <p>
                                <span className="font-bold text-gray-400">
                                    Region:
                                </span>{" "}
                                {mechanic.region}
                            </p>
                            <p>
                                <span className="font-bold text-gray-400">
                                    License Number:
                                </span>{" "}
                                {mechanic.mechanic_license}
                            </p>
                            <p>
                                <span className="font-bold text-gray-400">
                                    Years of experience:
                                </span>{" "}
                                {mechanic.years_of_experience}
                            </p>
                            <p>
                                <span className="font-bold text-gray-400">
                                    Specialization:
                                </span>{" "}
                                {mechanic.specialization}
                            </p>
                        </div>
                    </div>

                    <div className="buttons text-center items-center ">
                        <h4 className="text-4xl font-bold  ">
                            Perfomance statistics:
                        </h4>
                        <h3 className="text-center text-md font-bold m-2">
                            The details of the performance statistics is tracked
                            and displayed here
                        </h3>
                        <div className="performance-stats grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
                            <div className="service-status h-40 lg:h-48 bg-gradient-to-r from-slate-950 to-slate-700 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
                                <h3 className="font-bold text-sm text-center">
                                    Current service status:
                                </h3>
                                {/* <button className="bg-blue-500 text-white text-xl p-2 rounded-lg w-40">
                                    {latestService.status}
                                </button> */}
                                {latestService ? (
                                    <div>
                                        <button
                                            className={`font-bold py-2 px-4 rounded ${getStatusClass(
                                                latestService.status
                                            )}`}
                                        >
                                            {latestService.status}
                                        </button>
                                        <p className="text-gray-400">
                                            requested date: {latestService.date}
                                        </p>
                                    </div>
                                ) : (
                                    <h1 className="text-4xl font-bold text-center justify-center w-full">
                                        There is no ongoing service.
                                    </h1>
                                )}
                            </div>
                            <div className="job-order h-40 lg:h-48 bg-gradient-to-r from-slate-950 to-slate-700 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
                                <h3 className="font-bold text-sm text-center">
                                    Job Order
                                </h3>
                                <div>
                                    <h3 className="font-bold text-white text-4xl">
                                        {jobOrder}
                                    </h3>{" "}
                                    <p className="text-gray-400">
                                        service requests
                                    </p>
                                </div>
                                <p className="text-gray-400">
                                    from the last 6 months
                                </p>
                            </div>
                            <div className="services-completed h-40 lg:h-48 bg-gradient-to-r from-slate-950 to-slate-700 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
                                <h3 className="font-bold text-sm text-center">
                                    Total services completed
                                </h3>
                                <div>
                                    <h3 className="font-bold text-white text-4xl">
                                        {completedServices}
                                    </h3>
                                    <p className="text-gray-400">
                                        services completed
                                    </p>
                                </div>
                                <p className="text-gray-400">
                                    so far from the assigned services
                                </p>
                            </div>
                            <div className="customer-feedback h-40 lg:h-48 bg-gradient-to-r from-slate-950 to-slate-700 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
                                <h3 className="font-bold text-sm text-center">
                                    Last service customer feedback
                                </h3>

                                <p className="text-gray-400">
                                    {feedbackMessage.message}
                                </p>
                            </div>
                        </div>
                        <button className=" bg-red-600 rounded-3xl border-gray-300 shadow-md  w-40 font-bold lg:w-60 h-12 lg:h-16 text-gray-100  mt-8 ">
                            Delete mechanic
                        </button>
                    </div>
                </div>
            </AdminPages>
        </>
    );
};

export default MechanicDetails;
