import axios from "axios";

export const KeyboardSliderService = {
  async getAll() {
    const response = await axios.get("http://localhost:3000/mainSlides");
    return response.data;
  },
};
