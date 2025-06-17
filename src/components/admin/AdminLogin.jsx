import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ adminLoginClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    //fetch admin login credentials
    try {
      const response = await axios.post(
        "http://orvba-fullstack-production.up.railway.app/api/admin-login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.data.status) {
        setMessage("Login successful!");
        navigate("/admin_dashboard");
        // You can redirect or store token here
      } else {
        setMessage("Login failed. Check credentials.");
      }

      if (response.data.success) {
        localStorage.setItem("admin_token", response.data.token);
        navigate("/admin_dashboard");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        // Laravel validation errors
        setError(err.response.data.message || "Validation failed");
      } else {
        setError(err.message || "Login failed");
      }
    }
  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 mx-4 lg:mx-0">
      <div className="bg-white p-8 rounded-lg  w-96">
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              name="email"
              className="w-full px-3 py-2 border border-gray-900 rounded"
              value={formData.email}
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
              value={formData.password}
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
          onClick={adminLoginClose}
          className="mt-4 text-red-500 hover:underline font-semibold"
        >
          Close
        </button>
        {message && (
          <div className="mt-4 text-center text-sm text-red-600">{message}</div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
