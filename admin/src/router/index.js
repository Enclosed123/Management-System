import Vue from 'vue'
import VueRouter from 'vue-router'
// import Main from '../views/Main.vue'
// 分类页面引入
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList'
// 物品页面引入
import ItemEdit from '../views/ItemEdit'
import ItemList from '../views/ItemList'
// 英雄页面引入
import HeroEdit from '../views/HeroEdit'
import HeroList from '../views/HeroList'
// 文章页面引入
import ArticleEdit from '../views/ArticleEdit'
import ArticleList from '../views/ArticleList'
// 轮播图广告页面引入
import AdEdit from '../views/AdEdit'
import AdList from '../views/AdList'
// 管理员页面引入
import AdminUserEdit from '../views/AdminUserEdit'
import AdminUserList from '../views/AdminUserList'

Vue.use(VueRouter)

const routes = [
  {
    path:"/login",
    name:"login",
    component:() => import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue'),
    children: [
      // 分类页面引入
      { path: "/categories/create", component: CategoryEdit },
      { path: "/categories/edit/:id", component: CategoryEdit, props: true },
      { path: "/categories/list", component: CategoryList },
      // 物品页面引入
      { path: "/items/create", component: ItemEdit },
      { path: "/items/edit/:id", component: ItemEdit, props: true },
      { path: "/items/list", component: ItemList },
      // 英雄页面引入
      { path: "/heroes/create", component: HeroEdit },
      { path: "/heroes/edit/:id", component: HeroEdit, props: true },
      { path: "/heroes/list", component: HeroList },
      // 文章页面引入
      { path: "/articles/create", component: ArticleEdit },
      { path: "/articles/edit/:id", component: ArticleEdit, props: true },
      { path: "/articles/list", component: ArticleList },
      // 轮播图广告页面引入
      { path: "/ads/create", component: AdEdit },
      { path: "/ads/edit/:id", component: AdEdit, props: true },
      { path: "/ads/list", component: AdList },
      // 管理员页面引入
      { path: "/admin_users/create", component: AdminUserEdit },
      { path: "/admin_users/edit/:id", component: AdminUserEdit, props: true },
      { path: "/admin_users/list", component: AdminUserList }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
