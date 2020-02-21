<!-- 组件说明 -->
<template>
  <div class>
    <Swiper></Swiper>
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="(item, index) in 10" :key="index">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span class>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <Card title="新闻资讯" icon="menu">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">热门</div>
        </div>
      </div>
      <swiper class="pt-2">
        <swiper-slide v-for="(item, index) in 5" :key="index">
          <div class="py-2" v-for="(item, index) in 5" :key="index">
            <span>[公告]</span>
            <span>|</span>
            <span>2月18日全服不停机更新公告</span>
          </div>
        </swiper-slide>
      </swiper>
    </Card>
  </div>
</template>

<script>
//import x from ''
import { swiper, swiperSlide } from "vue-awesome-swiper";
// components
import Swiper from "../components/Swiper";
import Card from "../components/Card";

export default {
  name: "home",
  components: {
    Swiper,
    swiper,
    swiperSlide,
    Card
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss">
@import "../style.scss";
.nav-icons {
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
  }
}
.sprite {
  background: url(../assets/index.png) no-repeat 0 0;
  background-size: 28.8462rem;
  display: inline-block;
  &.sprite-news {
    width: 1.7692rem;
    height: 1.5385rem;
    background-position: 63.546% 15.517%;
  }
  &.sprite-arrow {
    width: 0.7692rem;
    height: 0.7692rem;
    background-position: 38.577% 52.076%;
  }
}
</style>