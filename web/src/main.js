import Vue from 'vue'
import App from './App.vue'
// import 'vue-awesome-swiper'

Vue.config.productionTip = false

import "./style.scss"
import "./assets/font_wo35fwx03i/iconfont.css"
import router from './router'

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:3000/web/api"
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
