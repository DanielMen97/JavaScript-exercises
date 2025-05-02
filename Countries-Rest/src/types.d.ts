interface NameI {
  common: string; // Common name of the country
  official: string; // Official name of the country
  nativeName: NativeNameI
}

interface NativeNameI {
  [key: string]: NativeI;
}

interface NativeI {
  official: string;
  common: string
}

interface FlagsI {
  png: string; // URL to the PNG image of the flag
  svg: string; // URL to the SVG image of the flag
  alt: string;
}

interface CurrenciesI {
  [key: string]: CodeCurrencyI;
}

interface CodeCurrencyI {
  symbol: string;
  name: string;
}

interface FormatCurrenciesI {
  code: string,
  name: string
}

interface LanguagesI {
  [key: string]: string
}

export interface countryI {
  flags: string; // Object of URLs to the flag image
  name: string; // Object of Names of the country
  population: number; // Population of the country
  region: string; // Region of the country
  capital: string | undefined; // Capital city of the country
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

export interface CountryDetailsI {
  name: string;
  flags: FlagsI;
  population: number;
  region: string;
  subregion: string;
  nativeName: string;
  capital: string;
  currencies: string[];
  languages: string[];
  borders: string[];
  tld: string[];
  cioc: string;
}

export interface ContextGlobalI {
  handleSelectChange : (event: ChangeEvent<HTMLSelectElement>) => void,
  handleInputChange : (event: ChangeEvent<HTMLInputElement>) => void,
  filterCountries : CountryOriginI[],
  handleClick : (string) => void,
  country: CountryOriginI,
  countries: CountryOriginI[],
  handleBack: () => void
}

