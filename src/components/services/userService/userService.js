import httpService from "../httpService";

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
};

export default UserService;
