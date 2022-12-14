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
  async addDoctor(data) {
    try {
      const response = await config.post("/doctors", data, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async deleteDoctor(str_num) {
    try {
      const response = await config.delete(`/doctors/${str_num}`, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async editDoctor(data) {
    const str_num = data.str_num;
    try {
      const response = await config.put(`/doctors/${str_num}`, data, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async getDoctorSchedule() {
    try {
      const response = await config.get(`/doctors/shifts`, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async deleteDoctorSchedule(id) {
    try {
      const response = await config.delete(`/doctors/shifts/${id}`, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APIDoctor;
