import { login } from "@/api";
export default {
  namespaced: true,
  state: {
    loginInfo: {},
    token: "",
  },
  getters: {},
  mutations: {
    setToken(state, payload) {
      state.loginInfo = payload;
      state.token = payload.token;
    },
  },
  actions: {
    async getToken(context, payload) {
      const res = await login(payload);
      // console.log(data);
      // console.log(res);
      context.commit("setToken", res);
    },
  },
};
