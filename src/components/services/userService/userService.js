import httpService from "../httpService";
import localStorageService from "../localStorageService/localStorageService";

const userEndpoint = "user/";

const UserService = {
  get: async () => {
    const { data } = await httpService.get(userEndpoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(userEndpoint + payload.id, payload);
    return data;
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get(
      userEndpoint + localStorageService.getUserId()
    );
    return data;
  },
  // Добавила update для изменения данных о пользователе
  updateCurrentUser: async (payload) => {
    const { data } = await httpService.patch(
      userEndpoint + localStorageService.getUserId(),
      payload
    );
    return data;
  },
};

export default UserService;
