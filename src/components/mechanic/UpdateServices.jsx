import React from "react";
import { useState } from "react";
import { useAdminContext } from "../../contexts/AdminContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MechanicPages from "../../components/mechanic/MechanicPages";
import { useLocation } from "react-router-dom";
import { useMechanicContext } from "../../contexts/MechanicContext";
import axios from "axios";

const UpdateServices = ({}) => {
  const { mechanic, bookings } = useMechanicContext();

  const location = useLocation();
  const booking = location.state?.booking;

  const [form, setForm] = useState({
    bookings_id: booking?.id | "",
    licenswe_plate: booking?.license_plate | "",
    vehicle_name: booking?.vehicle_name | "",
    vehicle_owner: booking?.vehicle_owner | "",
    mechanic_name: booking?.mechanic_name | "",
    mechanic_license: booking?.mechanic_license | "",
    mechanic_phone: mechanic?.phone | "",
    mechanic_location: mechanic?.city | "",
    request_date: booking?.date | "",
    issue_description: booking?.issue_description | "",
    charges: "",
    status: "",
    payment_status: "",
    paid_date: "",
    payment_receipt: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // const location = useLocation();
  // const { licensePlate } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      await axios.post(
        "https://41dd-102-140-139-95.ngrok-free.app/api/mechanic/service-update",
        form
      );
      alert("Service updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update service.");
    }
  };

  return (
    <>
      <MechanicPages title="Update services">
        <div className="new-requests w-full  h-full bg-blue-100 pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-4">
            <h1 className="text-center text-4xl my-2 py-4 font-bold">
              Update service status
            </h1>
          </div>
          <div className="p-4 max-w-lg mx-auto bg-white border rounded-2xl shadow-2xl shadow-slate-950">
            <h2 className="text-xl font-bold mb-4">Update Service</h2>
            <form
              onSubmit={handleSubmit}
              method="POST"
              action="/api/update-service"
              encType="multipart/form-data"
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
                  <option value="pending">pending</option>
                  <option value="in progress">in progress</option>
                  <option value="completed">completed</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold">Charges</label>
                <input
                  type="number"
                  name="charges"
                  // value={updatedData.charges}
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
                  <option value="pending">pending</option>
                  <option value="in progress">in progress</option>
                  <option value="completed">completed</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold">Paid Date</label>
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
                  onClick={handleSubmit}
                  className="w-40 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 font-bold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* testing table */}
      </MechanicPages>
    </>
  );
};

export default UpdateServices;
