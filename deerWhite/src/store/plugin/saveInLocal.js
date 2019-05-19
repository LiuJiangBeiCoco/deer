 const saveInLocal = store =>{
    //每次store初始化时候调用
    // console.log('store初始化')
    if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
    store.subscribe((mutations,state) => {
        //每次提交mutation的时候调用
        // console.log('提交了一个mutation')
        localStorage.state = JSON.stringify(state);
    
    })
}
export default saveInLocal 
