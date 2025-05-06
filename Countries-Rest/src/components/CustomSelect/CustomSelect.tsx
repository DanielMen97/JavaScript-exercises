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
        {regions.map((region) => (
          <option key={region[0]} className={styles.select__option} value={region[0]}>
            {region[0]}
          </option>
        ))}
      </select>
      <i className={`${styles.selectGroup__icon} fa-solid fa-chevron-down`} />
    </div>
  );
};

export default CustomSelect;
