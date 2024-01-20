import ACCESS_ENUM from "@/access/accessEnum";
/**
 * 校验权限（判断当前登录的用户是否有某种权限）
 * @param loginUser 已登录的用户信息
 * @param needAccess 需要的权限
 * @return boolean 是否有权限
 */
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  // 获取当前登录的用户的权限
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;

  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    // 不需要权限
    return true;
  }
  // 如果所需要的权限是已登录用户
  if (needAccess === ACCESS_ENUM.USER) {
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  // 如果所需要的权限是管理员
  if (needAccess === ACCESS_ENUM.ADMIN) {
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
