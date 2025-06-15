import React from "react";
import AdminPages from "../../components/admin/AdminPages";
import { useAdminContext } from "../../contexts/AdminContext";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { services } = useAdminContext();

    const { id } = useParams();
    const service = services.find((service) => service.id === parseInt(id));

    // Determine button class based on service status
    const getServiceStatus = () => {
        switch (service.status) {
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
        switch (service.payment_status) {
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

    return (
        <AdminPages title="Service Details">
            <div className="Phone  py-8 bg-blue-100">
                <h1 className="text-center text-4xl my-2 py-4 font-bold">
                    service details of a
                </h1>
                <div className="profile-details items-center justify-center text-center">
                    <div className="image">
                        <h2 className=" text-4xl font-bold text-center justify-center w-full text-blue-800">
                            {service.license_plate}
                        </h2>
                        <h3 className="text-center text-md font-bold m-2">
                            The details on the card below are the service
                            updates from the assigned mechanic.
                        </h3>
                        <div className="card bg-white m-4 lg:mx-32  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-4 relative">
                            <div>
                                <h2 className=" font-bold text-start my-2 mx-1 text-blue-800">
                                    <span className="text-black">
                                        License plate:
                                    </span>{" "}
                                    {service.license_plate}
                                </h2>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Vehicle name:
                                    </span>{" "}
                                    {service.vehicle_name}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Vehicle owner:
                                    </span>{" "}
                                    {service.vehicle_owner}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Mechanic name:
                                    </span>{" "}
                                    {service.mechanic_name}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Mechanic license:
                                    </span>{" "}
                                    {service.mechanic_license}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Mechanic contact:
                                    </span>{" "}
                                    {service.mechanic_phone}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Mechanic location:
                                    </span>{" "}
                                    {service.mechanic_location}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Request date:
                                    </span>{" "}
                                    {service.request_date}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Issue description:
                                    </span>{" "}
                                    {service.issue_description}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">Charges:</span>{" "}
                                    {service.charges}
                                </p>
                                <p
                                    className={`text-start my-2 mx-1 font-bold ${getPaymentStatus(
                                        service.payment_status
                                    )}`}
                                >
                                    <span className="font-bold text-black">
                                        Payment status:
                                    </span>{" "}
                                    {service.payment_status}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Paid date:
                                    </span>{" "}
                                    {service.paid_date}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Payment reciept:
                                    </span>{" "}
                                    {service.payment_receipt}
                                </p>
                            </div>
                            <div className=" items-center justify-center my-8">
                                <h2 className=" text-4xl font-bold text-center justify-center w-full ">
                                    Service status:{" "}
                                </h2>
                                <button
                                    className={`bg-blue-600 hover:bg-blue-400 rounded-3xl border-gray-300 shadow-md  w-40 font-bold lg:w-60 h-12 lg:h-16 text-gray-100  mt-8 ${getServiceStatus(
                                        service.status
                                    )}`}
                                >
                                    {service.status}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPages>
    );
};

export default ServiceDetails;
//
