import { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import cards from "./cards.json";
import cardSlides from "./cardSlides.json";
import mainSlides from "./mainSlides.json";
import employees from "./employees.json";

const useMockData = () => {
  const statusConsts = {
    idle: "Not Started",
    pending: "In Process",
    successed: "Ready",
    error: "Error occurred",
  };
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(statusConsts.idle);
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);
  const summaryCount =
    cards.length + cardSlides.length + mainSlides.length + employees.length;
  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };
  const updateProgress = () => {
    if (count !== 0 && status === statusConsts.idle) {
      setStatus(statusConsts.pending);
    }
    const newProgress = Math.floor((count / summaryCount) * 100);
    if (progress < newProgress) {
      setProgress(() => newProgress);
    }
    if (newProgress === 100) {
      setStatus(statusConsts.successed);
    }
  };

  useEffect(() => {
    updateProgress();
  }, [count]);
  async function initialize() {
    try {
      for (const card of cards) {
        await httpService.put("card/" + card.id, card);
        incrementCount();
      }
      for (const cardSlide of cardSlides) {
        await httpService.put("cardSlide/" + cardSlide.id, cardSlide);
        incrementCount();
      }
      for (const mainSlide of mainSlides) {
        await httpService.put("mainSlide/" + mainSlide.id, mainSlide);
        incrementCount();
      }
      for (const employee of employees) {
        await httpService.put("employee/" + employee.id, employee);
        incrementCount();
      }
    } catch (error) {
      setError(error);
      setStatus(statusConsts.error);
    }
  }

  return { error, initialize, progress, status };
};

export default useMockData;
