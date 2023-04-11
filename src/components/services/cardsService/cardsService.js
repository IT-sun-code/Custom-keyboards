import httpService from "../httpService";
const cardsEndpoint = "card/";

const CardsService = {
  getAll: async () => {
    const { data } = await httpService.get(cardsEndpoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(
      cardsEndpoint + payload._id,
      payload
    );
    return data;
  },
};
export default CardsService;
