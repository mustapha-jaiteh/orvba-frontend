import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { AdminProvider } from "./contexts/AdminContext";
import { UserProvider } from "./contexts/UserContext";
import { MechanicProvider } from "./contexts/MechanicContext";

import Router from "../router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AdminProvider>
            <UserProvider>
                <MechanicProvider>
                    <Router />
                </MechanicProvider>
            </UserProvider>
        </AdminProvider>
    </React.StrictMode>
);
