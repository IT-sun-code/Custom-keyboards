import httpService from "../httpService";
const CardsSlidesEndpoint = "cardSlide/";

const CardsSlidesService = {
  getAll: async () => {
    const { data } = await httpService.get(CardsSlidesEndpoint);
    return data;
  },
};
export default CardsSlidesService;
