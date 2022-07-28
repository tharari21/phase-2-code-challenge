import React from "react";

function SearchBar({searchText, onChange}) {
  
  return (
    <div className="search">
      <input type="text" className="searchTerm" value={searchText} onChange={onChange} />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
