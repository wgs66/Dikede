import axios from "axios";
import { Message } from "element-ui";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
});

service.interceptors.request.use(); // 请求拦截器
service.interceptors.response.use(
  (res) => {
    const { data } = res;
    // console.log(res);
    if (data.type === "image/jpeg") {
      return data;
    }
    if (data.success) {
      return data;
    }
    Message.error(data.msg);
    return Promise.reject(new Error(data.msg));
  },
  function (error) {
    Message.error("登录失败！");
    return Promise.reject(error);
  }
); // 响应拦截器
export default service; // 导出axios实例
