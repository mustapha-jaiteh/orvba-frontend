import React from "react";
import UserPages from "../../components/user/UserPages";
import { useAdminContext } from "../../contexts/AdminContext";
import { useParams } from "react-router-dom";
import { useStateContext } from "../../contexts/UserContext";
import { useState } from "react";
import axios from "axios";

const PreviousRequestDetails = () => {
    const { user } = useStateContext();
    //admin services data
    const { services } = useAdminContext();

    const { id } = useParams();
    const userServices = services.find(
        (service) => service.id === parseInt(id)
    );

    //user services data
    // const userServices = user.license_plate === myService.license_plate;

    // Determine button class based on service status
    const getServiceStatus = () => {
        switch (userServices.status) {
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
        switch (userServices.payment_status) {
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

    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const sendFeedback = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/feedback",
                {
                    service_id: userServices.id,
                    license_plate: userServices.license_plate,
                    message: message,
                }
            );
            setMessage("");
            setSuccess(true);
            console.log("feedback sent successfully!", response.data);
            setTimeout(() => setSuccess(false), 3000); // Hide success message after 3s
        } catch (error) {
            console.error("Error sending feedback:", error);
        }
    };

    return (
        <UserPages title="Service Details">
            <div className="Phone  py-8 bg-blue-100">
                <h1 className="text-center text-4xl my-2 py-4 font-bold">
                    service details of a
                </h1>
                <div className="profile-details items-center justify-center text-center">
                    <div className="image">
                        <h2 className=" text-4xl font-bold text-center justify-center w-full text-blue-800">
                            {userServices.license_plate}
                        </h2>
                        <h3 className="text-center text-md font-bold m-2">
                            The details on the card below are the service
                            updates from the assigned mechanic.
                        </h3>
                        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4  w-full">
                            <div className="card bg-white m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-4 relative col-span-2">
                                <div>
                                    <h2 className=" font-bold text-start my-2 mx-1 text-blue-800">
                                        <span className="text-black">
                                            License plate:
                                        </span>{" "}
                                        {userServices.license_plate}
                                    </h2>

                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Vehicle owner:
                                        </span>{" "}
                                        {userServices.vehicle_owner}
                                    </p>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Mechanic name:
                                        </span>{" "}
                                        {userServices.mechanic_name}
                                    </p>

                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Mechanic contact:
                                        </span>{" "}
                                        {userServices.mechanic_phone}
                                    </p>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Mechanic location:
                                        </span>{" "}
                                        {userServices.mechanic_location}
                                    </p>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Request date:
                                        </span>{" "}
                                        {userServices.request_date}
                                    </p>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Issue description:
                                        </span>{" "}
                                        {userServices.issue_description}
                                    </p>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Charges:
                                        </span>{" "}
                                        {userServices.charges}
                                    </p>
                                    <p
                                        className={`text-start my-2 mx-1 font-bold ${getPaymentStatus(
                                            userServices.payment_status
                                        )}`}
                                    >
                                        <span className="font-bold text-black">
                                            Payment status:
                                        </span>{" "}
                                        {userServices.payment_status}
                                    </p>
                                    <p className="text-start my-2 mx-1">
                                        <span className="font-bold">
                                            Paid date:
                                        </span>{" "}
                                        {userServices.paid_date}
                                    </p>
                                </div>
                                <div className=" items-center justify-center my-8">
                                    <h2 className=" text-4xl font-bold text-center justify-center w-full ">
                                        Service status:{" "}
                                    </h2>
                                    <button
                                        className={`bg-blue-600 hover:bg-blue-400 rounded-3xl border-gray-300 shadow-md  w-40 font-bold lg:w-60 h-12 lg:h-16 text-gray-100  mt-8 ${getServiceStatus(
                                            userServices.status
                                        )}`}
                                    >
                                        {userServices.status}
                                    </button>
                                </div>
                            </div>
                            <div>
                                {success && (
                                    <p className="text-green-600 bg-green-100 p-2 mb-4 text-center rounded fixed bottom-0 left-0 right-0">
                                        ✅ Your feedback has been sent
                                        successfully!
                                    </p>
                                )}
                                <h2 className=" text-4xl font-bold text-center justify-center w-full text-slate-950">
                                    User feedback:
                                </h2>
                                <h3 className="text-center text-md m-2 font-bold">
                                    Write your feedback about this service here
                                </h3>
                                <div className="card2 bg-white m-4 h-80  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-4 relative">
                                    <textarea
                                        className="feedback border border-gray-400 rounded-md p-2 w-full"
                                        name="feedback"
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        placeholder="Write your feedback here"
                                        id=""
                                        // cols="25"
                                        rows="6"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        onClick={sendFeedback}
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-40 right-0 place-self-center my-8"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserPages>
    );
};

export default PreviousRequestDetails;
