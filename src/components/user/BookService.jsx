import React from "react";
import { useState, useEffect } from "react";
import UserPages from "../../components/user/UserPages";
import { useAdminContext } from "../../contexts/AdminContext";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import axiosClient from "../../axios";
import axios from "axios";

const BookService = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    vehicle_name: "",
    license_plate: "",
    vehicle_owner: "",
    email: "",
    phone: "",
    city: "",
    issue_description: "",
    date: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect to submit data when formData changes
  useEffect(() => {
    if (
      formData.vehicle_name &&
      formData.license_plate &&
      formData.vehicle_owner &&
      formData.email &&
      formData.phone &&
      formData.city &&
      formData.issue_description &&
      formData.date
    ) {
      handleSubmit();
    }
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      date: formData.date ? format(formData.date, "yyyy-MM-dd") : null,
    };

    try {
      const response = await axios.post(
        "https://1e81-102-140-138-107.ngrok-free.app/api/booking",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResponseMessage(response.data.message);
      setSubmitted(true);
      setFormData({
        vehicle_name: "",
        license_plate: "",
        vehicle_owner: "",
        email: "",
        phone: "",
        city: "",
        issue_description: "",
        date: null,
      });
      setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3s
      console.log("Booking Success:", response.data);
    } catch (error) {
      console.error("Booking Error:", error.response?.data || error.message);
    }
  };

  return (
    <UserPages title="Book a service">
      <div className=" ">
        {submitted && (
          <p className="text-green-600 bg-green-100 p-2 mb-4 text-center rounded fixed bottom-0 left-0 right-0">
            ✅ Booking is Successful!
          </p>
        )}
        {/* <h2>Book a Service</h2> */}
        <form
          onSubmit={handleSubmit}
          className="UserRegistration-form bg-blue-100 text-gray-950 border-2 border-slate-950 mx-6 lg:mx-16 my-4  lg:my-10 rounded-lg shadow-md flex flex-col justify-center items-center "
        >
          <header className="form-header bg-slate-950 p-4 text-gray-100 justify-center items-center text-center w-full">
            <p className="text-lg font-bold ">Book a service</p>
          </header>
          <div className="form-body grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 w-full px-4 lg:px-8 py-4 lg:py-10">
            <div className="vehicle-name flex flex-col gap-2">
              <label>Vehicle Name: </label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="vehicle_name"
                placeholder="Vehicle Name"
                value={formData.vehicle_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="license-plate flex flex-col gap-2">
              <label>License Plate: </label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="license_plate"
                placeholder=" License Plate"
                value={formData.license_plate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="full-name flex flex-col gap-2">
              <label>Vehicle Owner: </label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="vehicle_owner"
                placeholder=" Vehicle Owner"
                value={formData.vehicle_owner}
                onChange={handleChange}
                required
              />
            </div>
            <div className="email flex flex-col gap-2">
              <label>Email:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact flex flex-col gap-2">
              <label>Phone:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="location flex flex-col gap-2">
              <label>Location:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="city"
                placeholder="Location"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="description flex flex-col gap-2">
              <label>Issue Description:</label>
              <textarea
                className="border border-slate-500 rounded-lg p-2 text-black"
                name="issue_description"
                placeholder="Describe the problem"
                value={formData.issue_description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="date flex flex-col gap-2">
              <label>Date:</label>
              <DatePicker
                className="border border-slate-500 rounded-lg p-2 text-black"
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                dateFormat="yyyy/MM/dd"
                required
              />
              {/* <input
                                className="border border-slate-500 rounded-lg p-2 text-black"
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            /> */}
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-40 right-0 place-self-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </UserPages>
  );
};

export default BookService;
