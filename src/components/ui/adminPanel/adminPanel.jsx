import React from "react";
import styles from "./adminPanel.module.css";
import { useCards } from "../../utils/hooks/useCards";
import TableItem from "./tableItem";
import CreateCardPanel from "./createCardPanel";
import CreateSlidesPanel from "./createSlidesPanel";
import { useSlidesCards } from "../../utils/hooks/useSlidesCards";

const AdminPanel = () => {
  const { cards, createCard, deleteCard } = useCards();
  const { slides, createSlidesCard, deleteCardSlides } = useSlidesCards();

  return (
    <>
      <section>
        <h2 className={styles.orderHeading}>Ассортимент магазина</h2>
        <CreateCardPanel createCard={createCard} />
        <CreateSlidesPanel createSlidesCard={createSlidesCard} />
      </section>
      {cards.map((card) => {
        const matchingSlides = slides.filter(
          (slide) => slide.cardId === card.id
        );
        return (
          <TableItem
            card={card}
            key={card.id}
            slides={matchingSlides}
            onDeleteCard={deleteCard}
            onDeleteCardSlides={deleteCardSlides}
          />
        );
      })}
    </>
  );
};

export default AdminPanel;
