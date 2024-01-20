<template>
  <div>
    <a-row id="globalHeader" align="center" :wrap="false">
      <a-col flex="auto">
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="tittle-bar">
              <img class="logo" src="../assets/判题-正确.svg" />
              <div class="title">无为 OJ</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in visibleRoutes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="100px">
        <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";

const router = useRouter();
const store = useStore();
// 获取全局共享store对象

// 展示在菜单的路由
// const visibleRoutes = routes.filter((route) => {
//   // 是否是隐藏菜单
//   if (route.meta?.hideInMenu) {
//     return false;
//   }
//   // 根据权限校验过滤菜单
//   if (!checkAccess(store.state.user.loginUser, route.meta?.access as string)) {
//     console.log(store.state.user.loginUser);
//     console.log(route.meta?.access);
//     console.log(route);
//     return false;
//   }
//   return true;
// });
const visibleRoutes = computed(() => {
  return routes.filter((route) => {
    // 是否是隐藏菜单
    if (route.meta?.hideInMenu) {
      return false;
    }
    // 根据权限校验过滤菜单
    return checkAccess(
      store.state.user.loginUser,
      route.meta?.access as string
    );
  });
});
// 默认主页
const selectedKeys = ref(["/"]);

// 路由跳转时，更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

// 模拟三秒后自动登录
setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "管理员",
    userRole: ACCESS_ENUM.ADMIN,
  });
}, 3000);

const doMenuClick = (key: string) => {
  // 跳转
  router.push({
    path: key,
  });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tittle-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
