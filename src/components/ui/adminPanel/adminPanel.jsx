import React from "react";
import styles from "./adminPanel.module.css";
import { useCards } from "../../utils/hooks/useCards";
import TableItem from "./tableItem";
import CreateCardPanel from "./createCardPanel";
import CreateSlidesPanel from "./createSlidesPanel";

const AdminPanel = () => {
  const { cards, createCard } = useCards();
  return (
    <>
      <section>
        <h2 className={styles.orderHeading}>Ассортимент магазина</h2>
        <CreateCardPanel createCard={createCard} />
        <CreateSlidesPanel createCard={createCard} />
      </section>
      {cards.map((card) => (
        <TableItem card={card} key={card.id} />
      ))}
    </>
  );
};

export default AdminPanel;
