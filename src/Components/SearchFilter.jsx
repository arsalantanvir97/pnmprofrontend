import React from "react";

const SearchFilter = ({ setSearchString, searchString, setPage, handler }) => {
  return (
    <input
      type="search"
      placeholder="Search"
      className="p-1 dash-input srch-int"
      name
      id
      value={searchString}
      onChange={(e) => {
        setSearchString(e.target.value);
        setPage(1);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handler();
        }
      }}
    />
  );
};

export default SearchFilter;
