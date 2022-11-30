import config from "../configs/axiosInstance";

const APIDoctor = {
  async getDoctor() {
    try {
      const response = await config.get(`/doctor`);
      return response.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APIDoctor;
