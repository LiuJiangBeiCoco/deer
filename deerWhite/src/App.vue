<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed">
      <div class="logo"/>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[selectedNav]">
        <a-menu-item v-for=" item in asideNav" :key="item.defaultSelectedKeys" @click="navHandle(item)">
          <router-link :to="item.link">
            <a-icon :type="item.icon"/>
            <span>{{item.name}}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      {{breadNav}}
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return {
      collapsed: false,
      asideNav:[
        {name:'首页',icon:'home',link:'/home',defaultSelectedKeys:'home'},
        {name:'订单管理',icon:'ordered-list',link:'/order',defaultSelectedKeys:'order'},
        {name:'发货管理',icon:'deployment-unit',link:'/send',defaultSelectedKeys:'send'},
        {name:'客户管理',icon:'team',link:'/customer',defaultSelectedKeys:'customer'},
        {name:'仓库管理',icon:'layout',link:'/repertory',defaultSelectedKeys:'repertory'},
        {name:'资金管理',icon:'dollar',link:'/finance',defaultSelectedKeys:'finance'},
        {name:'代金券管理',icon:'book',link:'/coupon',defaultSelectedKeys:'coupon'},
        {name:'商品管理',icon:'gold',link:'/goods',defaultSelectedKeys:'goods'},
        {name:'日结报告',icon:'file-text',link:'/dailySheet',defaultSelectedKeys:'dailySheet'},
      ],
    }
  },
  methods:{
    navHandle(item){
      this.currentPage=item.name;
    }
  },
 computed:{
   ...mapState({
      selectedNav:state => state.selectedNav,
      breadNav:state => state.breadNav,
   })
 }
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .logo {
  background: #648E8A url(./assets/images/logo.jpg) no-repeat center;
  background-size: 32px 32px;
  margin: 14pX 10px;
  height: 40px;;
}
.ant-layout{
  height: 100%;
}
</style>
