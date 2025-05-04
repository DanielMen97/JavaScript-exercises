import { TransformCountry } from "../models/global";
import { CountryOriginI } from "../types";

const URL_REST_COUNTRIES = "https://restcountries.com/v3.1/all";
// TODO: Mejorar la legibilidad de la funcion
// TODO: Que pasa si hay un error en la peticion?
export const getAllCountries = () => {
  return fetch(URL_REST_COUNTRIES, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
};

export function getNamesFromCodes({
  codes,
  countries,
}: {
  codes: string[] | undefined;
  countries: TransformCountry[];
}) {
  if (codes === undefined) return ["N/A"];
  const countriesName = codes
    .map((code) => countries.find((country) => country.cioc === code)?.name)
    .filter((code) => code !== undefined);
  return countriesName.length > 0 ? countriesName : ["N/A"];
}

function getValuesFromObject(values: any): any[] {
  if (values) {
    return Object.values(values);
  }
  return [];
}

export function transformCountryInfo(countries: CountryOriginI[]) {
  // TODO: Mover toda esta logica a nivel de context, pero que se haga la transformacion del country seleccionado en un servicio.
  return countries.map((country) => {
    const {
      flags,
      population,
      tld,
      name,
      region,
      subregion,
      capital,
      currencies,
      languages,
      borders,
      cioc,
    } = country;

    const listNatives = getValuesFromObject(name.nativeName);
    const nativeName = listNatives[listNatives.length - 1]?.common;
    const listCurrencies = getValuesFromObject(currencies)
      .map((currency) => currency.name)
      .join(", ");
    const formatInfo = {
      "Native Name": nativeName,
      Population: population.toLocaleString(),
      Region: region,
      "Sub Region": subregion,
      Capital: capital ? capital[0] : "N/A",
      "Top Level Domain": tld ? tld.join(", ") : "N/A",
      Currencies: listCurrencies,
      Languages: getValuesFromObject(languages).join(", "),
    };

    // TODO: No necesita todo ser un array iterable como un objeto funciona por si solo.
    return {
      cioc,
      name: name.common,
      flags,
      descriptions: formatInfo,
      borders: borders ? borders : ["N/A"],
    };
  });
}
