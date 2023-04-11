import httpService from "../httpService";
const employeesEndpoint = "employee/";

const EmployeesService = {
  getAll: async () => {
    const { data } = await httpService.get(employeesEndpoint);
    return data;
  },
};
export default EmployeesService;
