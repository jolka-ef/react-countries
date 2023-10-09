import React from "react";
import { SearchIcon } from "./Icons/SearchIcon.js";

export const SearchInput = (props) => {
  const { query, setQuery } = props;

  return (
    <>
      <label className="Search-label" htmlFor="country-name">
        <SearchIcon className="Search-icon" />
        <span className="Screen-reader-text">Search for a country:</span>
        <input
          autoSave="20"
          className="Search-field"
          id="country-name"
          name="country"
          placeholder="Search for a country:"
          results="10"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <input type="submit" className="Search-submit" value="Search" />
    </>
  );
};
