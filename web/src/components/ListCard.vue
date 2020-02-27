<!-- 组件说明 -->
<template>
  <div class>
    <Card :title="title" :icon="icon">
      <div class="nav jc-between">
        <div
          class="nav-item"
          :class="{active:active === index}"
          v-for="(category, index) in categories"
          :key="index"
          @click="$refs.list.swiper.slideTo(index)"
        >
          <div class="nav-link">{{category.name}}</div>
        </div>
      </div>
      <swiper
        class="pt-2 d-flex"
        ref="list"
        @slide-change="() => active = $refs.list.swiper.realIndex"
        :options="{autoHeight:true}"
      >
        <swiper-slide v-for="(category, index) in categories" :key="index">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </Card>
  </div>
</template>

<script>
//import x from ''
import { swiper, swiperSlide } from "vue-awesome-swiper";

import Card from "./Card";
export default {
  components: {
    swiper,
    swiperSlide,
    Card
  },
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data() {
    return {
      active: 0
    };
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