import httpService from "../httpService";
const CardsSlidesEndpoint = "cardSlide/";

const CardsSlidesService = {
  getAll: async () => {
    const { data } = await httpService.get(CardsSlidesEndpoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(
      CardsSlidesEndpoint + payload.id,
      payload
    );
    return data;
  },
};
export default CardsSlidesService;
