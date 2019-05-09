// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(Router)
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

// 1. import 进来views文件夹下的页面级组件。
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Index from '@/views/Index.vue';
import GoodsCategory from '@/views/goods/Category';
// /**
//  * 2. 定义路由
//  * 每个路由应该映射一个组件。
//  * 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，
//  * 或者，只是一个组件配置对象。
//  */

const routes = [
    {path: '/login', component: Login, name: 'Login'},
    {path: '/register', component: Register, name: 'Register'},
    {path: '/index', component: Index, name: 'Index',alias: '/',children:[
            {path: '/goods/category', component: GoodsCategory, name: 'GoodsCategory'},
        ],},

]

// 3. 创建 router 实例，然后传 `routes` 配置。
const router = new Router({
    routes // (缩写) 相当于 routes: routes
})

export default router
