import axios from "axios";

export const CardsService = {
  async getAll() {
    const response = await axios.get("http://localhost:3000/cards");
    return response.data;
  },
  async getById(id) {
    const response = await axios.get(`http://localhost:3000/cards?id=${id}`);
    return response.data[0];
  },
};
