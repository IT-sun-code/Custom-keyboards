import React, { useState, useEffect } from "react";
import styles from "./createCardPanel.module.css";
import { nanoid } from "nanoid";
import { validator } from "../../../utils/validator";
import PropTypes from "prop-types";

const CreateCardPanel = ({ createCard }) => {
  const clearData = {
    id: nanoid(),
    title: "",
    category: "keyboard",
    price: "",
    image: "",
    description: "",
  };
  const [data, setData] = useState(clearData);
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    console.log(target.value);
    console.log(target.type);
    const { name, value, type } = target;
    setData((prevState) => ({
      ...prevState,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const validatorConfig = {
    title: {
      isRequired: {
        message: "Oбязательно",
      },
    },
    category: {
      isRequired: {
        message: "Oбязательно",
      },
    },
    price: {
      isRequired: {
        message: "Oбязательно",
      },
    },
    image: {
      isRequired: {
        message: "Oбязательно",
      },
    },
    description: {
      isRequired: {
        message: "Oбязательно",
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;
  console.log(isValid);

  const clearForm = () => {
    setData(clearData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    try {
      await createCard(data);
      clearForm();
    } catch (error) {
      setErrors(error);
    }
  };

  const getInputClasses = (error) => {
    return `${error ? styles.invalid : styles.valid}`;
  };

  return (
    <>
      <section>
        <div className={styles.panel}>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            disabled={!isValid}
          >
            <img
              src="/icons/actionIcons/add.svg"
              alt="add"
              className={`${!isValid && styles.disabled}`}
            />
          </button>
          <div className={styles.theadBlock}>
            <div className={styles.thead}>
              <h4>Название</h4>
              <h4>Категория</h4>
              <h4>Цена</h4>
              <h4>Фото</h4>
              <h4>Описание</h4>
            </div>
            <div>
              <form onSubmit={handleSubmit} className={styles.thead}>
                <div className={styles.inline}>
                  <input
                    type="text"
                    name="title"
                    value={data.title}
                    placeholder="Mistel..."
                    error={errors.title}
                    onChange={(e) => handleChange(e.target)}
                    className={getInputClasses(errors.title)}
                  />
                  {errors.title && (
                    <div className={styles.errorMessage}>{errors.title}</div>
                  )}
                </div>
                <div className={styles.inline}>
                  <select
                    value={data.category}
                    name="category"
                    onChange={(e) => handleChange(e.target)}
                    error={errors.category}
                    className={getInputClasses(errors.category)}
                  >
                    <option value="keyboard">клавиатура</option>
                    <option value="keycap">клавиша</option>
                    <option value="keycaps">клавиши</option>
                  </select>
                  {errors.category && (
                    <div className={styles.errorMessage}>{errors.category}</div>
                  )}
                </div>
                <div className={styles.inline}>
                  <input
                    type="number"
                    value={data.price}
                    name="price"
                    placeholder="1200"
                    min="0"
                    onChange={(e) => handleChange(e.target)}
                    error={errors.price}
                    className={getInputClasses(errors.price)}
                  />
                  {errors.price && (
                    <div className={styles.errorMessage}>{errors.price}</div>
                  )}
                </div>
                <div className={styles.inline}>
                  <input
                    type="text"
                    value={data.image}
                    name="image"
                    placeholder="/images/1.jpg"
                    onChange={(e) => handleChange(e.target)}
                    error={errors.image}
                    className={getInputClasses(errors.image)}
                  />
                  {errors.image && (
                    <div className={styles.errorMessage}>{errors.image}</div>
                  )}
                </div>
                <div className={styles.inline}>
                  <input
                    type="text"
                    value={data.description}
                    name="description"
                    placeholder="Клавиатура..."
                    onChange={(e) => handleChange(e.target)}
                    error={errors.description}
                    className={getInputClasses(errors.description)}
                  />
                  {errors.description && (
                    <div className={styles.errorMessage}>
                      {errors.description}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

CreateCardPanel.propTypes = {
  createCard: PropTypes.func,
};
export default CreateCardPanel;
