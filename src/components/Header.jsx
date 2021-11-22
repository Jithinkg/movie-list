import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { connect } from "react-redux";

const Header = ({ dispatch, genre }) => {
  const handleSearch = (e) => {
    const value = e.target.value.trim();
    dispatch({ type: "SEARCH", data: value });
  };
  return (
    <header className="flex items-center justify-between m-5 h-auto w-11/12 px-4">
      <div
        className="flex pr-2 md:px-7 text-xl whitespace-nowrap
            space-x-10 sm:space-x-20 
            scrollbar-hide"
      >
        <h2
          className="cursor-pointer 
                 transition duration:75 transform
                 hover:scale-105 
                 text-base md:text-lg
                 hover:text-white  
                 active:text-red-500
                "
        >
          {genre}
        </h2>
      </div>

      <div
        id="SearchContainer"
        className="flex items-center justify-between max-w-xl"
      >
        <SearchIcon className="mx-2 w-4 h-6 md:w-6 md:h-10 text-white" />
        <div>
          <input
            className="text-sm md:text-base w-24 md:w-32 md:px-2 md:py-1 appearance-none border rounded-sm placeholder-gray-600 placeholder-opacity-75 focus:outline-none"
            placeholder="Search Movies..."
            onChange={handleSearch}
          ></input>
        </div>
      </div>
    </header>
  );
};

export default connect()(Header);
