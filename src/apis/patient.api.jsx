import config from "../config/axiosInstance";
import Auth from "../utils/Auth";

const token = Auth.getToken();

const headers = {
  Authorization: `Bearer ${token}`,
};

const APIPatient = {
  async getPatient() {
    try {
      const response = await config.get(`/patients/cards`, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async getPatientsById(str_num) {
    try {
      const response = await config.get(`/patients/${str_num}`, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async addPatient(data) {
    try {
      const response = await config.post("/patients", data, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async editPatient(data) {
    const str_num = data.str_num;
    try {
      const response = await config.delete(`/patients/${str_num}`, data, {
        headers,
      });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APIPatient;
