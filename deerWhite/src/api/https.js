import axios from 'axios'
import store from '@/store'

axios.defaults.baseURL= 'https://www.easy-mock.com/mock/5c7e19ee726aba26bf2e6add/example/'
axios.defaults.timeout = 10000;
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('请求拦截')
    if(config.isLoading) {
        //加载loading
        store.commit('UPDATE_LOADING', true)
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  axios.interceptors.response.use(function (response) {
    store.commit('UPDATE_LOADING', false)
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

const get = (url,params,isLoading) =>{
    //isLoading 是否需要加载loading
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url,
            params,
            isLoading
        }).then(res => {
            resolve(res)
        }).catch(err =>{
            reject(err)
        })
    })
}
const post = (url,params,isLoading) =>{
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url,
            data:params,
            isLoading
        }).then(res => {
            resolve(res)
        }).catch(err =>{
            reject(err)
        })
    })
}
export {
    get,
    post
}