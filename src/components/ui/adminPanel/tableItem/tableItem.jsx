import React, { useEffect, useState } from "react";
import styles from "./tableItem.module.css";
import useModal from "../../../utils/hooks/useModal";
import Modal from "../../modal";

const TableItem = ({
  card,
  slides,
  onDeleteCard,
  onDeleteCardSlides,
  onUpdateCard,
  onUpdateCardSlides,
}) => {
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
  // ______________________________________________________________________________
  const { modalVariety, handleModalOpen, handleModalClose, modalOpen } =
    useModal();

  const editData = {
    cardId: card.id,
    updateCard: onUpdateCard,
    onClose: handleModalClose,
    updateCardSlides: onUpdateCardSlides,
    slides: slides,
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.itemsTable}>
          <div className={styles.itemId}>{card.id}</div>
          <div className={styles.items}>
            <div className={styles.item}>{card.title}</div>
            <div className={styles.item}>{card.category}</div>
            <div className={styles.item}>{card.price}</div>
            <div className={styles.item}>{card.image}</div>
            <div className={styles.item}>{card.description}</div>
            <button onClick={() => handleModalOpen("editCard")}>
              <img
                src="/icons/actionIcons/edit.svg"
                alt="edit"
                className={styles.edit}
              />
            </button>
            <button
              onClick={() => {
                onDeleteCard(card.id), onDeleteCardSlides(card.id, slidesIds);
              }}
            >
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
          <button onClick={() => handleModalOpen("editSlides")}>
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
      {modalOpen && (
        <Modal
          variety={modalVariety}
          isOpen={modalOpen}
          onClose={handleModalClose}
          editData={editData}
        />
      )}
    </>
  );
};

export default TableItem;
