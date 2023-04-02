import React, { useState, useEffect } from "react";
import styles from "./keyboardSlider.module.css";
import Line from "../line";
import Button from "../button";
import Slider from "../slider";
import axios from "axios";
import Loading from "../loading";
import { Link } from "react-router-dom";

const KeyboardSlider = () => {
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/mainSlides");
      setSlides(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

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
