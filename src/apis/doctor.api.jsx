import config from "../config/axiosInstance";
import Auth from "../utils/Auth";

const token = Auth.getToken();

const headers = {
  Authorization: `Bearer ${token}`,
};

const APIDoctor = {
  async getDoctor() {
    try {
      const response = await config.get(`/doctors/all/cards`, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async getDoctorById(str_num) {
    try {
      const response = await config.get(`/doctors/${str_num}`, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APIDoctor;
