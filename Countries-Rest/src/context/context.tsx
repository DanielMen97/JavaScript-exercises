import { ReactNode, createContext } from "react";
import { getAllCountries } from "../services/Services";
import { ChangeEvent, useEffect, useState } from "react";
import { ContextGlobalI, CountryOriginI } from "../types";
import { countryDefault } from "../const/const";

type CountriesType = CountryOriginI[];

// Create a context with a default value
export const context = createContext<ContextGlobalI>({} as ContextGlobalI);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState<CountriesType>([]);
  const [country, setCountry] = useState<CountryOriginI>({ ...countryDefault });
  const [filters, setFilters] = useState({
    region: "all",
    search: "",
  });

  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const filterCountries = countries.filter((country) => {
    const countryNameLower = country.name.common.toLowerCase();
    return (
      countryNameLower.includes(filters.search.toLowerCase()) &&
      (filters.region === "all" || country.region === filters.region)
    );
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFilters({ ...filters, search: event.target.value });

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setFilters({ ...filters, region: event.target.value });

  const handleClick = (nameCountry: string) => {
    const countrySelect = countries.find(
      (country) => country.name.common === nameCountry
    );
    if (countrySelect) {
      setCountry(countrySelect);
    }
  };

  const handleBack = () => setCountry({ ...countryDefault });

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
