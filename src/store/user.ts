import { StoreOptions } from "vuex";
import Access_Enum from "@/access/accessEnum";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: Access_Enum.NOT_LOGIN,
    },
  }),
  actions: {
    getLoginUser({ commit }, payload) {
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
