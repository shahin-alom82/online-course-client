

import React from "react";
import { MdOutlineClose, MdSearch } from "react-icons/md";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
      return (
            <div className="relative">
                  <input
                        type="text"
                        placeholder="Search by title..."
                        className="w-full pl-10 pr-8 py-2 mt-6 border border-gray-300 rounded-full outline-none text-gray-600 placeholder:text-gray-600"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <MdSearch className="absolute left-3 top-9 text-gray-600" size={20} />

                  {searchTerm && (
                        <MdOutlineClose
                              className="absolute right-4 top-9 text-gray-600 hover:text-red-500 cursor-pointer duration-300"
                              size={20}
                              onClick={() => setSearchTerm("")}
                        />
                  )}
            </div>
      );
};

export default SearchInput;
