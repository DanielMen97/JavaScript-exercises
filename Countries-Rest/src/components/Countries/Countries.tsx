import styles from "./styles.module.scss";
import "../../index.css";
import CustomSelect from "../CustomSelect/CustomSelect";
import CountryCard from "../CountryCard/CountryCard";
import { useCustomContext } from "../../hooks/useContext";
import { CustomInput } from "../CustomInput/CustomInput";

const Countries = () => {
  const { state } = useCustomContext();

  const countriesToMap = state.filterCountries.length > 0 ? state.filterCountries : state.countries

  return (
    <main className={styles.countries}>
      <nav className={`${styles.countries__navbar} center-between`}>
        <CustomInput />
        <CustomSelect />
      </nav>
      <section className={styles.countries__list}>
        {countriesToMap.map((country) => {
          const { name, flags, descriptions } = country;
          return (
            <CountryCard
              key={name}
              flag={flags.png}
              name={name}
              population={descriptions.Population}
              region={descriptions.Region}
              capital={descriptions.Capital}
            />
          );
        })}
      </section>
    </main>
  );
};
export default Countries;
