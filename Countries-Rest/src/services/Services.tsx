import { CountryOriginI } from "../types";

export const getAllCountries = () => {
  return fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      return data.map((country: CountryOriginI) => {
        const {
          name,
          flags,
          population,
          region,
          subregion,
          capital,
          tld,
          currencies,
          languages,
          borders,
          cioc
        } = country;
        return {
          name,
          flags,
          population,
          region,
          subregion,
          capital,
          tld,
          currencies,
          languages,
          borders,
          cioc
        };
      });
    });
};