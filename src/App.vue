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
import {onMounted} from "vue";

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
