<!-- 组件说明 -->
<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-1 bottom">
      <div class="iconfont icon-fanhui" @click="back" style="color:#4394e4"></div>
      <div class="flex-1 text-ellipsis px-3 fs-sm" style="color:#4394e4">{{model.title}}</div>
      <div class="text-grey fs-xs">2020-02-24</div>
    </div>
    <div class="px-3 body" v-html="model.body"></div>
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
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    },
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    this.fetch();
  }
};
</script>
<style lang="scss">
.bottom {
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}
.page-article {
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>