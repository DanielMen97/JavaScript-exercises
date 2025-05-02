import { useCustomContext } from "../../hooks/useContext";
import styles from "./styles.module.scss";
import "../../index.css";

const CountryPage = () => {
  const { country, handleBack } = useCustomContext();

  const { name, flags, descriptions, hasBorders } = country;

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
            {descriptions.map((description) => {
              const gridArea = description[0]
                .split(" ", 1)
                .join()
                .toLowerCase();
              return (
                <p
                  className={styles.descriptions__item}
                  style={{ gridArea }}
                  key={description[0]}
                >
                  <strong>
                    {description[0]}
                    {": "}
                  </strong>
                  {description[1]}
                </p>
              );
            })}
          </section>
          <section className={`${styles.info__borders}`}>
            <p className={styles.borders__label}>
              <strong>Border Countries: </strong>
            </p>
            <div className={styles.borders__container}>
              {hasBorders.map((border) => (
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
