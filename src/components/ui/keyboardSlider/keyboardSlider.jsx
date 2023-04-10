import React, { useState, useEffect } from "react";
import styles from "./keyboardSlider.module.css";
import Line from "../line";
import Button from "../button";
import Slider from "../slider";
import Loading from "../loading";
import { Link } from "react-router-dom";
import KeyboardSliderService from "../../services/keyboardSliderService";

const KeyboardSlider = () => {
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { content } = await KeyboardSliderService.getAll();
        setSlides(content);
        setIsLoading(false);
      } catch (error) {
        errorCatcher(error);
      }
    };
    fetchData();
  }, []);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  return (
    <>
      <section>
        <Line />
        <div className={styles.block}>
          <div className={styles.text}>
            <p className={styles.questions}>Не нашли, что искали?</p>
            <h2>Создайте свою уникальную клавиатуру в нашем конструкторе</h2>
          </div>
          <div>
            <Link to={"/constructor"}>
              <Button appearance="ctvBlue">Создать</Button>
            </Link>
          </div>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <Slider slides={slides} appearance={"percentagesHigher"} />
        )}
      </section>
    </>
  );
};

export default KeyboardSlider;
