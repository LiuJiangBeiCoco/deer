
export default [
  {
    path: '/',
    name: 'home',
    meta:{
      title:'首页',
      defaultSelectedKeys:'home'
    },
    component:  ()=> import('@/views/Home.vue'),
  },
  {
    path:'/home',
    redirect:to =>{
      return '/'
    }
  },
  {
    path: '/order',
    name: 'order',
    meta:{
      title:'订单管理',
      defaultSelectedKeys:'order'
      
    },
    component: ()=> import('@/views/Order.vue')
  },
  {
    path: '/send',
    name: 'send',
    meta:{
      title:'发货管理',
      defaultSelectedKeys:'send'
    },
    component: ()=> import('@/views/Send.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    meta:{
      title:'客户管理',
      defaultSelectedKeys:'customer'
    },
    component: ()=> import('@/views/Customer.vue')
  },
  {
    path: '/repertory',
    name: 'repertory',
    meta:{
      title:'仓库管理',
      defaultSelectedKeys:'repertory'
    },
    component: ()=> import('@/views/Repertory.vue')
  },
  {
    path: '/finance',
    name: 'finance',
    meta:{
      title:'资金管理',
      defaultSelectedKeys:'finance'
    },
    component: ()=> import('@/views/Finance.vue')
  },
  {
    path: '/coupon',
    name: 'coupon',
    meta:{
      title:'代金券管理',
      defaultSelectedKeys:'coupon'
    },
    component: ()=> import('@/views/Coupon.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    meta:{
      title:'商品管理',
      defaultSelectedKeys:'goods'
    },
    component: ()=> import('@/views/Goods.vue')
  },
  {
    path: '/dailySheet',
    name: 'dailySheet',
    meta:{
      title:'日结报表',
      defaultSelectedKeys:'dailySheet'
    },
    component: ()=> import('@/views/DailySheet.vue')
  },
]
