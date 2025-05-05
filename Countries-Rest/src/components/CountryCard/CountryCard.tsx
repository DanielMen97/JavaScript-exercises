import styles from "./styles.module.scss";
import '../../index.css'
import { CountryInfoCard } from "../../types";
import { useCustomContext } from "../../hooks/useContext";
import image from '../../assets/flag.png'

const CountryCard: React.FC<CountryInfoCard> = ({flag,name,population,region,capital}) => {

  const { handleClick } = useCustomContext()
  const hasFlag = flag ? flag : image

  return (
    <article className={styles.list__countryCard} onClick={() => handleClick(name)}>
      <img
        className={styles.countryCard__flat}
        src={hasFlag}
        alt="Country Flag"
      />
      <div className={`${styles.countryCard__info} center-start`}>
        <h3 className={styles.info__name}>{name}</h3>
        <p className={styles.info__description}>
          <strong>Population:</strong> {population}
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
