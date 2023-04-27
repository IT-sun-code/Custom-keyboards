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
  deleteCardSlides: async (slideIds) => {
    const requests = slideIds.map((id) =>
      httpService.delete(CardsSlidesEndpoint + id)
    );
    const responses = await Promise.all(requests);
    return responses.map((response) => response.data);
  },
  updateCardSlide: async (slideId, payload) => {
    const response = await httpService.patch(
      CardsSlidesEndpoint + slideId,
      payload
    );
    return response.data;
  },
};
export default CardsSlidesService;
