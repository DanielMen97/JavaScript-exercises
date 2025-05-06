import { useCustomContext } from "../../hooks/useContext";
import styles from "./styles.module.scss";
import "../../index.css";
import { getNamesFromCodes } from "../../services/Services";

const CountryPage = () => {
  const { state, handleBack } = useCustomContext();

  const { name, flags, descriptions, borders } = state.country;
  const bordersNames = getNamesFromCodes(borders, state.countries)

  return (
    <>
      <nav className={styles.country__navbar}>
        <button className={`${styles.navbar__button}`} onClick={handleBack}>
          <i className={`${styles.button__icon} fa-solid fa-arrow-left-long`} />{" "}
          Back
        </button>
      </nav>
      <article className={`${styles.country__article}`}>
        <img className={styles.article__flag} src={flags.svg} alt={flags.alt} />
        <aside className={styles.article__info}>
          <h1 className={styles.info__name}>{name}</h1>
          <section className={styles.info__descriptions}>
            {Object.entries(descriptions).map(([key, value]) => {
              const gridArea = key.split(" ", 1).join().toLowerCase();
              return (
                <p
                  className={styles.descriptions__item}
                  style={{ gridArea }}
                  key={key}
                >
                  <strong>
                    {key}
                    {": "}
                  </strong>
                  {value}
                </p>
              );
            })}
          </section>
          <section className={`${styles.info__borders}`}>
            <p className={styles.borders__label}>
              <strong>Border Countries: </strong>
            </p>
            <div className={styles.borders__container}>
              {bordersNames.map((border) => (
                <span className={styles.container__item} key={border}>
                  {border}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </article>
    </>
  );
};

export default CountryPage;
