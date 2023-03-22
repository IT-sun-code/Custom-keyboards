import styles from "./home.module.css";

const Home = () => {
  const love = 1;
  return (
    <>
      <div>
        <h1>Каталог</h1>
        <h2>Каталог</h2>
        <h3>Каталог</h3>
        <p>Каталог</p>
      </div>

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
          <img
            className={styles.image}
            src="/images/keyboards/keyboardsPreview/keyboard1.jpg"
            alt="keyboard"
          />
          <div>
            <p className={styles.description}>{`${love}`}</p>
            <p className={styles.description}>{`Артикул: ${love}`}</p>
            <h3>{`Цена: ${love} ₽`}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
