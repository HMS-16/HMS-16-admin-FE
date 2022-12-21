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
  async getPatientsById(id) {
    try {
      const response = await config.get(`/patients/${id}`, { headers });
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
    const id = data.id;
    try {
      const response = await config.put(`/patients/${id}`, data, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APIPatient;
