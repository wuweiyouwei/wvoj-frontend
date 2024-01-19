<template>
  <div id="globalHeader">
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
      <a-menu-item v-for="item in routes" :key="item.path">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

// 默认主页
const selectedKeys = ref(["/"]);

const router = useRouter();

// 路由跳转时，更新选中的菜单项

router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

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
