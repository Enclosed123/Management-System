<!-- 组件说明 -->
<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-1 bottom">
      <div class="iconfont icon-fanhui" @click="back" style="color:#4394e4"></div>
      <div class="flex-1 text-ellipsis px-3 fs-sm" style="color:#4394e4">{{model.title}}</div>
      <div class="text-grey fs-xs">2020-02-24</div>
    </div>
    <div class="px-3 body" v-html="model.body"></div>
    <div class="px-3 py-2">
      <div class="ai-center">
        <i class="iconfont icon-menu"></i>
        <strong class="ml-1" style="color:#4394e4">相关资讯</strong>
      </div>
      <div class=" pb-2" style="">
        <router-link
          class="py-1"
          :to="`/articles/${item._id}`"
          tag="div"
          v-for="(item, index) in model.related"
          :key="index"
        >{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  watch: {
    id:"fetch",
  },
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
      this.$router.push("/");
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