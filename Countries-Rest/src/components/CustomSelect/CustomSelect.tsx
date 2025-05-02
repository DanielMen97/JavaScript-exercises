import styles from "./styles.module.scss";
import { useCustomContext } from "../../hooks/useContext";
import { regions } from "../../const/const";

const CustomSelect = () => {

  const { handleSelectChange } = useCustomContext();

  return (
    <div className={styles.navbar__selectGroup}>
      <select
        className={styles.selectGroup__select}
        onChange={handleSelectChange}
      >
        <option className={styles.select__option} selected hidden>
          Filter by Region
        </option>
        {regions.map((region) => (
          <option key={region} className={styles.select__option} value={region}>
            <span className={styles.option__span}>{region}</span>
          </option>
        ))}
      </select>
      <i className={`${styles.selectGroup__icon} fa-solid fa-chevron-down`} />
    </div>
  );
};

export default CustomSelect;
