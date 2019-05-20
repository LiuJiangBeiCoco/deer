import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

import '@/assets/css/reset.css'

Vue.config.productionTip = false
const Bus = new Vue()
Vue.prototype.$bus = Bus
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


