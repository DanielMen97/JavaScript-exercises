import { FlagsI } from "../types";

interface DescriptionI {
  "Native Name": string,
  Population: string,
  Region: string,
  "Sub Region": string,
  Capital: string,
  "Top Level Domain": string,
  Currencies: string,
  Languages: string,
}

export interface TransformCountry {
  cioc: string;
  name: string;
  flags: FlagsI;
  descriptions: DescriptionI;
  borders: string[];
}
