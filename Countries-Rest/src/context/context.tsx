import { ReactNode, createContext } from "react";
import { getAllCountries, transformCountryInfo } from "../services/Services";
import { ChangeEvent, useEffect, useState } from "react";
import { ContextGlobalI } from "../types";
import { TransformCountry } from "../models/global";
import { CONTEXT_GLOBAL_DEFAULT, TRANSFORM_COUNTRY_DEFAULT } from "../const/const";

// Create a context with a default value
export const context = createContext<ContextGlobalI>({
  ...CONTEXT_GLOBAL_DEFAULT,
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState<TransformCountry[]>([{...TRANSFORM_COUNTRY_DEFAULT}]);
  const [country, setCountry] = useState<TransformCountry>({
    ...TRANSFORM_COUNTRY_DEFAULT,
  });
  const [filters, setFilters] = useState({
    region: "All",
    search: "",
  });

  useEffect(() => {
    // TODO: Que pasa si hay un error en la peticion?
    getAllCountries()
      .then((data) => {
        const formatCountries = transformCountryInfo(data);
        setCountries(formatCountries);
      })
      .catch((error) => console.log(error));
  }, []);

  // TODO: Esto no va
  const filterCountries = countries.filter((country) => {
    const countryNameLower = country.name.toLowerCase();
    return (
      countryNameLower.includes(filters.search.toLowerCase()) &&
      (filters.region === "All" ||
        country.descriptions.Region === filters.region)
    );
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFilters({ ...filters, search: event.target.value });

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setFilters({ ...filters, region: event.target.value });

  // TODO: Cuando haga click y se seleccione el pais hacer toda la logica que esta en el useCustomContext hook.
  const handleClick = (nameCountry: string) => {
    const countrySelect = countries.find(
      (country) => country.name === nameCountry
    );
    if (countrySelect) {
      setCountry(countrySelect);
    }
  };

  const handleBack = () => setCountry({...TRANSFORM_COUNTRY_DEFAULT});

  const value = {
    handleSelectChange,
    handleInputChange,
    filterCountries,
    handleClick,
    country,
    countries,
    handleBack,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};
