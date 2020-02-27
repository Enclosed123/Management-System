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

    <List-Card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 d-flex"
          v-for="(news, index) in category.newsList"
          :key="index"
        >
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="text-dark flex-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </List-Card>
    <List-Card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap text-center" style="margin:0 -0.5rem">
          <div
            class="p-2"
            style="width:20%"
            v-for="(hero, index) in category.heroList"
            :key="index"
          >
            <img :src="hero.avatar" alt class="w-100" />
            <div>{{hero.name}}</div>
          </div>
        </div>
      </template>
    </List-Card>
  </div>
</template>

<script>
//import x from ''
// components
import Swiper from "../components/Swiper";
import ListCard from "../components/ListCard";
import dayjs from "dayjs";

export default {
  name: "home",
  components: {
    Swiper,
    ListCard
  },
  data() {
    return {
      newsCats: [],
      heroCats: []
    };
  },
  computed: {},
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    }
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  },
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  }
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