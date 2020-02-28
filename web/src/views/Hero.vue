<!-- 组件说明 -->
<template>
  <div class v-if="model">
    <div class="topbar py-2 px-3 bg-black d-flex">
      <img src="../assets/logo.png" height="28px" alt />
      <div class="px-2 py-2 flex-1 fs-sm">
        <span class="text-white px-2">王者荣耀</span>
        <span class="text-white">攻略站</span>
      </div>
      <div class="py-2 fs-xs" style="color:white">更多英雄 &gt;</div>
    </div>
    <div>{{model.name}}</div>
  </div>
</template>

<script>
//import x from ''
export default {
  props: {
    id: { required: true }
  },
  components: {},
  data() {
    return {
      model: null
    };
  },
  computed: {},
  methods: {
    async fetch() {
      const res = await this.$http.get(`/heroes/${this.id}`);
      this.model = res.data
    }
  },
  // 生命周期
  created() {
    this.fetch()
  },
};
</script>