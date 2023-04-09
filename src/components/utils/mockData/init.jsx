import React from "react";
import useMockData from "./mockData";

const Init = () => {
  const { error, initialize, progress, status } = useMockData();
  const handleClick = () => {
    initialize();
  };
  return (
    <div>
      <h3>Инициализация данных в FireBase</h3>
      <ul>
        <li>Status: {status}</li>
        <li>Progress: {progress}%</li>
        {error && <li>Error: {error}</li>}
      </ul>
      <button onClick={handleClick}>Инициализировать</button>
    </div>
  );
};

export default Init;
