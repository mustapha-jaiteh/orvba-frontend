import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "/images/car-2.png";
// import { users } from "../services/data";
import logo from "/images/car-2.png";
import axios from "axios";
import { useRef } from "react";
import axiosClient from "../../axios";

const UserRegister = () => {
    const [newArr, setNewArr] = useState([]);
    const [formData, setFormData] = useState({
        id: null,
        name: "",
        email: "",
        role: "",
        phone: "",
        street_address: "",
        city: "",
        region: "",
        vehicle_name: "",
        vehicle_model: "",
        vehicle_year: "",
        license_plate: "",
        vehicle_type: "",
        username: "",
        password: "",
        confirm_password: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
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
            formData.name &&
            formData.email &&
            formData.role &&
            formData.phone &&
            formData.street_address &&
            formData.city &&
            formData.region &&
            formData.vehicle_name &&
            formData.vehicle_model &&
            formData.vehicle_year &&
            formData.license_plate &&
            formData.vehicle_type &&
            formData.username &&
            formData.password &&
            formData.confirm_password
        ) {
            handleSubmit();
        }
    }, [formData]);

    // const validate = () => {
    //     const errors = {};
    //     if (!formData.name) errors.name = "Full Name is required";
    //     if (!formData.email) errors.email = "Email is required";
    //     if (!formData.role) errors.role = "Role is required";
    //     if (!formData.phone) errors.phone = "Phone number is required";
    //     if (!formData.street_address)
    //         errors.street_address = "Street Address is required";
    //     if (!formData.city) errors.city = "City is required";
    //     if (!formData.region) errors.region = "Region is required";
    //     if (!formData.vehicle_name)
    //         errors.vehicle_name = "Vehicle Name is required";
    //     if (!formData.vehicle_model)
    //         errors.vehicle_model = "Vehicle Model is required";
    //     if (!formData.vehicle_year)
    //         errors.vehicle_year = "Vehicle Year is required";
    //     if (!formData.license_plate)
    //         errors.license_plate = "License Plate is required";
    //     if (!formData.vehicle_type)
    //         errors.vehicle_type = "Vehicle Type is required";
    //     if (!formData.username) errors.username = "Username is required";
    //     if (!formData.password) errors.password = "Password is required";
    //     if (formData.password !== formData.confirm_password)
    //         errors.confirm_password = "Passwords do not match";
    //     return errors;
    // };

    const buttonCancel = () => {
        setFormData({
            name: "",
            email: "",
            role: "",
            phone: "",
            street_address: "",
            city: "",
            region: "",
            vehicle_name: "",
            vehicle_model: "",
            vehicle_year: "",
            license_plate: "",
            vehicle_type: "",
            username: "",
            password: "",
            confirm_password: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post("/user_register", {
                ...formData,
                password_confirmation: formData.confirm_password, // Ensure password confirmation is included
            });
            setResponseMessage(response.data.message);
            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                role: "",
                phone: "",
                street_address: "",
                city: "",
                region: "",
                vehicle_name: "",
                vehicle_model: "",
                vehicle_year: "",
                license_plate: "",
                vehicle_type: "",
                username: "",
                password: "",
                confirm_password: "",
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
                    className="UserRegistration-form bg-blue-200 text-gray-950 border-4 border-slate-950 mx-4 lg:mx-12 my-4  lg:my-10 rounded-lg shadow-md flex flex-col justify-center items-center "
                >
                    <header className="form-header bg-slate-950 p-4 lg:p-10 text-gray-100 justify-center items-center text-center w-full">
                        <div>
                            <h1 className="text-4xl font-bold py-2 lg:py-4">
                                USER REGISTRATION FORM
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
                                required
                                placeholder="Full Name"
                                value={formData.name}
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
                                required
                                placeholder="Email"
                                value={formData.email}
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
                                required
                                placeholder="set role as user"
                                value={formData.role}
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
                                required
                                placeholder="Phone Number"
                                value={formData.phone}
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
                                required
                                placeholder="Street Address"
                                value={formData.street_address}
                                onChange={handleChange}
                            />
                            {errors.street_address && (
                                <span>{errors.street_address}</span>
                            )}
                        </div>
                        <div className="city flex flex-col gap-2 text-start">
                            <label>City:</label>
                            <input
                                className="border border-slate-500 rounded-lg p-2 text-black"
                                type="text"
                                name="city"
                                required
                                placeholder="City"
                                value={formData.city}
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
                                required
                                placeholder="Region"
                                value={formData.region}
                                onChange={handleChange}
                            />
                            {errors.region && <span>{errors.region}</span>}
                        </div>
                        <div className="vehicleMake flex flex-col gap-2 text-start">
                            <label>Vehicle Name:</label>
                            <input
                                className="border border-slate-500 rounded-lg p-2 text-black"
                                type="text"
                                name="vehicle_name"
                                required
                                placeholder="Vehicle Make"
                                value={formData.vehicle_name}
                                onChange={handleChange}
                            />
                            {errors.vehicleMake && (
                                <span>{errors.vehicle_name}</span>
                            )}
                        </div>
                        <div className="vehicle_model flex flex-col gap-2 text-start">
                            <label>Vehicle Model:</label>
                            <input
                                className="border border-slate-500 rounded-lg p-2 text-black"
                                type="text"
                                name="vehicle_model"
                                required
                                placeholder="Vehicle Model"
                                value={formData.vehicle_model}
                                onChange={handleChange}
                            />
                            {errors.vehicle_model && (
                                <span>{errors.vehicle_model}</span>
                            )}
                        </div>
                        <div className="vehicle_year flex flex-col gap-2 text-start">
                            <label>Vehicle Year:</label>
                            <input
                                className="border border-slate-500 rounded-lg p-2 text-black"
                                type="number"
                                name="vehicle_year"
                                required
                                placeholder="Vehicle Year"
                                value={formData.vehicle_year}
                                onChange={handleChange}
                            />
                            {errors.vehicle_year && (
                                <span>{errors.vehicle_year}</span>
                            )}
                        </div>
                        <div className="license_plate flex flex-col gap-2 text-start">
                            <label>License Plate:</label>
                            <input
                                className="border border-slate-500 rounded-lg p-2 text-black"
                                type="text"
                                name="license_plate"
                                required
                                placeholder="License Plate"
                                value={formData.license_plate}
                                onChange={handleChange}
                            />
                            {errors.license_plate && (
                                <span>{errors.license_plate}</span>
                            )}
                        </div>
                        <div className="vehicle_type flex flex-col gap-2 text-start">
                            <label>Vehicle Type:</label>
                            <select
                                className="border border-slate-500 p-2 text-black"
                                name="vehicle_type"
                                required
                                value={formData.vehicle_type}
                                onChange={handleChange}
                            >
                                <option value="">Select Vehicle Type</option>
                                <option value="sedan">Private</option>
                                <option value="suv">Comercial</option>
                                <option value="truck">Truck</option>
                                <option value="motorcycle">Motorcycle</option>
                            </select>
                            {errors.vehicle_type && (
                                <span>{errors.vehicle_type}</span>
                            )}
                        </div>
                        <div className="username flex flex-col gap-2 text-start">
                            <label>Username:</label>
                            <input
                                className="border border-slate-500 rounded-lg p-2 text-black"
                                type="text"
                                name="username"
                                placeholder="Username"
                                required
                                value={formData.username}
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
                                required
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                        <div className="confirm_password flex flex-col gap-2 text-start">
                            <label>Confirm Password:</label>
                            <input
                                className="border border-slate-500 rounded-lg p-2 text-black"
                                type="password"
                                name="confirm_password"
                                required
                                placeholder="Confirm Password"
                                value={formData.confirm_password}
                                onChange={handleChange}
                            />
                            {errors.confirm_password && (
                                <span>{errors.confirm_password}</span>
                            )}
                        </div>
                        {/* <div className="button-container flex justify-center items-center w-full gap-32"> */}
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-40 right-0 place-self-center"
                        >
                            Register
                        </button>
                        <button
                            className="bg-gray-400 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-lg w-40 place-self-center"
                            onClick={buttonCancel}
                        >
                            Cancel
                        </button>

                        {/* </div> */}
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserRegister;
