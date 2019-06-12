import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

//1.import 引入组件
import CubeUi from './views/CubeUi.vue';

//2.创建路由数组

const routes=[
  // { path: '/foo', component: Foo ,name:"Foo"},
  {path:'/',component:CubeUi,name:'CubeUi',}
];

//3.新建路由对象
const router=new Router({
  routes
})

export default router
