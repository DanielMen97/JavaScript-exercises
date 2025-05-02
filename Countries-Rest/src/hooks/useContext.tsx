import { useContext } from "react";
import { context } from "../context/context";

// Custom hook to use the context
export const useCustomContext = () => {
  const data = useContext(context);

  // TODO: Mover toda esta logica a nivel de context, pero que se haga la transformacion del country seleccionado en un servicio.

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
  } = data.country;

  function getListName(borders: string[] | undefined) {
    if (borders === undefined) return ["N/A"];
    const bordersName = borders
      .map((border) => {
        return data.countries.find((country) => country.cioc === border)?.name.common;
      })
      .filter((border) => border !== undefined);
    return bordersName.length > 0 ? bordersName : ["N/A"];
  }
  const hasCapital = capital ? capital[0] : "N/A";
  const populationString = population.toLocaleString();
  const listNativeNames = Object.values(name.nativeName);
  const nativeName = listNativeNames[listNativeNames.length - 1]?.common;
  const listCurrencies = Object.values(currencies).map(
    (currency) => currency.name
  );
  const listLanguages = Object.values(languages);
  const hasBorders = getListName(borders);
  const formatInfo = {
    "Native Name": nativeName,
    Population: populationString,
    Region: region,
    "Sub Region": subregion,
    Capital: hasCapital,
    "Top Level Domain": tld.join(", "),
    Currencies: listCurrencies.join(", "),
    Languages: listLanguages.join(", "),
  };

  // TODO: No necesita todo ser un array iterable como un objeto funciona por si solo.
  const formatInfoToArray = Object.entries(formatInfo);
  const countryName = name.common;

  return {
    ...data,
    country: {
      cioc,
      name: countryName,
      flags,
      descriptions: formatInfoToArray,
      hasBorders,
    },
  };
};
