import Cookies from "js-cookie";

export const isHandlerEnabled = (config) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
};

export const requestHandler = async (config) => {
  if (isHandlerEnabled(config)) {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
};
