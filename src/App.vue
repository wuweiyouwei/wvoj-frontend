<template>
  <div id="app">
    <BasicLayout></BasicLayout>
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "./layouts/BasicLayout";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Access_Enum from "@/access/accessEnum";
import { onMounted } from "vue";

/**
 * 全局初始化函数（有全局单次调用的代码，都可以写到这里）
 */
const doInit = () => {
  console.log("hello，欢迎光临");
};

onMounted(() => {
  doInit();
});

const router = useRouter();
const store = useStore();
router.beforeEach((to, from, next) => {
  // 仅管理员可见
  if (to.meta?.access === Access_Enum.ADMIN) {
    if (store.state.user.loginUser?.userRole !== Access_Enum.ADMIN) {
      console.log(store.state.user.loginUser?.userRole);
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>
