// import axios from "axios";

// export const KeyboardSliderService = {
//   async getAll() {
//     const response = await axios.get("http://localhost:3000/mainSlides");
//     return response.data;
//   },
// };

import httpService from "../httpService";
const keyboardSliderEndpoint = "mainSlide/";

const KeyboardSliderService = {
  getAll: async () => {
    const { data } = await httpService.get(keyboardSliderEndpoint);
    return data;
  },
};
export default KeyboardSliderService;
