import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import qs from "qs";
import { API_URL } from "env";
import tokenService from "../token/token.service";

// Interface for success response
export interface ResponseSuccess<T> {
  success?: boolean;
  data: T;
}

// Interface for error response
export interface ResponseError {
  status: number;
  title: string;
  errors: {
    [key: string]: string[];
  };
}

// Create axios instance
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "multipart/form-data",
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat", allowDots: true });
  },
});

// Add request interceptor
axiosClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    // Handle token here
    // If token exists and not expired, add it to request headers
    if (await tokenService.checkTokenExists()){
      const token = await tokenService.getToken();
      // if (token && !tokenService.isTokenExpired(token)) {
      if (token) {
        config.headers!.Authorization = "Bearer " + token;
        console.log("Sent with token successfully")
        // console.log("Token:", token);
      }
    }
    // If request method is not "get", convert data to JSON
    if (config.method !== "get") {
      config.headers!["content-type"] = "application/json";
      config.data = JSON.stringify(config.data);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      alert("Token hết hạn, vui lòng đăng nhập lại!");
      // Handle token expiration, redirect to login screen or renew token
      tokenService.removeToken();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
