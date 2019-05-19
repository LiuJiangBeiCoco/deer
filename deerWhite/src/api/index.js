import {get,post} from './https'
const requestBookList = async () => {
    let {url,params,isLoading} = {
        isLoading:true,
        url:'bookList',
        params:{
            name:'Danio',
        }
    }
    let res = await get(url,params,isLoading)
    if(res) return res
}
const requestLearn = async () => {
    let {url,params,isLoading} = {
        isLoading:true,
        url:'learn',
        params:{
            name:'Danio'
        },
    }
    let res = await post(url,params,isLoading)
    if(res) return res
}
export  {
    requestBookList,
    requestLearn
}