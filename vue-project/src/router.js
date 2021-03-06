// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(Router)
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

// 1. import 进来views文件夹下的页面级组件。
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Index from '@/views/Index.vue';
import GoodsCategory from '@/views/goods/Category';
import GoodsList from '@/views/goods/List';
import GoodsRelease from '@/views/goods/Release';
import UserUserList from '@/views/user/UserList';
import OrderOrderList from '@/views/order/OrderList';
// /**
//  * 2. 定义路由
//  * 每个路由应该映射一个组件。
//  * 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，
//  * 或者，只是一个组件配置对象。
//  */

const routes = [
    {path: '/login', component: Login,props:(route)=>route.query, name: 'Login', alias: '/'},
    {path: '/register', component: Register, name: 'Register'},
    {
        path: '/index', component: Index, meta: {requiresAuth: true}, name: 'Index', children: [
            {path: '/goods/category', meta: {requiresAuth: true}, component: GoodsCategory, name: 'GoodsCategory'},
            {path: '/goods/list', meta: {requiresAuth: true}, component: GoodsList, name: 'GoodsList'},
            {path: '/goods/release', meta: {requiresAuth: true}, component: GoodsRelease, name: 'GoodsRelease'},
            {path: '/user/userlist', meta: {requiresAuth: true}, component: UserUserList, name: 'UserUserList'},
            {path: '/order/orderlist', meta: {requiresAuth: true}, component: OrderOrderList, name: 'OrderOrderList'},
        ],
    },

];

// 3. 创建 router 实例，然后传 `routes` 配置。
const router = new Router({
    routes // (缩写) 相当于 routes: routes
});
//4.全局路由守卫
router.beforeEach((to, from, next) => {
    // console.log('路由守卫', 'to',to,'from', from, next);
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //如果没有session，返回登录页
        if (!sessionStorage.token) {
            alert('未登录');
            next({
                path: '/login',
                query: {
                  redirect:to.fullPath,
                },
            });
            return;
        }
        //登陆登陆
        next();
    } else {
        next() // 确保一定要调用 next()
    }


});
export default router
