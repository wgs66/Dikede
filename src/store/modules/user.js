import { login } from "@/api";
export default {
  namespaced: true,
  state: {
    token: "",
  },
  getters: {},
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async getToken(context, payload) {
      const { data } = await login(payload);
      // console.log(data);

      context.commit("setToken", data.token);
    },
  },
};
