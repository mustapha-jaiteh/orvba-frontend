import React from "react";
import { useState, useEffect } from "react";
// import logo from "/images/car-2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { mechanics } from "../services/data.js";
import logo from "/images/car-2.png";
// import axiosClient from "../../axios";
import axios from "axios";

const MechanicRegister = () => {
  //send the data to the mechanic list table
  const navigate = useNavigate();
  const [newArr, setNewArr] = useState([]);
  const [mechanic, setMechanic] = useState({
    id: null,
    profile_image: null,
    name: "",
    email: "",
    role: "",
    phone: "",
    street_address: "",
    city: "",
    region: "",
    mechanic_license: "",
    years_of_experience: "",
    specialization: "",
    username: "",
    password: "",
    password_confirmation: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setMechanic({ ...mechanic, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setMechanic({ ...mechanic, profile_image: e.target.files[0] });
  };

  const [errors, setErrors] = useState({});

  const buttonCancel = () => {
    setFormData({
      id: null,
      profile_image: null,
      name: "",
      email: "",
      role: "",
      phone: "",
      street_address: "",
      city: "",
      region: "",
      mechanic_license: "",
      years_of_experience: "",
      specialization: "",
      username: "",
      password: "",
      password_confirmation: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", mechanic.name);
    formData.append("email", mechanic.email);
    formData.append("role", mechanic.role);
    formData.append("phone", mechanic.phone);
    formData.append("street_address", mechanic.street_address);
    formData.append("city", mechanic.city);
    formData.append("region", mechanic.region);
    formData.append("mechanic_license", mechanic.mechanic_license);
    formData.append("years_of_experience", mechanic.years_of_experience);
    formData.append("specialization", mechanic.specialization);
    formData.append("username", mechanic.username);
    formData.append("password", mechanic.password);
    formData.append("password_confirmation", mechanic.password_confirmation);
    if (mechanic.profile_image) {
      formData.append("profile_image", mechanic.profile_image);
    }
    try {
      // const response = await axiosClient.post("/mechanic_register", {
      //     ...formData,
      //     password_confirmation: formData.password_confirmation, // Ensure password confirmation is included
      // });
      const response = await axios.post(
        "https://1e81-102-140-138-107.ngrok-free.app/api/mechanic_register",
        formData,

        {
          password_confirmation: formData.password_confirmation, // Ensure password confirmation is included
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResponseMessage(response.data.message);
      setSubmitted(true);
      setMechanic({
        profile_image: null,
        name: "",
        email: "",
        role: "",
        phone: "",
        street_address: "",
        city: "",
        region: "",
        mechanic_license: "",
        years_of_experience: "",
        specialization: "",
        username: "",
        password: "",
        password_confirmation: "",
      });
      setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3s
      console.log("Registration Successful:", response.data);
    } catch (error) {
      console.error("Registration Error:", error.response?.data);
      setResponseMessage(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <>
      <div>
        {submitted && (
          <p className="text-green-600 bg-green-100 p-2 mb-4 text-center rounded fixed bottom-0 left-0 right-0">
            ✅ You have registered successfully!
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="UserRegistration-form text-gray-950 bg-blue-200 border-4 border-slate-950 mx-4 lg:mx-12 my-4  lg:my-10 rounded-lg shadow-md flex flex-col justify-center items-center z-50 "
        >
          <header className="form-header bg-slate-950 p-4 lg:p-10 text-gray-100 justify-center items-center text-center w-full">
            <div>
              <h1 className="text-4xl font-bold py-2 lg:py-4">
                MECHANIC REGISTRATION FORM
              </h1>
              <p className="text-lg font-bold ">
                Please fill out the form below to register.
              </p>
            </div>
          </header>
          <div className="form-body grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 w-full px-4 lg:px-8 py-4 lg:py-10">
            <div className="full-name flex flex-col gap-2 text-start">
              <label className="label">Full Name:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="name"
                placeholder="full name"
                required
                value={mechanic.name}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>
            <div className="email flex flex-col gap-2 text-start">
              <label>Email:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="email"
                name="email"
                placeholder="email"
                required
                value={mechanic.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className="role flex flex-col gap-2 text-start">
              <label className="label">Role:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="role"
                placeholder="set role as mechanic"
                required
                value={mechanic.role}
                onChange={handleChange}
              />
              {errors.role && <span>{errors.role}</span>}
            </div>
            <div className="phone flex flex-col gap-2 text-start">
              <label>Phone:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="phone"
                placeholder="phone number"
                required
                value={mechanic.phone}
                onChange={handleChange}
              />
              {errors.phone && <span>{errors.phone}</span>}
            </div>
            <div className="street_address flex flex-col gap-2 text-start">
              <label>Street Address:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="street_address"
                placeholder="Street address"
                required
                value={mechanic.street_address}
                onChange={handleChange}
              />
              {errors.street_address && <span>{errors.street_address}</span>}
            </div>
            <div className="city flex flex-col gap-2 text-start">
              <label>City:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="city"
                placeholder="City"
                required
                value={mechanic.city}
                onChange={handleChange}
              />
              {errors.city && <span>{errors.city}</span>}
            </div>
            <div className="region flex flex-col gap-2 text-start">
              <label>Region:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="region"
                placeholder="Region"
                required
                value={mechanic.region}
                onChange={handleChange}
              />
              {errors.region && <span>{errors.region}</span>}
            </div>
            <div className="profilePicture flex flex-col gap-2 text-start">
              <label>Profile Picture:</label>
              <input
                type="file"
                name="profile_image"
                // required
                // value={formData.profile_image}
                onChange={handleFileChange}
              />
            </div>
            <div className="mechanic_license flex flex-col gap-2 text-start">
              <label>Certification/License Number:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="mechanic_license"
                placeholder="License number"
                required
                value={mechanic.mechanic_license}
                onChange={handleChange}
              />
              {errors.mechanic_license && (
                <span>{errors.mechanic_license}</span>
              )}
            </div>
            <div className="years_of_experience flex flex-col gap-2 text-start">
              <label>Years of Experience:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="number"
                name="years_of_experience"
                placeholder="Years of experience"
                required
                value={mechanic.years_of_experience}
                onChange={handleChange}
              />
              {errors.years_of_experience && (
                <span>{errors.years_of_experience}</span>
              )}
            </div>
            <div className="specialization flex flex-col gap-2 text-start">
              <label>Specialization:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="specialization"
                placeholder="Specialization"
                required
                value={mechanic.specialization}
                onChange={handleChange}
              />
              {errors.specialization && <span>{errors.specialization}</span>}
            </div>

            <div className="username flex flex-col gap-2 text-start">
              <label>Username:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="text"
                name="username"
                placeholder="Username"
                required
                value={mechanic.username}
                onChange={handleChange}
              />
              {errors.username && <span>{errors.username}</span>}
            </div>
            <div className="password flex flex-col gap-2 text-start">
              <label>Password:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="password"
                name="password"
                placeholder="Password"
                required
                value={mechanic.password}
                onChange={handleChange}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <div className="password_confirmation flex flex-col gap-2 text-start">
              <label>Confirm Password:</label>
              <input
                className="border border-slate-500 rounded-lg p-2 text-black"
                type="password"
                name="password_confirmation"
                placeholder="Confirm password"
                required
                value={mechanic.password_confirmation}
                onChange={handleChange}
              />
              {errors.password_confirmation && (
                <span>{errors.password_confirmation}</span>
              )}
            </div>
            {/* <Link to=""> */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg w-40 right-0 place-self-center"
            >
              Submit
            </button>
            {/* </Link> */}
            <button
              className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-lg w-40 place-self-center"
              onClick={buttonCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MechanicRegister;
