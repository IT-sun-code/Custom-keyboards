import React, { useState } from "react";
import styles from "./adminPanel.module.css";
import { useCards } from "../../utils/hooks/useCards";
// import { nanoid } from "nanoid";
import { getNextId } from "../../utils/getNextId";

const AdminPanel = () => {
  const { cards } = useCards();

  const clearData = {
    id: getNextId(cards),
    title: "",
    category: "keyboard",
    price: "",
    image: "",
    description: "",
  };
  const [data, setData] = useState(clearData);

  const clearForm = () => {
    setData(clearData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(data);
    console.log(data);
    clearForm();
  };

  return (
    <section>
      <h2 className={styles.orderHeading}>Ассортимент магазина</h2>
      <div className={styles.panel}>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          <img src="/icons/actionIcons/add.svg" alt="add" />
        </button>
        <div className={styles.theadBlock}>
          <div className={styles.thead}>
            <h4>Название</h4>
            <h4>Категория</h4>
            <h4>Цена</h4>
            <h4>Фото</h4>
            <h4>Описание</h4>
          </div>
          <div className={styles.thead}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={data.title}
                placeholder="Mistel..."
                onChange={(e) =>
                  setData((prev) => ({ ...prev, title: e.target.value }))
                }
              />

              <select
                value={data.category}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, category: e.target.value }))
                }
              >
                <option value="keyboard">клавиатура</option>
                <option value="keycap">клавиша</option>
                <option value="keycaps">клавиши</option>
              </select>

              <input
                type="number"
                value={data.price}
                placeholder="1200"
                min="0"
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    price: Number(e.target.value),
                  }))
                }
              />

              <input
                type="text"
                value={data.image}
                placeholder="/images/1.jpg"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, image: e.target.value }))
                }
              />

              <input
                type="text"
                value={data.description}
                placeholder="Клавиатура..."
                onChange={(e) =>
                  setData((prev) => ({ ...prev, description: e.target.value }))
                }
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;

// const handleCreateComment = (data) => {
//   createComment(data);
// };
// const handleRemoveComment = (id) => {
//   removeComment(id);
// };
