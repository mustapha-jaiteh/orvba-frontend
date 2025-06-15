import React from "react";

const SearchResult = ({ query, filterBy, filteredMechanics }) => {
    return (
        <div>
            {query !== "" && (
                <div className="companies grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:flex-row py-8  rounded-xl">
                    {filteredMechanics.length > 0 ? (
                        filteredMechanics.map((mechnic) => (
                            <div
                                className="card bg-gray-100 hover:bg-blue-100 flex flex-col m-4  gap-2 shadow-2xl bg-transparent items-center justify-center text-center  rounded-2xl shadow-slate-950 p-2 relative  text-blue-950  "
                                key={mechnic.id}
                            >
                                <img
                                    src={mechnic.img}
                                    alt=""
                                    className="img  p-s3 rounded-full h-32 w-32"
                                />

                                <h2 className="name font-bold">
                                    {/* <span className="text-slate-950  font-extrabold">
                      name:
                    </span>{" "} */}
                                    {mechnic.name}
                                </h2>

                                <p className="type font-bold font-mono">
                                    {mechnic.phone}
                                </p>
                                <p className="type font-bold font-mono">
                                    {mechnic.city}
                                </p>
                                <p className="type font-bold font-mono">
                                    {mechnic.specialization}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="justify-center place-content-center">
                            <p className="  text-center text-2xl lg:text-4xl font-bold font-mono">
                                No mechanic with that {filterBy} found
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchResult;
