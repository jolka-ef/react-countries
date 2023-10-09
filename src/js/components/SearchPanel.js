import React from "react";
import "../../css/components/SearchPanel.css";

import { Filter } from "./Filter.js";
import { SearchInput } from "./SearchInput.js";

export const SearchPanel = (props) => {
  const { onSubmit, query, setFilter, setQuery } = props;

  return (
    <form
      role="search"
      aria-label="Search for a country:"
      className="Search-form"
      onSubmit={onSubmit}
    >
      <SearchInput query={query} setQuery={setQuery} />
      <Filter name="filterRegions" setFilter={setFilter} />
    </form>
  );
};
