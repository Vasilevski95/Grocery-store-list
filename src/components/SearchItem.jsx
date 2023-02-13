import React from "react";
import "./SearchItem.css";

const SearchItem = ({ search, setSearch, handleSearch }) => {
  return (
    <form className="searchForm" onSubmit={handleSearch}>
      <label>Search</label>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchItem;
