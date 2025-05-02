export const ContextGlobalDefault = {
  handleSelectChange: () => {},
  handleInputChange: () => {},
  filterCountries: [],
};

export const regions = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
] as const;

export const countryDefault = {
  flags: {svg: '', png: '', alt:''},
  population: 0,
  tld: [],
  name: {common:'',official:'', nativeName:{}},
  region: '',
  subregion: '',
  capital: undefined,
  currencies: {},
  languages: {},
  borders: undefined,
  cioc: ''
}