<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view></router-view>
    </template>
    <template v-else>
      <BasicLayout></BasicLayout>
    </template>
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "./layouts/BasicLayout";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

/**
 * 全局初始化函数（有全局单次调用的代码，都可以写到这里）
 */
const doInit = () => {
  console.log("hello，欢迎光临");
};

onMounted(() => {
  doInit();
});
</script>

<style>
/*.bytemd-toolbar-icon.bytemd-tippy.bytemd-tippy-right:last-child {*/
/*  display: none;*/
/*}*/
</style>
