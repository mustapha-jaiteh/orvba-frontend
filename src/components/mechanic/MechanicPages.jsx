import React from "react";

const MechanicPages = ({ title, buttons = "", children }) => {
    return (
        <>
            <header className="bg-white shadow">
                <div className=" flex justify-between items-center mx-auto  px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        {title}
                    </h1>
                    {buttons}
                </div>
            </header>
            <main className="   px-4 lg:px-8 mx-auto">
                <div>
                    {/* Your content */}
                    {children}
                </div>
            </main>
        </>
    );
};

export default MechanicPages;
