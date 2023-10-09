import React, { useEffect, useState } from "react";
import "../../css/components/App.css";

import { useDataAPI } from "../logic/fetchData.js";

import { CountryList } from "./CountryList.js";
import { Error } from "./Error.js";
import { Header } from "./Header.js";
import { Loader } from "./Loader.js";
import { SearchPanel } from "./SearchPanel.js";

export const App = () => {
  let [{ data, isLoading, isError }] = useDataAPI(
    "https://restcountries.com/v3/all?fields=name,capital,flags,region,population,cca3"
  );
  const [currentItems, setCurrentItems] = useState(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    if (filter) {
      filter === "All world"
        ? setCurrentItems(data)
        : setCurrentItems([...data].filter((el) => el.region.includes(filter)));
    } else {
      setCurrentItems(data);
    }
  }, [data, filter]);

  const onSubmit = (event) => {
    event.preventDefault();
    searchByCountryName(query.toLowerCase());
  };

  const searchByCountryName = (query) => {
    setCurrentItems(
      [...data].filter((el) => el.name.common.toLowerCase().includes(query))
    );
  };

  return (
    <div className="Site-content">
      <header className="Site-header">
        <Header />
        <SearchPanel
          onSubmit={onSubmit}
          query={query}
          setFilter={setFilter}
          setQuery={setQuery}
        />
      </header>

      <main>
        {isError && <Error message={isError} />}
        {isLoading && <Loader />}
        {!isLoading && !isError && currentItems && (
          <CountryList data={currentItems} />
        )}
      </main>
    </div>
  );
};
