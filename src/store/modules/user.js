import { login, getUserInfoApi } from "@/api";
import { setTokenTime } from "@/utils/auth";
export default {
  namespaced: true,
  state: {
    loginInfo: {},
    token: "",
    userInfo: {},
  },
  getters: {},
  mutations: {
    setToken(state, payload) {
      state.loginInfo = payload;
      state.token = payload.token;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    async getToken(context, payload) {
      const res = await login(payload);
      // console.log(data);
      // console.log(res);
      context.commit("setToken", res);
      setTokenTime();
    },
    async getUserInfo(context, payload) {
      console.log(payload);
      const userBaseInfo = await getUserInfoApi(payload);
      // console.log(userBaseInfo);
      context.commit("setUserInfo", userBaseInfo);
    },
    logOut(context) {
      context.commit("setToken", "");
      context.commit("setUserInfo", {});
    },
  },
};
