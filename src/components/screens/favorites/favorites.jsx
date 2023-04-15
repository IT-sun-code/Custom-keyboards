import React from "react";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Card from "../home/card";
import styles from "./favorites.module.css";
import { useFavorites } from "../../utils/hooks/useFavorites";

const Favorites = () => {
  const { favoriteCards } = useFavorites();

  return (
    <>
      <Heading>
        <FirstHeading>ИЗБРАННОЕ</FirstHeading>
        {favoriteCards.length === 0 && (
          <SecondHeading>Здесь пока пусто</SecondHeading>
        )}
      </Heading>
      <section className={styles.container}>
        {favoriteCards &&
          favoriteCards.map((favorite) => (
            <Card card={favorite} key={favorite.id} />
          ))}
      </section>
    </>
  );
};

export default Favorites;
