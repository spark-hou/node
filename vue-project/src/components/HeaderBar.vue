<template>
    <div class="header-container">
        <div class="left">
            <img src="@/assets/img/goods/logo.png" alt="">
            <i class="el-icon-menu"></i>
        </div>
        <div class="right">
            <img src="@/assets/img/goods/avator.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar"
    }
</script>

<style lang="scss">
    .header-container {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
            padding-left: 20px;
            display: flex;
            align-items: center;
            width: 300px;
            justify-content: space-between;

            img {
                height: 60px;
            }

            i {
                color: white;
            }
        }

        .right {
            padding-right: 20px;
            display: flex;
            align-items: center;

            img {
                height: 40px;
            }
        }
    }
</style>