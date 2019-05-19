const state = {
  userName:'Danio'
}
const mutations = {
  SET_USERNAME(state,params){
    state.userName = params.userName
  }
}
const actions = {
  upDateUserName({commit,state,rootState,dispatch}){
    // state指当前模块的state，rootState指的是根state，就是sore目录下sate.js中的state
    dispatch('xxx') //触发其他的action
  },
  xxx(){
    //
  }
}
export default {
  state,
  mutations,
  actions
}
