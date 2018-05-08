// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import flexible from 'amfe-flexible'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// axios请求接口
Vue.prototype.$http = axios

// MOCK 数据
require('./mock.js')

Vue.config.productionTip = false

// 移动端点击3毫秒延迟
fastclick.attach(document.body)

// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

// swiper插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
