// import axios from "axios";

// export const CardsSlidesService = {
//   async getAll() {
//     const response = await axios.get("http://localhost:3000/cardSlides");
//     return response.data;
//   },
// };

import httpService from "../httpService";
const CardsSlidesEndpoint = "cardSlide/";

const CardsSlidesService = {
  getAll: async () => {
    const { data } = await httpService.get(CardsSlidesEndpoint);
    return data;
  },
};
export default CardsSlidesService;
