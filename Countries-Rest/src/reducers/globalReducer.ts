import {
  GlobalActionDispatch,
  GlobalReducerAction,
  StateGlobalI,
} from "../models/reducer";

export function globalReducer(
  state: StateGlobalI,
  action: GlobalActionDispatch
): StateGlobalI {
  switch (action.type) {
    case GlobalReducerAction.SaveCountries:
      return {
        ...state,
        countries: action.payload,
      };
    case GlobalReducerAction.SaveCountry:
      return {
        ...state,
        country: action.payload,
      };
    case GlobalReducerAction.SaveFilters:
      return {
        ...state,
        filters: action.payload,
        filterCountries: state.countries.filter((country) => {
          const countryNameLower = country.name.toLowerCase();
          return (
            countryNameLower.includes(action.payload.search.toLowerCase()) &&
            (action.payload.region === "All" ||
              country.descriptions.Region === action.payload.region)
          );
        }),
      };
    case GlobalReducerAction.SaveError:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
