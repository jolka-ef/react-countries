import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDataAPI } from "../logic/fetchData.js";

import { Button } from "./Button.js";
import { CountryView } from "./CountryView.js";
import { Error } from "./Error.js";
import { Header } from "./Header.js";
import { LeftArrowIcon } from "./Icons/LeftArrowIcon.js";
import { Loader } from "./Loader.js";

export const Country = () => {
  const navigate = useNavigate();

  const { countryCode } = useParams();
  let [{ data, isLoading, isError }, doFetch] = useDataAPI("");

  useEffect(() => {
    doFetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}/?fields=borders,flags,name,population,capital,languages,region,subregion,currencies,tld`
    );
  }, [countryCode, doFetch]);

  return (
    <>
      {isLoading && <Loader />}

      {isError && <Error message={isError} />}

      {data && (
        <div className="Site-content">
          <header className="Site-header">
            <Header />
          </header>
          <Button
            className="Country-button"
            name="Back"
            icon={<LeftArrowIcon />}
            onClick={() => navigate("/")}
          />
          <main className="Site-content">
            {isError && <Error message={isError} />}
            {data ? <CountryView data={data} /> : null}
          </main>
        </div>
      )}
    </>
  );
};
