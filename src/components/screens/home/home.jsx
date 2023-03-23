import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card/card";
import styles from "../home/home.module.css";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/cards");
      setCards(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.catalog}>
        <div className={styles.filter}>
          <img
            className={styles.desc}
            src="/icons/actionIcons/arrowSortDesc.svg"
            alt="arrowSortDesc"
          />
          <img
            className={styles.asc}
            src="/icons/actionIcons/arrowSortAsc.svg"
            alt="arrowSortAsc"
          />
          <div>Фильтровать по цене</div>
        </div>
        <h2>Каталог</h2>
        <div>Категории</div>
      </div>

      <div className={styles.container}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default Home;
