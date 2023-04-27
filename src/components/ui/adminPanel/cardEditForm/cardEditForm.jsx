import React, { useState, useEffect } from "react";
import { validator } from "../../../utils/validator";
import TextField from "../../forms/textField";
import Button from "../../button";
import SelectField from "../../forms/selectField/selectField";
import { useCards } from "../../../utils/hooks/useCards";

const CardEditForm = ({ cardId, updateCard, onClose }) => {
  console.log(cardId, updateCard, onClose);
  const { cards } = useCards();

  const clearData = {
    title: "",
    category: "keyboard",
    price: "",
    image: "",
    description: "",
  };
  // const [data, setData] = useState(clearData);
  const [data, setData] = useState(() => {
    const card = cards.find((card) => card.id === cardId);
    return card ? card : clearData;
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    try {
      await updateCard(cardId, data);
      onClose();
    } catch (error) {
      setErrors(error);
    }
  };

  const categoriesList = [
    { label: "клавиатура", value: "keyboard" },
    { label: "клавиша", value: "keycap" },
    { label: "клавиши", value: "keycaps" },
  ];

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Название"
            name="title"
            value={data.title}
            placeholder="Mistel..."
            onChange={handleChange}
            error={errors.title}
            autoComplete="current-title"
            autoFocus
          />
          <SelectField
            label="Выберите категорию"
            options={categoriesList}
            name="category"
            onChange={handleChange}
            value={data.category}
            error={errors.category}
          />
          <TextField
            type="number"
            label="Цена"
            name="price"
            value={data.price}
            placeholder="1200"
            min="0"
            onChange={handleChange}
            error={errors.price}
            autoComplete="current-price"
          />
          <TextField
            label="Фото"
            name="image"
            value={data.image}
            placeholder="/images/1.jpg"
            onChange={handleChange}
            error={errors.image}
            autoComplete="current-image"
          />
          <TextField
            label="Описание"
            name="description"
            value={data.description}
            placeholder="Необыкновенная..."
            onChange={handleChange}
            error={errors.description}
            autoComplete="current-description"
          />
          <div>
            <Button appearance="ctvBlueSubmit" type="submit" disabled={isValid}>
              Подтвердить
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CardEditForm;
