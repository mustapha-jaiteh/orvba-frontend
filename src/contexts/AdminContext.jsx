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

//service data sample
export const tempServices = [
    {
        id: 1,
        license_plate: "BJL 123456",
        vehicle_name: "Range Rover",
        vehicle_owner: "Mustapha Jaiteh",
        date: "07/18/2024",
        mechanic_name: "Lamin Ceesay",
        mechanic_phone: "5609991",
        mechanic_license: "3535454",
        location: "Banjul",
        status: "in progress",
        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "20000",
        payment_status: "completed",
        paid_date: "09/18/2024",
        reciept: "uploard",
    },
    {
        id: 2,
        license_plate: "BJL 56789",
        vehicle_name: "Benz",
        vehicle_owner: "John Doe",
        date: "07/18/2024",
        mechanic_name: "Binta Badjie",
        mechanic_phone: "5609991",
        mechanic_license: "343546",
        location: "Sanchaba",
        status: "in progress",
        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "40000",
        payment_status: "pending",
        paid_date: "",
        reciept: "",
    },
    {
        id: 3,
        license_plate: "BJL 456789",
        vehicle_name: "Toyota Rav4",
        vehicle_owner: "Kawsu Kebbeh",
        date: "07/18/2024",
        mechanic_name: "Alfo Kebbeh",
        mechanic_phone: "5609991",
        mechanic_license: "45444",
        location: "Brikama",
        status: "pending",
        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "20000",
        payment_status: "pending",
        paid_date: "",
        reciept: "",
    },
    {
        id: 4,
        license_plate: "BJL 256789",
        vehicle_name: "BMW X5",
        vehicle_owner: "Binta Badjie",
        date: "07/18/2024",
        mechanic_name: "Alfo Kebbeh",
        mechanic_phone: "5609991",
        mechanic_license: "3535654",
        location: "Sanchaba",
        status: "pending",
        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "30000",
        payment_status: "completed",
        paid_date: "09/18/2024",
        reciept: "uploard",
    },
    {
        id: 5,
        license_plate: "BJL 356789",
        vehicle_name: "Nissan Pathfinder",
        vehicle_owner: "Binta Badjie",
        date: "09/18/2024",
        mechanic_name: "Lamin Ceesay",
        mechanic_phone: "5609991",
        mechanic_license: "3535454",
        location: "Brikama",
        status: "in progress",
        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "20000",
        payment_status: "completed",
        paid_date: "09/18/2024",
        reciept: "uploard",
    },
];

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
            .get("http://127.0.0.1:8000/api/admin/users")
            .then((response) => setUsers(response.data))
            .catch((error) => console.error("Error fetching users:", error));

        // Fetch Mechanics
        axios
            .get("http://127.0.0.1:8000/api/admin/mechanics")
            .then((response) => setMechanics(response.data))
            .catch((error) =>
                console.error("Error fetching mechanics:", error)
            );
        // Fetch Bookings
        axios
            .get("http://127.0.0.1:8000/api/admin/bookings")
            .then((response) => setBookings(response.data))
            .catch((error) => console.error("Error fetching bookings:", error));

        // Fetch Services
        axios
            .get("http://127.0.0.1:8000/api/admin/services")
            .then((response) => setServices(response.data))
            .catch((error) => console.error("Error fetching services:", error));
        // Fetch Feedback
        // Fetch Services
        axios
            .get("http://127.0.0.1:8000/api/admin/feedbacks")
            .then((response) => setFeedback(response.data))
            .catch((error) => console.error("Error fetching feedback:", error));
    }, []);
    const handleLogout = async () => {
        try {
            // Optional API call if you have backend logout logic
            await axios.post(
                "http://127.0.0.1:8000/api/admin/logout",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "admin_token"
                        )}`,
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
