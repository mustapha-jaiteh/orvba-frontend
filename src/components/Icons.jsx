import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "tailwindcss/tailwind.css";

const Icons = () => {
  return (
    <div className="flex flex-col space-x-4 gap-4 items-center  lg:items-start lg:text-start mt-0 p-4 lg:p-2">
      <h4 className=" font-bold text-sm p-2 ">
        We are available on social media
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-2 gap-2 lg:gap-4">
        <a
          href="https://whatsapp.com"
          className="text-green-600 text-3x hover:text-green-800 grid grid-cols-2 "
        >
          <FaWhatsapp className="w-8 h-8 " />
          {/* <p className="">WhatsApp</p> */}
        </a>
        <a
          href="https://facebook.com"
          className="text-blue-600 text-3xl hover:text-blue-800 grid grid-cols-2"
        >
          <FaFacebook className="w-8 h-8 " />
          {/* <p className="">Facebook</p> */}
        </a>
        <a
          href="https://twitter.com"
          className="text-blue-400 text-3xl hover:text-blue-600 grid grid-cols-2"
        >
          <FaTwitter className="w-8 h-8" />
          {/* <p className="">Twitter</p> */}
        </a>
        <a
          href="https://instagram.com"
          className="text-pink-500 text-3xl hover:text-pink-700 grid grid-cols-2"
        >
          <FaInstagram className="w-8 h-8" />
          {/* <p className="">Instagram</p> */}
        </a>
        <a
          href="https://linkedin.com"
          className="text-blue-700 text-3xl hover:text-blue-900 grid grid-cols-2"
        >
          <FaLinkedin className="w-8 h-8" />
          {/* <p className="">LinkedIn</p> */}
        </a>
      </div>
    </div>
  );
};

export default Icons;
