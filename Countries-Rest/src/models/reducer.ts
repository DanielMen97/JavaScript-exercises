import { CountryTransformI, countryTransformDefault } from "./country";
import { FiltersI, filtersDefault } from "./filters";

export enum GlobalReducerAction {
  SaveCountries,
  SaveCountry,
  SaveFilters,
  SaveError,
}

export interface StateGlobalI {
  countries: CountryTransformI[];
  country: CountryTransformI;
  filters: FiltersI;
  filterCountries: CountryTransformI[];
  error: null
}

export type GlobalActionDispatch =
  | UpdateContriesActionI
  | UpdateCountryActionI
  | UpdateFiltersActionI
  | UpdateErrorActionI

interface UpdateContriesActionI {
  type: GlobalReducerAction.SaveCountries;
  payload: CountryTransformI[];
}

interface UpdateCountryActionI {
  type: GlobalReducerAction.SaveCountry;
  payload: CountryTransformI;
}

interface UpdateFiltersActionI {
  type: GlobalReducerAction.SaveFilters;
  payload: FiltersI;
}

interface UpdateErrorActionI {
  type: GlobalReducerAction.SaveError;
  payload: null;
}

export const globalStateDefault: StateGlobalI = {
  countries: [],
  country: { ...countryTransformDefault },
  filters: filtersDefault,
  filterCountries: [],
  error: null
};
