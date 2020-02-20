<!-- 组件说明 -->
<template>
  <div class="">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="../assets/slide.jpeg" class="w-100" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/slide2.jpeg" class="w-100" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/slide3.jpeg" class="w-100" alt />
      </swiper-slide>
      <div class="swiper-pagination text-right" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
//import x from ''

import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {},
  mounted() {
    this.swiper.slideTo(0);
  }
};
</script>
<style>

</style>