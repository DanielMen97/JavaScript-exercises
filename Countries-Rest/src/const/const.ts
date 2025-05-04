import { ChangeEvent } from "react";

export const TRANSFORM_COUNTRY_DEFAULT = {
  cioc: "",
  name: "",
  flags: { svg: "", png: "", alt: "" },
  descriptions: {
    "Native Name": "",
    Population: "",
    Region: "",
    "Sub Region": "",
    Capital: "",
    "Top Level Domain": "",
    Currencies: "",
    Languages: "",
  },
  borders: [],
};
// TODO: Si son constantes, se nombran en mayusculas

export const CONTEXT_GLOBAL_DEFAULT = {
  handleSelectChange: (event:ChangeEvent<HTMLSelectElement>) => {},
  handleInputChange: (event:ChangeEvent<HTMLInputElement>) => {},
  filterCountries: [],
  handleClick: (nameCountry:string) => {},
  country: {...TRANSFORM_COUNTRY_DEFAULT},
  countries: [{...TRANSFORM_COUNTRY_DEFAULT}],
  handleBack: () => {},
};

export const REGIONS = [
  "All",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
] as const;

export const COUNTRY_DEFAULT = {
  flags: { svg: "", png: "", alt: "" },
  population: 0,
  tld: [],
  name: { common: "", official: "", nativeName: {} },
  region: "",
  subregion: "",
  capital: undefined,
  currencies: {},
  languages: {},
  borders: undefined,
  cioc: "",
};

