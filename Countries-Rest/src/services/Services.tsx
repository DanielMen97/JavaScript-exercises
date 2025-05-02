import { CountryOriginI } from "../types";

// TODO: Mejorar la legibilidad de la funcion
// TODO: Que pasa si hay un error en la peticion?
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