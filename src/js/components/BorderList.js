import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button.js";
import { GetCountryNameByCode } from "../utils/getCountryNameByCode.js";

export const BorderList = ({ bordersCodes }) => {
  const navigate = useNavigate();

  return (
    <>
      {bordersCodes?.length ? (
        <div className="BordersList">
          <dt>Border Countries:</dt>
          <div>
            {bordersCodes.map((country, index) => (
              <dd key={index}>
                <Button
                  className="BordersList-button"
                  name=<GetCountryNameByCode code={country} />
                  onClick={() => navigate(`/country/${country}`)}
                />
              </dd>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
