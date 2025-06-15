import React from "react";
import Icons from "./Icons";

const Footer = () => {
    return (
        <div className="footer  h-full lg:h-[200px] bg-slate-950 bg-cover bg-center text-gray-100 text-3xl justify-center items-center text-center grid grid-cols-1 lg:grid-cols-2 mt-2  lg:mt-0 bottom-0">
            <div className="footer-1  h-full lg:h-full px-4 ">
                <h4 className="text-2xl font-bold mt-8  text-center ">
                    We are available in all the major towns of the country.
                </h4>

                <p className="font-mono text-sm mt-4 mx-4 mb-6  ">
                    All &copy;copyright@mustech.com
                </p>
            </div>
            <div className="footer-2  px-4 ">
                <Icons />
            </div>
        </div>
    );
};

export default Footer;
