<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <UserLoginView></UserLoginView>
    </a-layout>
  </div>
</template>

<style scoped>
#userLayout {
}

#userLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#userLayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script>
import UserLoginView from "@/views/user/UserLoginView";

export default {
  components: { UserLoginView },
};
</script>
