import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useStateContext } from "../contexts/UserContext";
import { useMechanicContext } from "../contexts/MechanicContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ handleLoginClose }) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const { login: userLogin } = useStateContext();
    const { login: mechanicLogin } = useMechanicContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/login",
                credentials,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            console.log("Full API Response:", response.data);

            // const { message, user, role, token } = response.data;

            console.log("Message Response:", response.data.message); // ✅ Debugging

            // 🔹 Ensure data exists before using it
            if (!response.data) {
                console.error("🚨 No response data received!");
                setError("Login failed: No response data.");
                return;
            }

            // Handle both user and mechanic cases
            const userData = response.data.user || response.data.mechanic;
            console.log("Extracted User:", userData); // ✅ Debugging
            const role = response.data.role;
            const token = response.data.token;

            console.log("Extracted User & Role:", userData, role); // ✅ Debugging

            if (role === "user") {
                userLogin(userData, token);
                navigate("/user_dashboard", { replace: true });
            } else if (role === "mechanic") {
                mechanicLogin(userData, token);
                navigate("/mechanic_dashboard", { replace: true });
            } else {
                console.log("Unknown role:", role);
                setError("Invalid role.");
            }
            setCredentials({ username: "", password: "" });
            // console.log("Login Successful:", response.data);
        } catch (error) {
            console.error("Login Error:", error.response?.data || error); // ✅ Debugging
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 mx-4 lg:mx-0">
            <div className="bg-white p-8 rounded-lg  w-96">
                <h2 className="text-3xl font-bold mb-4">Login</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="w-full px-3 py-2 border border-gray-900 rounded"
                            value={credentials.username}
                            placeholder="Enter your email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-3 py-2 border border-gray-900 rounded"
                            value={credentials.password}
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 font-semibold"
                    >
                        Login
                    </button>
                </form>
                <button
                    onClick={handleLoginClose}
                    className="mt-4 text-red-500 hover:underline font-semibold"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Login;
