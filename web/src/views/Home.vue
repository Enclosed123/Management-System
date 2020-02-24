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
        <div class="py-2" v-for="(news, index) in category.newList" :key="index">
          <span>{{news.categoryName}}</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
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

export default {
  name: "home",
  components: {
    Swiper,
    ListCard
  },
  data() {
    return {
      newsCats: [
        {
          name: "热门",
          newList: [
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            }
          ]
        },
        {
          name: "热门",
          newList: [
            {
              categoryName: "x",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            }
          ]
        },
        {
          name: "热门",
          newList: [
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            }
          ]
        },
        {
          name: "热门",
          newList: [
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            }
          ]
        },
        {
          name: "热门",
          newList: [
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            },
            {
              categoryName: "公告",
              title: "2月18日全服不停机更新公告",
              date: "02/17"
            }
          ]
        }
      ]
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