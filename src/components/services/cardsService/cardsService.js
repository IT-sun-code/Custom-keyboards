import httpService from "../httpService";
const cardsEndpoint = "card/";

const CardsService = {
  getAll: async () => {
    const { data } = await httpService.get(cardsEndpoint);
    return data;
  },
  getById: async (id) => {
    const { data } = await httpService.get(cardsEndpoint);
    console.log(data.content[id]);
    const cardData = data.content[id];
    return cardData;
  },
  create: async (payload) => {
    const { data } = await httpService.put(cardsEndpoint + payload.id, payload);
    return data;
  },
};
export default CardsService;
