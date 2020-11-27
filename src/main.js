import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

import toast from "@/components/common/toast";

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue

// 安装Toast插件
Vue.use(toast)

// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('@/assets/images/common/placeholder.png')
})

// 解决移动端点击延迟300毫秒的问题
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
