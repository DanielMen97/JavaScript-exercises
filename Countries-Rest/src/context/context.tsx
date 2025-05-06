import { ReactNode, createContext, useReducer } from "react";
import { getAllCountries, transformCountryInfo } from "../services/Services";
import { ChangeEvent, useEffect, useState } from "react";
import { GlobalContextI, globalContextDefault} from "../models/global";
import { globalReducer } from "../reducers/globalReducer";
import { GlobalReducerAction, globalStateDefault } from "../models/reducer";
import { RegionsFiltersType } from "../models/filters";
import { countryTransformDefault } from "../models/country";

export const context = createContext<GlobalContextI>({
  ...globalContextDefault,
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(globalReducer, {...globalStateDefault});

  useEffect(() => {

    getAllCountries()
      .then((data) => {
        const formatCountries = transformCountryInfo(data);
        dispatch({
          type: GlobalReducerAction.SaveCountries,
          payload: formatCountries,
        });
      })
      .catch((error) => {
        dispatch({
          type: GlobalReducerAction.SaveError,
          payload: error
        });
      });
  }, []);
 

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: GlobalReducerAction.SaveFilters,
      payload: {...state.filters, search: event.target.value}
    })
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const region = event.target.value as RegionsFiltersType
    dispatch({
      type: GlobalReducerAction.SaveFilters,
      payload: {...state.filters, region}
    })
  };

  const handleClick = (nameCountry: string) => {
    const countrySelect = state.countries.find(
      (country) => country.name === nameCountry
    );
    if (countrySelect) {
      dispatch({
        type: GlobalReducerAction.SaveCountry,
        payload: countrySelect,
      });
    }
  };

  const handleBack = () => dispatch({
    type: GlobalReducerAction.SaveCountry,
    payload: {...countryTransformDefault},
  });

  const value: GlobalContextI = {
    state,
    handleSelectChange,
    handleInputChange,
    handleClick,
    handleBack
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};
