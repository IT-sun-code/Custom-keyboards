import React from "react";
import styles from "./tableItem.module.css";

const TableItem = ({ card }) => {
  return (
    <section className={styles.section}>
      <div className={styles.itemsTable}>
        <div className={styles.itemId}>{card.id}</div>
        <div className={styles.items}>
          <div className={styles.item}>{card.title}</div>
          <div className={styles.item}>{card.category}</div>
          <div className={styles.item}>{card.price}</div>
          <div className={styles.item}>{card.image}</div>
          <div className={styles.item}>{card.description}</div>
        </div>
      </div>
      <div className={styles.cardSlidesInTable}></div>
    </section>
  );
};

export default TableItem;
