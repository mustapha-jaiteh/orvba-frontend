import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "/images/car-2.png";
import mentenance1 from "/images/service-img-1.jpg";
import mentenance2 from "/images/service-img-2.jpg";
import Repair1 from "/images/service-img-3.jpg";
import Repair2 from "/images/service-img-4.jpg";

const HomePageServices = () => {
    const services = [
        {
            name: "Emergency vehicle repair",
            image1: Repair1,
            image2: Repair2,
            description:
                "Emergency vehicle repair is a service that is provided by our team of experienced mechanics. We understand that every vehicle is unique and we take the time to understand your vehicle's needs before we start the repair process. Our team of experts will work with you to ensure that your vehicle is fully repaired.",
        },
        {
            name: "Regular Vehicle mentainance",
            image1: mentenance1,
            image2: mentenance2,
            description:
                "Regular vehicle maintenance is a service that is provided for our customers. Once you registerd with us, we will get in touch with you to schedule a visit. We will then take care of your vehicle and make sure that it is in top condition. You can rest assured that your vehicle will be taken care of by our team of experienced mechanics.",
        },
    ];
    return (
        <>
            <div className="services my-4">
                <header className="bg-slate-950  bg-cover bg-center w-full h-[100px] justify-center items-center text-center p-4">
                    <h2 className="text-gray-100 text-6xl">SERVICES</h2>
                </header>
                <p className="mx-8 lg:mx-60 text-slate-950 text-4xl font-bold p-8 text-center">
                    From regular maintenance to emergency repairs, our team of
                    experienced mechanics is here to help you get the job done.
                </p>
                <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mx-2 mb-8 gap-4 lg:gap-8 items-center justify-center px-2 lg:px-8 h-full  ">
                    {services.map((item, index) => (
                        <div className="services items-center justify-center text-center  bottom-0 w-full bg-slate-950 text-gray-100 h-full rounded-lg">
                            <h3 className="shop-item-name font-bold text-lg m-2">
                                {item.name}
                            </h3>
                            <p className=" m-2">{item.description}</p>
                            <picture>
                                {/* source for larger screen */}
                                <source
                                    srcSet={item.image1}
                                    media="(min-width: 1024px)"
                                    className="w-full h-full"
                                />
                                {/* source for medium screen */}
                                <source
                                    srcSet={item.image1}
                                    media="(min-width: 768px)"
                                    className="w-full h-full"
                                />
                                {/* source for smaller screen */}
                                <source
                                    srcSet={item.image2}
                                    media="(min-width: 767px)"
                                    className="w-full h-full"
                                />
                                {/* default source */}
                                <img
                                    src={item.image2}
                                    alt="service-img"
                                    className="w-full h-80 lg:h-80 object-cover"
                                />
                            </picture>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomePageServices;
