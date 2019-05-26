import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/util'
import store from '@/store'
Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes
})
router.beforeEach((to,from,next)=>{
  //改变title
  to.meta && setTitle(to.meta.title);

  //改变
  store.commit('REMEMBERE_NAV',{selectedNav:to.meta.defaultSelectedKeys,breadNav:to.meta.title})
  next()
})

  
export default router
