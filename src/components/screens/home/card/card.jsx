import React, { useState } from "react";
import styles from "./card.module.css";
import BasketIcon from "../../../ui/basketIcon";
import HeartIcon from "../../../ui/heartIcon";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../utils/hooks/useAuth";
import { useFavorites } from "../../../utils/hooks/useFavorites";
import { useBasket } from "../../../utils/hooks/useBasket";
import TextBlock from "../../../ui/textBlock";
import Button from "../../../ui/button";
import Modal from "../../../ui/modal";
import useModal from "../../../utils/hooks/useModal";

const Card = ({ card }) => {
  const str = card.title;
  const maxLength = 35;
  const { currentUser } = useAuth();
  //__________________________________________________________________________________
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  const { modalVariety, handleModalOpen, handleModalClose, modalOpen } =
    useModal();
  //__________________________________________________________________________________
  const { favoriteCards, handleFavoriteClick } = useFavorites();
  const isFavorite = favoriteCards.some((favCard) => favCard.id === card.id);
  const [heartIconclicks, setHeartIconClicks] = useState(isFavorite);
  const handleHeartIconClick = async () => {
    setHeartIconClicks(!heartIconclicks);
    handleFavoriteClick(card);
  };

  const { basketCards, handleBasketClick } = useBasket();
  const isBasket = basketCards.some((basketCard) => basketCard.id === card.id);
  const [basketIconclicks, setBasketIconClicks] = useState(isBasket);
  const handleBasketIconClick = async () => {
    setBasketIconClicks(!basketIconclicks);
    handleBasketClick(card);
  };

  console.log(modalOpen);

  return (
    <>
      {currentPath !== "/basket" && (
        <div className={styles.item}>
          <HeartIcon
            onClick={
              currentUser
                ? handleHeartIconClick
                : () => handleModalOpen("signIn")
            }
            isActive={isFavorite}
          />
          <BasketIcon
            onClick={
              currentUser
                ? handleBasketIconClick
                : () => handleModalOpen("signIn")
            }
            isActive={isBasket}
          />
          <Link to={`/cards/${card.id}`}>
            <img className={styles.image} src={card.image} alt="keyboard" />
          </Link>
          <div>
            <div title={str} className={styles.tooltip}>
              <p className={styles.description}>
                {str.length > maxLength
                  ? str.substring(0, maxLength - 3) + "..."
                  : str}
              </p>
            </div>
            <p className={styles.description}>{`Артикул ${card.id}`}</p>
            <h3>{`Цена: ${card.price} ₽`}</h3>
          </div>
        </div>
      )}

      {/* _____________________________________________________________ */}

      {currentPath === "/basket" && (
        <section>
          <div className={styles.order}>
            <div className={styles.info}>
              <div className={styles.itemBasket}>
                <HeartIcon
                  onClick={currentUser && handleHeartIconClick}
                  isActive={isFavorite}
                />
                <Link to={`/cards/${card.id}`}>
                  <img
                    className={`${styles.image} ${styles.imageBasket}`}
                    src={card.image}
                    alt="keyboard"
                  />
                </Link>
              </div>
              <div className={styles.rightBlock}>
                <TextBlock {...card} />
                <div className={styles.data}>
                  <div>
                    <h3 className={styles.text}>Доставка: 30 дней</h3>
                    <div className={styles.price}>
                      <h3 className={styles.count}>{` ${1} шт.`}</h3>
                      <button>
                        <img
                          className={styles.plus}
                          src="/icons/actionIcons/plus.svg"
                          alt="plus"
                        />
                      </button>
                      <button>
                        <img src="/icons/actionIcons/minus.svg" alt="minus" />
                      </button>
                    </div>
                    <h3
                      className={styles.text}
                    >{`Цена за 1 шт: ${card.price} руб.`}</h3>
                    <h3
                      className={styles.text}
                    >{`Всего: ${card.price} руб.`}</h3>
                  </div>
                  <div>
                    <Button
                      appearance="ctvBlack"
                      onClick={handleBasketIconClick}
                    >
                      Удалить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {modalOpen && (
        <Modal
          variety={modalVariety}
          isOpen={modalOpen}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default Card;
