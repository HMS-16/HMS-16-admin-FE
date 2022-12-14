import axiosInstance from "../config/axiosInstance";

const APIAuth = {
  async login(data) {
    try {
      const res = await axiosInstance.post("/login", data);
      // console.log(res)
      // console.log(data)
      return res;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default APIAuth;
