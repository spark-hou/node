<template>
    <div class="header-container">
        <div class="left">
            <img src="@/assets/img/goods/logo.png" alt="">
            <i class="el-icon-menu"></i>
        </div>
        <div class="right">
            <span>{{userInfo.nickname}}</span>
            <img :src="userInfo.avatar" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar",
        data() {
            return {
                userInfo:{},
            };
        },
        methods: {
            load() {
                this.$http.get('/api/user/info', {
                    params: {
                      uid:sessionStorage.uid,
                    },
                }).then((res)=>{
                    console.log(res)
                    this.userInfo={...res.data};

                })
            },
        },
        created() {
            this.load();
        },
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