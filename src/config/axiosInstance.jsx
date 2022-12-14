import axios from "axios";
import { CONST } from "../utils/constant";
import { requestHandler } from "./interceptor";

const config = {
  baseURL: CONST.BASE_URL_API,
};
const axiosInstance = axios.create(config);

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));

export default axiosInstance;
