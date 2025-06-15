import React, { useState } from "react";
import AdminPages from "../../components/admin/AdminPages";
import { useAdminContext } from "../../contexts/AdminContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookingDetails = () => {
    const { bookings } = useAdminContext();

    const { id } = useParams();
    const booking = bookings.find((book) => book.id === parseInt(id));

    const [mechanicData, setMechanicData] = useState({
        mechanic_license: "",
        mechanic_name: "",
    });

    const handleAssignMechanic = async () => {
        try {
            const response = await axios.put(
                `http://127.0.0.1:8000/api/admin/assign-mechanic/${booking.id}`,
                mechanicData
            );
            alert(response.data.message);
            console.log(response.data);
            setMechanicData({
                mechanic_license: "",
                mechanic_name: "",
            });
        } catch (error) {
            console.error("Error assigning mechanic:", error);
            alert("Failed to assign mechanic");
        }
    };

    return (
        <AdminPages title="Booking Details">
            <div className="Phone  py-8 bg-blue-100">
                <h1 className="text-center text-4xl my-2 py-4 font-bold">
                    Booking details of a
                </h1>
                <div className="profile-details items-center justify-center text-center">
                    <div className="image">
                        <h2 className=" text-4xl font-bold text-center justify-center w-full text-blue-800">
                            {booking.vehicle_name}
                        </h2>
                        <h3 className="text-center text-md font-bold m-2">
                            The details on the card below will be sent to the
                            assigned mechanic.
                        </h3>
                        <div className="card bg-white m-4 lg:mx-32  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-4 relative">
                            <div>
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
                            {/* mechanic from */}
                            <div className="mt-4 mx-auto lg:mx-60 flex flex-col gap-4 items-center justify-center">
                                <h2 className="text-center my-2 mx-1 text-slate-950 font-bold">
                                    Assigned mechanic:
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Mechanic License Number"
                                    className="border border-gray-600 p-2 mb-2 w-full rounded-lg"
                                    value={mechanicData.mechanic_license}
                                    onChange={(e) =>
                                        setMechanicData({
                                            ...mechanicData,
                                            mechanic_license: e.target.value,
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Mechanic Name"
                                    className="border border-gray-600 p-2 mb-2 w-full rounded-lg"
                                    value={mechanicData.mechanic_name}
                                    onChange={(e) =>
                                        setMechanicData({
                                            ...mechanicData,
                                            mechanic_name: e.target.value,
                                        })
                                    }
                                />
                                <button
                                    onClick={handleAssignMechanic}
                                    className="bg-blue-500 text-white py-2 px-4  font-bold w-48 lg:w-60 rounded-lg"
                                >
                                    Assign Mechanic
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPages>
    );
};

export default BookingDetails;
