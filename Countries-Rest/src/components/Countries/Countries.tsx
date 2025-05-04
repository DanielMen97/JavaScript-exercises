import styles from "./styles.module.scss";
import "../../index.css";
import CustomSelect from "../CustomSelect/CustomSelect";
import CountryCard from "../CountryCard/CountryCard";
import { useCustomContext } from "../../hooks/useContext";
import { CustomInput } from "../CustomInput/CustomInput";

const Countries = () => {
  const { filterCountries } = useCustomContext();

  return (
    <main className={styles.countries}>
      <nav className={`${styles.countries__navbar} center-between`}>
        <CustomInput />
        <CustomSelect />
      </nav>
      <section className={styles.countries__list}>
        {filterCountries.map((country) => {
          const { name, flags, descriptions } = country;
          // TODO: Este hasCapital se repite en el useCustomContext, no hacer codigo repetido.
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
