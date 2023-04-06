import React, { useEffect, useRef } from "react";
import styles from "./filters.module.css";
import Search from "../../../ui/header/search";

function Filters({
  setSortOrder,
  setSelectedCategory,
  selectedCategory,
  onSearch,
  search,
}) {
  const handleSortClick = (event) => {
    const element = event.target;
    const icons = document.querySelectorAll(`.${styles.filter} img`);

    icons.forEach((icon) => icon.classList.remove(styles.active));
    element.classList.add(styles.active);

    const sortOrder = element.classList.contains(styles.desc) ? "desc" : "asc";
    setSortOrder(sortOrder);

    if (element.classList.contains(styles.reset)) {
      setSortOrder(null);
    }
  };

  const selectRef = useRef(null);

  useEffect(() => {
    selectRef.current.value = selectedCategory;
  }, [selectedCategory]);

  return (
    <>
      <section className={styles.catalog} id="catalog">
        <div className={styles.filter} onClick={handleSortClick}>
          <img
            className={styles.reset}
            src="/icons/actionIcons/reset.svg"
            alt="reset"
          />
          <img
            className={styles.desc}
            src="/icons/actionIcons/arrowSort.svg"
            alt="arrowSortDesc"
          />
          <img
            className={styles.asc}
            src="/icons/actionIcons/arrowSort.svg"
            alt="arrowSortAsc"
          />
          <div>Фильтровать по цене</div>
        </div>

        <h2>Каталог</h2>

        <div>
          <select
            ref={selectRef}
            className={styles.select}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Категории</option>
            <option value="keyboard">Клавиатуры</option>
            <option value="keycap">Клавиша</option>
            <option value="keycaps">Клавиши</option>
          </select>
        </div>
      </section>
      {onSearch && <Search onSearch={onSearch} search={search} />}
    </>
  );
}

export default Filters;
