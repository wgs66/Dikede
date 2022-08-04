import axios from "axios";
import store from "@/store";
import router from "@/router";
import { Message } from "element-ui";
import { getTokenTime } from "./auth";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
});

function isTimeOut() {
  const currentTime = Date.now();
  const tokenTime = getTokenTime();
  const timeout = 2 * 60 * 60 * 1000;
  console.log(currentTime, tokenTime, timeout);
  return currentTime - tokenTime > timeout;
}

service.interceptors.request.use(async (config) => {
  const token = store.state.user;
  console.log(token.token);
  if (store.state.user.token) {
    // console.log(111);
    if (isTimeOut()) {
      await store.dispatch("user/logOut");
      router.push("/login");
      return Promise.reject(new Error("登录过期"));
    } else {
      config.headers.Authorization = store.state.user.token;
    }
  }
  return config;
}); // 请求拦截器
service.interceptors.response.use(
  (res) => {
    console.log(res);
    const { data } = res;
    // console.log(res);
    if (data.type === "image/jpeg") {
      return data;
    }
    if (data.success) {
      return data;
    }
    if (data.status) {
      return data;
    }
    Message.error(data.msg);
    return Promise.reject(new Error(data.msg));
  },
  async function (error) {
    if (error?.response?.status === 401) {
      Message.error("登录过期");
      await store.dispatch("user/logOut");
      router.push("/login");
    } else {
      Message.error(error.message);
    }
    return Promise.reject(error);
  }
); // 响应拦截器
export default service; // 导出axios实例
