import React, { useEffect, useState } from "react";
import styles from "./tableItem.module.css";

const TableItem = ({ card, slides, onDeleteCard, onDeleteCardSlides }) => {
  console.log(card);
  console.log(slides);
  const getSlideIdsByCardId = (slides) => {
    const slideIds = slides.map((slide) => slide.id);
    return slideIds;
  };
  const slidesIds = getSlideIdsByCardId(slides);
  console.log(slidesIds);

  useEffect(() => {
    const matchingSlides = slides.map((slide) => JSON.stringify(slide));
    setMatchingSlides(matchingSlides.join(", "));
  }, [slides]);

  const [matchingSlides, setMatchingSlides] = useState("");

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
          <button>
            <img
              src="/icons/actionIcons/edit.svg"
              alt="edit"
              className={styles.edit}
            />
          </button>
          <button onClick={() => onDeleteCard(card.id)}>
            <img
              src="/icons/actionIcons/delete.svg"
              alt="delete"
              className={styles.delete}
            />
          </button>
        </div>
      </div>
      <div className={styles.itemsTable}>
        <div className={styles.cardSlidesInTable}>{matchingSlides}</div>
        <button>
          <img
            src="/icons/actionIcons/edit.svg"
            alt="edit"
            className={styles.edit}
          />
        </button>
        <button onClick={() => onDeleteCardSlides(card.id, slidesIds)}>
          <img
            src="/icons/actionIcons/delete.svg"
            alt="delete"
            className={styles.delete}
          />
        </button>
      </div>
    </section>
  );
};

export default TableItem;
