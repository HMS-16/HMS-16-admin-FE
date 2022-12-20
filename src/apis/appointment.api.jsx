import config from "../config/axiosInstance";
import Auth from "../utils/Auth";

const token = Auth.getToken();

const headers = {
  Authorization: `Bearer ${token}`,
};

const APIAppointment = {
  async getAppointment() {
    try {
      const response = await config.get(`/appointment/all`, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async getAppointmentById(patient_id) {
    try {
      const response = await config.get(`/appointment/all/${patient_id}`, {
        headers,
      });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async addAppointment(data) {
    try {
      const response = await config.post("/appointment/all", data, { headers });
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async editAppointment(data) {
    const patient_id = data.str_num;
    try {
      const response = await config.delete(
        `/appointment/all${patient_id}`,
        data,
        {
          headers,
        }
      );
      return response.data.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APIAppointment;
