import axios from "axios";
import { getUserFromStorage } from '@/utils/storage.js';

const instance = axios.create({
  baseURL: 'https://api.realworld.io/api',
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const user = getUserFromStorage();
  if (user) { config.headers.Authorization = 'Token ' + user.token; }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

export default instance;