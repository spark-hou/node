<template>
    <div>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo left-menu"
                :default-openeds="['1']"
                background-color="#545c64"
                text-color="#fff"
                unique-opened
                :collapse="isCollapse"
                router
                active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>商品管理</span>
                </template>
                <el-menu-item index="/goods/category">商品分类
                </el-menu-item>
                <el-menu-item index="/goods/release">发布商品</el-menu-item>
                <el-menu-item index="/goods/list">商品列表</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-custom"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/user/userlist">用户列表</el-menu-item>
                <el-menu-item >发布商品</el-menu-item>
                <el-menu-item v-if="role===1" >超管菜单（1）</el-menu-item>
                <el-menu-item v-if="role===1||role===2">普管菜单（2）</el-menu-item>
                <el-menu-item >运营菜单（3）</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-notebook-2"></i>
                    <span>订单管理</span>
                </template>
                <el-menu-item index="/order/orderlist">订单列表</el-menu-item>
                <el-menu-item index="3-2">发布商品</el-menu-item>
                <el-menu-item index="3-3">商品列表</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>商品管理</span>
                </template>
                <el-menu-item index="4-1">
                    商品分类
                </el-menu-item>
                <el-menu-item index="4-2">发布商品</el-menu-item>
                <el-menu-item index="4-3">商品列表</el-menu-item>
            </el-submenu>

        </el-menu>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "LeftMenu",
        data(){
            return{
                role:'',
            }
        },
        methods: {

        },
        computed:mapState({
            isCollapse: state=>state.menu.isCollapse,
            // role:state=>state.user.role,
        }) ,
        created() {
            this.role=parseInt(sessionStorage.role);
        }

    }
</script>

<style lang="scss">
    .left-menu {
        border-right: none !important;

        .el-submenu__title {
            display: flex;
            align-items: center;
            padding-left: 67px !important;
        }
    }

</style>