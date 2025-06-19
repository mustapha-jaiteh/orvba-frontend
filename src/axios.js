import axios from "axios";
// import { Router } from "react-router-dom";
import Router from "../router";

// Create an instance of Axios with base URL
const axiosClient = axios.create({
  baseURL: "https://1e81-102-140-138-107.ngrok-free.app/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosClient;
