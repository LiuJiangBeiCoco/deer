import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import saveInLocal from './plugin/saveInLocal'
Vue.use(Vuex)
export default new Vuex.Store({
  //如果为开发版本严格模式为true，不准许对直接对state直接赋值，
  //而是需要提交mutation对state进行改变，否则报错
  strict:process.env.NODE_ENV === 'development',
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [saveInLocal]
})










