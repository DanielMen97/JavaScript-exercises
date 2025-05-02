import styles from "./styles.module.scss";
import "../../index.css";
import useTheme from "../../hooks/useTheme";

const Header = () => {
  const { toogleTheme } = useTheme();

  return (
    <header className={`${styles.header} center-between`}>
      <h2 className={styles.header__title}>Where in the World?</h2>
      <div className={`${styles.header__darkmode} center`} onClick={toogleTheme}>
        <i className={`${styles.darkmode__icon} fa-solid fa-moon`} />
        <span className={styles.darkmode__span}>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
