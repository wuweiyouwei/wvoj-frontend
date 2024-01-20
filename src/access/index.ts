import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("登录用户信息", store.state.user.loginUser);

  const user = store.state.user;
  let currentUser = user.loginUser;

  // 自动登陆，之前没有登录过
  if (!currentUser || !currentUser.userRole) {
    await store.dispatch("user/getLoginUser");
  }
  currentUser = user.loginUser;
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;

  // 要跳转的页面需要登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    // 如果没登录，跳转到登录页面
    if (!currentUser || !currentUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    // 如果已登录，权限不足
    if (!checkAccess(currentUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
