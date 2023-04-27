import React, { useState, useEffect } from "react";
import { validator } from "../../../utils/validator";
import TextField from "../../forms/textField";
import Button from "../../button";

const CardSlidesEditForm = ({ cardId, updateCardSlides, onClose, slides }) => {
  const slidesIds = slides.map((slide) => slide.id);
  console.log(slidesIds);

  const matchingSlides = slides.map((slide) => {
    const { cardId, id, ...rest } = slide;
    return JSON.stringify(rest);
  });

  const clearData = {
    cardId: cardId,
  };
  matchingSlides.forEach((slide, index) => {
    clearData[slides[index].id] = slide;
  });

  const [data, setData] = useState(clearData);
  const [errors, setErrors] = useState({});

  const handleChange = (target, index) => {
    const { name, value } = target;
    if (slides[index]) {
      setData((prevState) => ({
        ...prevState,
        [name]: value,
        [slides[index].id]: value,
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const validatorConfig = matchingSlides.reduce((config, _, index) => {
    return {
      ...config,
      [slides[index].id]: {
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
  }, {});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    const imageObj = Object.entries(data)
      .filter(([key]) => key !== "cardId")
      .reduce((acc, [key, value]) => {
        acc[key] = JSON.parse(value).image;
        return acc;
      }, {});

    const { cardId: updatedCardId } = data;

    const getSlidesWithImages = (slides, imageObj) => {
      return slides.map((slide) => {
        const { id } = slide;
        const image = imageObj[id];
        console.log({ cardId: updatedCardId, id, image });
        return { cardId: updatedCardId, id, image };
      });
    };

    const updatedSlides = getSlidesWithImages(slides, imageObj);
    updateCardSlides(updatedCardId, slidesIds, updatedSlides);
    onClose();
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <TextField
            label="ID карточки"
            name="cardId"
            value={data.cardId}
            placeholder="24lSi90ayTxC6kCuI9a3j"
            onChange={handleChange}
            error={errors.cardId}
            autoComplete="current-cardId"
            autoFocus
          />
          {matchingSlides.map((slide, index) => (
            <TextField
              key={index}
              label={`Слайд ${index + 1}`}
              name={slides[index].id}
              value={data[slides[index].id]}
              error={errors[slides[index].id]}
              placeholder={`Слайд ${index + 1}`}
              onChange={(event) => handleChange(event, index)}
              autoComplete={`current-image-${index}`}
            />
          ))}
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

export default CardSlidesEditForm;
