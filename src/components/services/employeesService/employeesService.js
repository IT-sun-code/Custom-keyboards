import axios from "axios";

export const EmployeesService = {
  async getAll() {
    const response = await axios.get("http://localhost:3000/employees");
    return response.data;
  },
};
