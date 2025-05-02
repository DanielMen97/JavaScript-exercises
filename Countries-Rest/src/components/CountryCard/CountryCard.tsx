import styles from "./styles.module.scss";
import '../../index.css'
import { countryI } from "../../types";
import { useCustomContext } from "../../hooks/useContext";

const CountryCard: React.FC<countryI> = ({flags,name,population,region,capital}) => {

  const { handleClick } = useCustomContext()

  return (
    <article className={styles.list__countryCard} onClick={() => handleClick(name)}>
      <img
        className={styles.countryCard__flat}
        src={flags}
        alt="Country Flag"
      />
      <div className={`${styles.countryCard__info} center-start`}>
        <h3 className={styles.info__name}>{name}</h3>
        <p className={styles.info__description}>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p className={styles.info__description}>
          <strong>Region:</strong> {region}
        </p>
        <p className={styles.info__description}>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </article>
  );
};

export default CountryCard;
