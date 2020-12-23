import axios from "axios";
import { globalData } from '/@/setting/global';

axios.defaults.headers["Content-Type"] = "application/json";

let config = {
  baseURL: globalData.apiUrl,
  timeout: 60 * 1000,
};

const http = axios.create(config);

http.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error.response);
  }
);

export default http;
