import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes
})
export default router
