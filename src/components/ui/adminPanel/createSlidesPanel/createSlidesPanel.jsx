import React, { useState, useEffect } from "react";
import styles from "./createSlidesPanel.module.css";
import { nanoid } from "nanoid";
import { validator } from "../../../utils/validator";

const CreateSlidesPanel = ({ createCard }) => {
  const clearData = {
    id: nanoid(),
    slides: "",
    cardId: "",
  };
  const [data, setData] = useState(clearData);
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    console.log(target.value);
    const { name, value } = target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validatorConfig = {
    slides: {
      isRequired: {
        message: "Oбязательно",
      },
    },
    cardId: {
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
              <h4>ID карточки</h4>
              <h4>Слайды</h4>
            </div>
            <div>
              <form onSubmit={handleSubmit} className={styles.thead}>
                <div className={styles.inline}>
                  <input
                    type="text"
                    value={data.cardId}
                    name="cardId"
                    placeholder="24lSi90ayTxC6kCuI9a3j"
                    onChange={(e) => handleChange(e.target)}
                    error={errors.cardId}
                    className={`${styles.slidesId} ${getInputClasses(
                      errors.cardId
                    )}`}
                  />
                  {errors.cardId && (
                    <div className={styles.errorMessage}>{errors.cardId}</div>
                  )}
                </div>
                <div className={styles.inline}>
                  <input
                    type="text"
                    value={data.slides}
                    name="slides"
                    placeholder="Слайд1.jpg, Слайд2.jpg, Слайд3.jpg..."
                    onChange={(e) => handleChange(e.target)}
                    error={errors.slides}
                    className={`${styles.cardSlides} ${getInputClasses(
                      errors.slides
                    )}`}
                  />
                  {errors.slides && (
                    <div className={styles.errorMessage}>{errors.slides}</div>
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

export default CreateSlidesPanel;
