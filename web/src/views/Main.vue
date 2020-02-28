<!-- 组件说明 -->
<template>
  <div class>
    <div class="topbar py-2 px-3 bg-black d-flex">
      <img src="../assets/logo.png" height="28px" alt />
      <div class="px-2 flex-1">
        <div class="text-white fs-sm">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary fs-xs my-1">立即下载</button>
    </div>
    <div class="bg-primary text-white">
      <div class="nav nav-inverse jc-around fs-lg">
        <div class="nav-item active">
          <router-link to="/" class="nav-link" tag="div">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/" class="nav-link" tag="div">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/" class="nav-link" tag="div">赛事中心</router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style>
.btn {
  border: none;
  border-radius: 0.1538rem;
}
.topbar{
  position: sticky;
  top: 0;
  z-index: 99;
}
</style>