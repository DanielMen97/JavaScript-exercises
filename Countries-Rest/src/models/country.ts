interface NativeI {
  official: string;
  common: string;
}

interface NativeNameI {
  [key: string]: NativeI;
}

interface NameI {
  common: string;
  official: string;
  nativeName: NativeNameI;
}

interface CodeCurrencyI {
  symbol: string;
  name: string;
}

interface CurrenciesI {
  [key: string]: CodeCurrencyI;
}

interface LanguagesI {
  [key: string]: string;
}

interface FlagsI {
  png: string;
  svg: string;
  alt: string;
}

export interface CountryOriginI {
  name: NameI;
  flags: FlagsI;
  population: number;
  region: string;
  subregion: string;
  capital: string[] | undefined;
  tld: string[];
  cioc: string;
  currencies: CurrenciesI;
  languages: LanguagesI;
  borders: string[] | undefined;
}

interface DescriptionI {
  "Native Name": string;
  Population: string;
  Region: string;
  "Sub Region": string;
  Capital: string;
  "Top Level Domain": string;
  Currencies: string;
  Languages: string;
}

export interface CountryTransformI {
  cioc: string;
  name: string;
  flags: FlagsI;
  descriptions: DescriptionI;
  borders: string[];
}

export interface CountryInfoCard {
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

export const flagsDefault: FlagsI = { 
  svg: "", 
  png: "", 
  alt: "" 
};

export const descriptionsDefault: DescriptionI = {
  "Native Name": "",
  Population: "",
  Region: "",
  "Sub Region": "",
  Capital: "",
  "Top Level Domain": "",
  Currencies: "",
  Languages: "",
};

export const countryTransformDefault: CountryTransformI = {
  cioc: "",
  name: "",
  flags: { ...flagsDefault },
  descriptions: { ...descriptionsDefault },
  borders: [],
};
