import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/index.less'
// 加载vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)// 注册使用

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
