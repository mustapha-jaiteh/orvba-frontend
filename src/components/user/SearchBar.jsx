import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ query, filterBy, onSearch, onFilter }) => {
    return (
        <div className="filters">
            <form
                action=""
                className=" flex flex-col lg:flex-row items-center justify-between px-4 lg:px-24 py-6 gap-8"
            >
                <div className="relative max-w-md mx-auto  w-full ">
                    <input
                        onChange={(e) => onSearch(e.target.value)}
                        className="search-input w-[100%] pl-8 lg:pl-12  rounded-md text-slate-950 font-bold relative bg-white shadow h-12 shadow-slate-950 "
                        type="text"
                        value={query}
                        placeholder={`Search for a mechanic by ${filterBy}`}
                    />
                    {/* <CiSearch className="absolute h-6 w-6  text-slate-950  ml-1 lg:ml-2" /> */}
                    <span className="absolute left-2 lg:left-3 top-1/2 transform -translate-y-1/2 text-gray-600 ">
                        <CiSearch size={20} />
                    </span>
                </div>
                <div className="select-wrapper ">
                    <label htmlFor="" className="font-bold text-slate-950 pb-2">
                        Search by:{" "}
                    </label>
                    <select
                        value={filterBy}
                        onChange={(e) => onFilter(e.target.value)}
                        className="select-input shadow-md shadow-slate-950 h-10 py-2 px-4 text-slate-950 font-bold"
                        name="region"
                    >
                        <option value="name">Name</option>
                        <option value="city">City</option>
                        <option value="specialization">Specialization</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
