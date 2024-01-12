import { FormEvent } from "react";
import { useProductContext } from "../../../context/productContext";
import styles from "./FilterPanel.module.scss";

export default function FilterPanel(): JSX.Element {
  const { search, setSearch, numResults, setNumResults, filter, setFilter } =
    useProductContext();

  function handleFilterSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <form className={styles.filterForm} onSubmit={handleFilterSubmit}>
      <input
        type="text"
        placeholder="Search for products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles.selectWrapper}>
        <span>Filter by price</span>
        <select
          className={styles.select}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="none">None</option>
          <option value="low-high">Low-High</option>
          <option value="high-low">High-low</option>
        </select>
      </div>

      <div className={styles.selectWrapper}>
        <span>Result number:</span>
        <input
          type="number"
          onChange={(e) => {
            if (+e.target.value <= 0) return setNumResults(1);
            setNumResults(+e.target.value);
          }}
          value={numResults}
        />
      </div>
    </form>
  );
}
