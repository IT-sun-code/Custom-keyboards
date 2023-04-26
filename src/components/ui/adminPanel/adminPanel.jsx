import React from "react";
import styles from "./adminPanel.module.css";
import { useCards } from "../../utils/hooks/useCards";
import TableItem from "./tableItem";
import CreateCardPanel from "./createCardPanel";
import CreateSlidesPanel from "./createSlidesPanel";
import { useSlidesCards } from "../../utils/hooks/useSlidesCards";

const AdminPanel = () => {
  const { cards, createCard } = useCards();
  const { slides, createSlidesCard } = useSlidesCards();

  return (
    <>
      <section>
        <h2 className={styles.orderHeading}>Ассортимент магазина</h2>
        <CreateCardPanel createCard={createCard} />
        <CreateSlidesPanel createSlidesCard={createSlidesCard} />
      </section>
      {cards.map((card) => (
        <TableItem card={card} key={card.id} slides={slides} />
      ))}
    </>
  );
};

export default AdminPanel;
