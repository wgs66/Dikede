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
      const { data } = await login(payload);
      // console.log(data);

      context.commit("setToken", data);
    },
  },
};
