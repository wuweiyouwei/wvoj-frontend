import { StoreOptions } from "vuex";
import Access_Enum from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
    },
  }),
  actions: {
    async getLoginUser({ commit, state }, payload) {
      // 向后端发送请求
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        console.log(res.data);
        commit("updateUser", res.data);
      } else {
        console.log(state.loginUser);
        commit("updateUser", {
          ...state.loginUser,
          userRole: Access_Enum.NOT_LOGIN,
        });
      }
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
