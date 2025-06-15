import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import Home from "./src/Home";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import UserRegister from "./src/components/user/UserRegister";
import MechanicRegister from "./src/components/mechanic/MechanicRegister";
// import Admin from "./src/pages/mechanic/Admin";
import AdminDashboard from "./src/pages/admin/AdminDashboard";
import AdminLayout from "./src/components/admin/AdminLayout";
import { useAdminContext } from "./src/contexts/AdminContext.jsx";
import { useContext } from "react";
import Users from "./src/pages/user/Users.jsx";
import Services from "./src/pages/admin/Services.jsx";
import Mechanics from "./src/pages/mechanic/Mechanics.jsx";
import Bookings from "./src/pages/admin/Bookings.jsx";
import Payments from "./src/pages/admin/Payments.jsx";
//details pages
import MechanicDetails from "./src/pages/mechanic/MechanicDetails.jsx";
import UserDetails from "./src/pages/user/UserDetails.jsx";
import BookingDetails from "./src/pages/admin/BookingDetails.jsx";
import ServiceDetails from "./src/pages/admin/ServiceDetails.jsx";
//user pages
import UserLayaout from "./src/components/user/UserLayout.jsx";
import UserDashboard from "./src/pages/user/UserDashboard.jsx";
import BookService from "./src/components/user/BookService.jsx";
import PreviousRequests from "./src/components/user/PreviousRequests.jsx";
import PreviousRequestDetails from "./src/components/user/PreviousRequestDetails.jsx";
//mechanic pages
import MechanicLayaout from "./src/components/mechanic/MechanicLayout.jsx";
import MechanicDashboard from "./src/pages/mechanic/MechanicDashboard.jsx";
import NewRequests from "./src/components/mechanic/NewRequests.jsx";
import NewRequestDetails from "./src/components/mechanic/NewRequestDetails.jsx";
import UpdateServices from "./src/components/mechanic/UpdateServices.jsx";
import MechanicServices from "./src/components/mechanic/MechanicServices.jsx";
import MechanicServiceDetails from "./src/components/mechanic/MechanicServiceDetails.jsx";
// import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
    const { mechanics, users, bookings, services } = useAdminContext();

    // Define the routes
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "login",
            element: <Login />,
        },
        { path: "register", element: <Register /> },
        {
            path: "user_register",
            element: <UserRegister />,
        },
        {
            path: "mechanic_register",
            element: <MechanicRegister />,
        },

        {
            path: "/admin_dashboard",
            element: <AdminLayout />,
            children: [
                // { path: "/admin_dashboard", element: <Navigate to="/" /> },
                { path: "/admin_dashboard", element: <AdminDashboard /> },

                {
                    path: "mechanics",
                    element: <Mechanics />,
                },
                {
                    path: "mechanics/:id",
                    element: <MechanicDetails />,
                },
                { path: "users", element: <Users /> },
                {
                    path: "users/:id",
                    element: <UserDetails />,
                },
                {
                    path: "bookings",
                    element: <Bookings />,
                },
                {
                    path: "bookings/:id",
                    element: <BookingDetails />,
                },
                {
                    path: "services",
                    element: <Services services={services} />,
                },
                {
                    path: "services/:id",
                    element: <ServiceDetails />,
                },
                {
                    path: "payments",
                    element: <Payments />,
                },
                // { path: "/settings", element: <h2>Admin Settings</h2> },
            ],
        },
        //user routes
        {
            path: "/user_dashboard",
            element: <UserLayaout />,
            children: [
                // { path: "/user_dashboard", element: <Navigate to="/" /> },
                { path: "/user_dashboard", element: <UserDashboard /> },
                { path: "book_service", element: <BookService /> },
                { path: "previous_requests", element: <PreviousRequests /> },
                {
                    path: "previous_requests/:id",
                    element: <PreviousRequestDetails />,
                },
            ],
        },
        //mechanic routes
        {
            path: "/mechanic_dashboard",
            element: <MechanicLayaout />,
            children: [
                // { path: "/mechanic_dashboard", element: <Navigate to="/" /> },
                { path: "/mechanic_dashboard", element: <MechanicDashboard /> },
                { path: "new_requests", element: <NewRequests /> },
                { path: "new_requests/:id", element: <NewRequestDetails /> },
                {
                    path: "update_services",
                    element: <UpdateServices />,
                },
                {
                    path: "mechanic_services",
                    element: <MechanicServices />,
                },
                {
                    path: "mechanic_services/:id",
                    element: <MechanicServiceDetails />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

// Export the router instance
export default Router;
