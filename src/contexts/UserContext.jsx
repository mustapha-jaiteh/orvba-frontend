import React from "react";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const useStateContext = () => useContext(UserContext);
// currentUser: {},
// setCurrentUser: () => {},
// userToken: null,
// setUserToken: () => {},

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  // const navigate = useNavigate();

  // 🔹 Login function
  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  // 🔹 Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
  };

  const [services, setServices] = useState([]);

  //fetch user services
  useEffect(() => {
    if (!user?.license_plate) return;

    fetch(
      `http://orvba-fullstack-production.up.railway.app/api/user/services/${user.license_plate}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setServices(data);
        else console.warn(data.message);
      })
      .catch((err) => console.error("Error fetching bookings:", err));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, services, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// export default UserProvider;
