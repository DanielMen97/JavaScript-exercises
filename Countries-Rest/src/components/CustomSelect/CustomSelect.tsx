import styles from "./styles.module.scss";
import { useCustomContext } from "../../hooks/useContext";
import { REGIONS } from "../../const/const";

const CustomSelect = () => {

  const { handleSelectChange } = useCustomContext();

  return (
    <div className={styles.navbar__selectGroup}>
      <select
        className={styles.selectGroup__select}
        defaultValue={'All'}
        onChange={handleSelectChange}
      >
        <option className={styles.select__option} value={'All'} hidden>
          Filter by Region
        </option>
        {REGIONS.map((region) => (
          <option key={region} className={styles.select__option} value={region}>
            {region}
          </option>
        ))}
      </select>
      <i className={`${styles.selectGroup__icon} fa-solid fa-chevron-down`} />
    </div>
  );
};

export default CustomSelect;
