import { useDataAPI } from "../logic/fetchData.js";

export const GetCountryNameByCode = ({ code }) => {
  const [{ data: codes }] = useDataAPI(
    "https://restcountries.com/v3/all?fields=cca3,name"
  );

  return codes && codes.find((country) => country.cca3 === code).name.common;
};
