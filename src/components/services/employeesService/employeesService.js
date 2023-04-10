// import axios from "axios";
// export const EmployeesService = {
//   async getAll() {
//     const response = await axios.get("http://localhost:3000/employees");
//     return response.data;
//   },
// };

import httpService from "../httpService";
const employeesEndpoint = "employee/";

const EmployeesService = {
  getAll: async () => {
    const { data } = await httpService.get(employeesEndpoint);
    return data;
  },
};
export default EmployeesService;
