import "../../css/components/CountryView.css";
import { BorderList } from "./BorderList.js";

export const CountryView = ({ data }) => {
  let {
    flags: { svg },
    name: { common: name, nativeName },
    population,
    region,
    subregion,
    capital: [capital],
    tld: [domain],
    currencies,
    languages,
    borders,
  } = data;

  const [{ name: currency }] = Object.values(currencies);
  const [{ official: officialName }] = Object.values(nativeName);
  languages = Object.values(languages);
  population = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <article className="Country">
      <figure className="Country-flagCointaner">
        <img src={svg} alt={`Flag of ${name}`} className="Country-flag" />
      </figure>

      <div>
        <h2 className="Country-name">{name}</h2>

        <dl>
          <div className="DetailsList">
            <div>
              <div className="DetailsList-item">
                <dt>Native Name:</dt>
                <dd>{officialName}</dd>
              </div>

              <div className="DetailsList-item">
                <dt>Population:</dt>
                <dd>{population}</dd>
              </div>

              <div className="DetailsList-item">
                <dt>Region:</dt>
                <dd>{region}</dd>
              </div>

              <div className="DetailsList-item">
                <dt>Sub Region:</dt>
                <dd>{subregion}</dd>
              </div>

              <div className="DetailsList-item">
                <dt>Capital:</dt>
                <dd>{capital}</dd>
              </div>
            </div>

            <div>
              <div className="DetailsList-item">
                <dt>Top Level Domain:</dt>
                <dd>{domain}</dd>
              </div>

              <div className="DetailsList-item">
                <dt>Currencies:</dt>
                <dd>{currency}</dd>
              </div>

              <div className="DetailsList-item">
                <dt>Languages:</dt>
                {languages.map((l) => (
                  <dd key={l}>{l}</dd>
                ))}
              </div>
            </div>
          </div>
          {borders && <BorderList bordersCodes={borders} />}
        </dl>
      </div>
    </article>
  );
};
