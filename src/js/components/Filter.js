import React from "react";
import "../../css/components/Filter.css";

export const Filter = (props) => {
  const { setFilter } = props;
  const filterOptions = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
    "All world",
  ];

  return (
    <label className="Filter-label">
      <select
        className="Filter"
        onChange={(event) => setFilter(event.target.value)}
        defaultValue="filter"
      >
        <option value="filter" disabled hidden>
          Filter by Region
        </option>
        {filterOptions.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </label>
  );
};
