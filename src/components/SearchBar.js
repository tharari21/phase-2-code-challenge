import React from "react";

function SearchBar({ searchText, setSearchText, setSortByAge }) {
  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
      <label>Sort By Age?</label>
      <input type="checkbox" onChange={() => setSortByAge((prev) => !prev)} />
    </div>
  );
}

export default SearchBar;
