import React from "react";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import mustik from "../assets/images/mustik.jpeg";
import kawsu from "../assets/images/kawsu.jpg";
import hawa from "../assets/images/hawa.jpg";
import kaddy from "../assets/images/kaddy.jpg";
import demi from "../assets/images/demi.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminContext = createContext();

// Custom hook to use AdminContext
export const useAdminContext = () => {
  return useContext(AdminContext);
};
// const navigate = useNavigate();
export const AdminProvider = ({ children }) => {
  // const [admin, setAdmin] = useState({
  //     name: "mustik",
  //     password: "123456",
  // });

  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [mechanics, setMechanics] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [feedback, setFeedback] = useState([]);
  // const [payments, setPayments] = useState(tempPayments);
  useEffect(() => {
    // Fetch Users
    axios
      .get("http://orvba-fullstack-production.up.railway.app/api/admin/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));

    // Fetch Mechanics
    axios
      .get(
        "http://orvba-fullstack-production.up.railway.app/api/admin/mechanics"
      )
      .then((response) => setMechanics(response.data))
      .catch((error) => console.error("Error fetching mechanics:", error));
    // Fetch Bookings
    axios
      .get(
        "http://orvba-fullstack-production.up.railway.app/api/admin/bookings"
      )
      .then((response) => setBookings(response.data))
      .catch((error) => console.error("Error fetching bookings:", error));

    // Fetch Services
    axios
      .get(
        "http://orvba-fullstack-production.up.railway.app/api/admin/services"
      )
      .then((response) => setServices(response.data))
      .catch((error) => console.error("Error fetching services:", error));
    // Fetch Feedback
    // Fetch Services
    axios
      .get(
        "http://orvba-fullstack-production.up.railway.app/api/admin/feedbacks"
      )
      .then((response) => setFeedback(response.data))
      .catch((error) => console.error("Error fetching feedback:", error));
  }, []);
  const handleLogout = async () => {
    try {
      // Optional API call if you have backend logout logic
      await axios.post(
        "http://orvba-fullstack-production.up.railway.app/api/admin/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
        }
      );

      // Clear admin info/token from localStorage
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_name"); // or any other admin data

      // Redirect to home page
      // navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        handleLogout,
        users,
        setUsers,
        services,
        setServices,
        mechanics,
        setMechanics,
        bookings,
        setBookings,
        feedback,
        setFeedback,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

// Hook to use context
// export const useAdminContext = () => useContext(AdminContext);
// export default AdminProvider;
