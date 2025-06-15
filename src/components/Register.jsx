import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = ({ handleRegisterClose }) => {
    return (
        <div className=" mx-12 fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 gap-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-bold mb-4 text-slate-950">
                    Register
                </h2>
                <form>
                    {" "}
                    <Link to="/user_register">
                        <button
                            type="submit"
                            className="w-full bg-red-700 hover:bg-red-400 text-white py-2 rounded font-semibold my-2"
                        >
                            Register as a User
                        </button>
                    </Link>
                    <Link to="/mechanic_register">
                        <button
                            type="submit"
                            className="w-full bg-red-700 hover:bg-red-400 text-white py-2 rounded font-semibold my-2"
                        >
                            Register as a Mechanic
                        </button>
                    </Link>
                </form>
                <button
                    onClick={handleRegisterClose}
                    className="mt-4 text-red-500 hover:underline font-semibold"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Register;
