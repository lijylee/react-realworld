import axios from "axios";
import store from "@/store/index.js";

const instance = axios.create({
  baseURL: "https://api.realworld.io/api",
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    const user = store.getState().user.value;
    // 在发送请求之前做些什么
    if (user) {
      config.headers.Authorization = "Token " + user.token;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

export default instance;
