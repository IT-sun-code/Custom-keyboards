import httpService from "../httpService";
import localStorageService from "../localStorageService";
const cardsEndpoint = "card/";

const CardsService = {
  getAll: async () => {
    const { data } = await httpService.get(cardsEndpoint);
    return data;
  },
  getById: async (id) => {
    const { data } = await httpService.get(cardsEndpoint);
    console.log(data.content.find((item) => item.id === id));
    const cardData = data.content.find((item) => item.id === id);
    return cardData;
  },
  create: async (payload) => {
    const { data } = await httpService.put(cardsEndpoint + payload.id, payload);
    return data;
  },
  deleteCard: async (cardId) => {
    const { data } = await httpService.delete(cardsEndpoint + cardId);
    return data;
  },
  // Добавила update для изменения данных о карточке
  updateCard: async (cardId, payload) => {
    const { data } = await httpService.patch(cardsEndpoint + cardId, payload);
    return data;
  },
};
export default CardsService;
