import React, { useState, useEffect } from "react";
import styles from "./createSlidesPanel.module.css";
import { nanoid } from "nanoid";
import { validator } from "../../../utils/validator";
import PropTypes from "prop-types";

const CreateSlidesPanel = ({ createSlidesCard }) => {
  const clearData = {
    id: nanoid(),
    image: "",
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
    image: {
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
      await createSlidesCard(data);
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
                    value={data.image}
                    name="image"
                    placeholder="Слайд1.jpg"
                    onChange={(e) => handleChange(e.target)}
                    error={errors.image}
                    className={`${styles.cardSlides} ${getInputClasses(
                      errors.image
                    )}`}
                  />
                  {errors.image && (
                    <div className={styles.errorMessage}>{errors.image}</div>
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

CreateSlidesPanel.propTypes = {
  createSlidesCard: PropTypes.func,
};
export default CreateSlidesPanel;
