import React from "react";
import { Link } from "react-router-dom";

import "../../css/components/CountryList.css";

export const CountryList = (props) => {
  let { data } = props;

  return (
    <ul className="CountriesList">
      {data
        .sort((el, nextEl) => el.name.common.localeCompare(nextEl.name.common))
        .map((el, index) => (
          <li className="CountriesList-item" key={el.cca3}>
            <Link className="CountryPreview" to={`/country/${el.cca3}`}>
              <header>
                <figure className="CountryPreview-flagCointaner">
                  <img
                    src={el.flags[0]}
                    alt={`Flag of ${el.name.common}`}
                    className="CountryPreview-flag"
                  />
                </figure>
                <h2 className="CountryPreview-name">{el.name.common}</h2>
              </header>

              <dl className="CountryPreview-details">
                <dt>Population:</dt>
                <dd>{el.population}</dd>

                <dt>Region:</dt>
                <dd>{el.region}</dd>

                <dt>Capital:</dt>
                <dd>{el.capital[0]}</dd>
              </dl>
            </Link>
          </li>
        ))}
    </ul>
  );
};
