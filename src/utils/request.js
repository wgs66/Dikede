import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
});

service.interceptors.request.use(); // 请求拦截器
service.interceptors.response.use(); // 响应拦截器
export default service; // 导出axios实例
