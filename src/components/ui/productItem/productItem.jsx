import React from "react";
import styles from "./productItem.module.css";
import { Link } from "react-router-dom";
import HeartIcon from "../heartIcon";
import BasketIcon from "../basketIcon";
import Modal from "../modal";
import useModal from "../../utils/hooks/useModal";

const ProductItem = ({
  currentPath,
  currentUser,
  card,
  isFavorite,
  isBasket,
  handleHeartIconClick,
  handleBasketIconClick,
}) => {
  const str = card.title;
  const maxLength = 35;

  const { modalVariety, handleModalOpen, handleModalClose, modalOpen } =
    useModal();

  return (
    <>
      {currentPath !== "/basket" && currentPath !== "/user" && (
        <div className={styles.item}>
          {!currentUser?.admin && (
            <>
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
            </>
          )}
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

export default ProductItem;
