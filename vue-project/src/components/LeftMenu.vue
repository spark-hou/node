<template>
    <div>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo left-menu"
                :default-openeds="['1']"
                background-color="#545c64"
                text-color="#fff"
                unique-opened
                router
                active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>商品管理</span>
                </template>
                <el-menu-item index="/goods/category">商品分类</el-menu-item>
                <el-menu-item index="/goods/release">发布商品</el-menu-item>
                <el-menu-item index="/goods/list">商品列表</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-custom"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/user/userlist">用户列表</el-menu-item>
                <el-menu-item index="2-2">发布商品</el-menu-item>
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
    export default {
        name: "LeftMenu",
        methods: {},
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