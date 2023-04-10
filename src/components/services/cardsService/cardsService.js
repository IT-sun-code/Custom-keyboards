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

// import httpService from "../httpService";
// const cardsEndpoint = "card/";

// const CardsService = {
//   getAll: async () => {
//     const { data } = await httpService.get(cardsEndpoint);
//     return data;
//   },
//   getById: async (id) => {
//     const { data } = await httpService.get(cardsEndpoint);
//     return data;
//   },
//   create: async (payload) => {
//     const { data } = await httpService.put(
//       cardsEndpoint + payload._id,
//       payload
//     );
//     return data;
//   },
// };
// export default CardsService;
