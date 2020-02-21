<!-- 组件说明 -->
<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex pb-3">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <i class="iconfont icon-moreread"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.card {
  .card-header {
    border-bottom: 1px solid #d4d9de;
  }
}
</style>