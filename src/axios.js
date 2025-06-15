import axios from "axios";
// import { Router } from "react-router-dom";
import Router from "../router";

// const axiosClient = axios.create({
//     baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
// });

// axiosClient.interceptors.request.use((config) => {
//     const token = localStorage.get("ACCESS_TOKEN");
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
// });

// axiosClient.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             localStorage.removeItem("ACCESS_TOKEN");
//             // Router.navigate("/");
//             return error;
//         }
//         throw error;
//     }
// );

// Create an instance of Axios with base URL
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Laravel API base URL
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export default axiosClient;
