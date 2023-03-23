import styles from "./card.module.css";

const Card = ({ card }) => {
  const str = card.title;
  const maxLength = 38;

  return (
    <>
      <div>
        <div className={styles.item}>
          <img
            className={styles.heart}
            src="/icons/actionIcons/heart.svg"
            alt="heart"
          />
          <img
            className={styles.basket}
            src="/icons/actionIcons/basket.svg"
            alt="basket"
          />
          <img className={styles.image} src={card.image} alt="keyboard" />
          <div>
            <p className={styles.description}>
              {str.length > maxLength
                ? str.substring(0, maxLength - 3) + "..."
                : str}
            </p>
            <p className={styles.description}>{`Артикул ${card.id}`}</p>
            <h3>{`Цена: ${card.price} ₽`}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
