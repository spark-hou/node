<template>
    <div>
        <el-container class="container">
            <el-header style="padding: 0">
                <HeaderBar></HeaderBar>
            </el-header>
            <el-container>
                <el-aside width="250px">
                    <LeftMenu></LeftMenu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HeaderBar from '@/components/HeaderBar.vue';
    import LeftMenu from '@/components/LeftMenu.vue';

    export default {
        name: 'index',
        components: {HeaderBar, LeftMenu},
    }
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
    }

    .el-header, .el-footer {
        background-color: #545D64;
        color: white;
    }

    .el-aside {
        background-color: #545D64;
        color: white;
        text-align: center;
    }

    .el-main {
        background-color: white;
        color: #333;
    }


    .container {
        width: 100%;
        min-height: 100vh;
        background-color: red;
    }
</style>
