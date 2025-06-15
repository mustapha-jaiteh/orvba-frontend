import React from "react";
import { useAdminContext } from "../../contexts/AdminContext";
import { NavLink, useParams } from "react-router-dom";
import MechanicPages from "../../components/mechanic/MechanicPages";
import { useNavigate } from "react-router-dom";
import { useMechanicContext } from "../../contexts/MechanicContext";
import UpdateServices from "../../components/mechanic/UpdateServices";
import { useState } from "react";
import axios from "axios";

const NewRequestDetails = () => {
    // const { bookings, services, mechanics } = useAdminContext();
    const { mechanic, bookings } = useMechanicContext();

    const { id } = useParams();
    const booking = bookings.find((book) => book.id === parseInt(id));

    const [serviceData, setServiceData] = useState({
        booking_id: booking.id,
        license_plate: booking.license_plate,
        vehicle_name: booking.vehicle_name,
        vehicle_owner: booking.vehicle_owner,
        mechanic_name: booking.mechanic_name,
        mechanic_license: booking.mechanic_license,
        mechanic_phone: mechanic.phone,
        mechanic_location: mechanic.city,
        request_date: booking.date,
        issue_description: booking.issue_description,
        status: "",
        charges: "",
        payment_status: "",
        paid_date: "",
        payment_receipt: "",
    });
    //handle from change
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setServiceData((prev) => ({
            ...prev,
            [name]: name === "payment_receipt" ? files[0] : value,
        }));
    };

    const handleServiceUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        for (let key in serviceData) {
            formData.append(key, serviceData[key]);
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/mechanic/service-update",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            alert(response.data.message);
        } catch (error) {
            console.error(
                "Service update error:",
                error.response?.data || error
            );
            alert("Failed to update service. Check the console for details.");
        }
    };

    return (
        <MechanicPages title="New Request Details">
            <div className="Phone  py-8 bg-blue-100">
                <h1 className="text-center text-4xl my-2 py-4 font-bold mx-2">
                    New Request Details of a
                </h1>
                <div className="profile-details items-center justify-center text-center">
                    <div className="image">
                        <h2 className=" text-4xl font-bold text-center justify-center w-full text-blue-800 ">
                            {booking.vehicle_name}
                        </h2>

                        <div className="card flex flex-col lg:flex-row bg-white m-4 lg:mx-32  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-4 relative">
                            <div className=" w-full">
                                <h2 className=" font-bold text-start my-2 mx-1 text-blue-800">
                                    <span className="text-black">
                                        License plate:
                                    </span>{" "}
                                    {booking.license_plate}
                                </h2>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Vehicle name:
                                    </span>{" "}
                                    {booking.vehicle_name}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Vehicle owner:
                                    </span>{" "}
                                    {booking.vehicle_owner}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">Email:</span>{" "}
                                    {booking.email}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">Phone:</span>{" "}
                                    {booking.phone}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">Location:</span>{" "}
                                    {booking.city}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">Date:</span>{" "}
                                    {booking.date}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Issue description:
                                    </span>{" "}
                                    {booking.issue_description}
                                </p>
                            </div>
                            {/* add booking data to service update */}
                            <div className="p-4 max-w-lg mx-auto bg-white border w-full rounded-2xl shadow-2xl shadow-slate-950">
                                <h2 className="text-xl font-bold mb-4">
                                    Add to Services
                                </h2>
                                <form
                                    onSubmit={handleServiceUpdate}
                                    // method="POST"
                                    // // action="/api/update-service"
                                    // encType="multipart/form-data"
                                >
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold">
                                            Service Status
                                        </label>
                                        <select
                                            name="status"
                                            className="w-full border border-gray-300 p-2 rounded"
                                            onChange={handleChange}
                                        >
                                            <option value="pending">
                                                pending
                                            </option>
                                            <option value="in progress">
                                                in progress
                                            </option>
                                            <option value="completed">
                                                completed
                                            </option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold">
                                            Charges
                                        </label>
                                        <input
                                            type="number"
                                            name="charges"
                                            onChange={handleChange}
                                            placeholder="Enter charges"
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold">
                                            Payment Status
                                        </label>
                                        <select
                                            name="payment_status"
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 p-2 rounded"
                                        >
                                            <option value="pending">
                                                pending
                                            </option>
                                            <option value="in progress">
                                                in progress
                                            </option>
                                            <option value="completed">
                                                completed
                                            </option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold">
                                            Paid Date
                                        </label>
                                        <input
                                            type="date"
                                            name="paid_date"
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold">
                                            Payment Receipt
                                        </label>

                                        <input
                                            type="file"
                                            name="payment_receipt"
                                            accept="image/*"
                                            className="w-full border border-gray-300 p-2 rounded"
                                        />
                                    </div>
                                    <div className="items-center justify-center place-self-center">
                                        <button
                                            type="submit"
                                            // onClick={handleServiceUpdate}
                                            className="w-40 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 font-bold"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MechanicPages>
    );
};

export default NewRequestDetails;
