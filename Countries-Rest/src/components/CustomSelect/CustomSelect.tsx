import styles from "./styles.module.scss";
import { useCustomContext } from "../../hooks/useContext";
import { RegionsFiltersType } from "../../models/filters";

const CustomSelect = () => {

  const { handleSelectChange } = useCustomContext();

  const regions = Object.entries(RegionsFiltersType)

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
        {regions.map(([key, value]) => (
          <option key={key} className={styles.select__option} value={value}>
            {value}
          </option>
        ))}
      </select>
      <i className={`${styles.selectGroup__icon} fa-solid fa-chevron-down`} />
    </div>
  );
};

export default CustomSelect;
