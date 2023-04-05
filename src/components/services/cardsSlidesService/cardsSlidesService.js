import axios from "axios";

export const CardsSlidesService = {
  async getAll() {
    const response = await axios.get("http://localhost:3000/cardSlides");
    return response.data;
  },
};
