<template>
    <div class="bg">
        <div class="login-box">
            <form action="">
                <div class="title">欢迎登陆</div>
                <div class="body">
                    <label for="" class="input-box">
                        <i class="fa fa-user"></i>
                        <input type="text" placeholder="请输入昵称" v-model="formData.username">
                    </label>
                    <label for="" class="input-box">
                        <i class="fa fa-key"></i>
                        <input type="password" placeholder="请输入密码" v-model="formData.password">
                    </label>
                    <button type="button" @click="loginHandle">登陆</button>
                    <div class="link-box">
                        <router-link to="/register">注册账户</router-link>
                        <a href="">忘记密码？</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapActions}from'vuex'
    export default {
        name: "Login",
        props: ['redirect',],
        data() {
            return {
                formData: {
                    username: '',
                    password: '',
                },
            };
        },
        methods: {
            // loginHandle() {
            //     //表单验证
            //     this.$http.post('/api/user/login', {
            //         ...this.formData
            //     }).then((res) => {
            //         console.log('设置拦截器之后的res', res);
            //         if (res.status) {
            //             //存储token,role(1:超管，2普管，3：运营)
            //             sessionStorage.token = res.data.token;
            //             sessionStorage.uid = res.data.id;
            //             sessionStorage.role=res.data.role;
            //             //跳转
            //             this.$message({
            //                 message: res.msg,
            //                 onClose: () => {
            //                     console.log('query信息',this.$route.query.redirect);
            //                     if (this.$route.query.redirect) {
            //                         this.$router.push({path:this.redirect});
            //                     } else {
            //                         this.$router.push({name: 'Index'});
            //                     }
            //                     // this.$router.push({name: 'Index'});
            //                 },
            //
            //             });
            //         } else {
            //             this.$message(res.msg);
            //         }
            //     })
            // },
            loginHandle(){

              this.$store.dispatch('Login',{...this.formData})

            },
        },
        created() {
            console.log(this.$route.query,this.redirect)
        },
    }
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
    }

    .bg {
        width: 100%;
        height: 100vh;
        background-image: url('../assets/img/register/bg.jpg');
        background-size: cover;
        position: relative;

        .login-box {
            font-size: 14px;
            position: absolute;
            background-color: white;
            border-radius: 4px;
            width: 300px;
            top: 50%;
            right: 40px;
            transform: translateY(-50%);

            .title {
                font-size: 16px;
                color: #666;
                padding: 15px 20px;
                border-bottom: 1px solid #eee;
            }

            .body {
                padding: 16px;

                .input-box {
                    height: 30px;
                    display: flex;
                    align-items: center;
                    width: 200px;
                    margin: 20px auto 0 auto;
                    border-radius: 5px;
                    border: 1px solid #eeeeee;
                    overflow: hidden;

                    i {
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        text-align: center;
                        line-height: 30px;
                        background-color: #F8F8F9;
                        border-right: 1px solid #eeeeee;
                        color: #4D566B;
                    }

                    input {
                        height: 30px;
                        border: none;
                        padding-left: 5px;
                        width: 100%;
                    }
                }

                button {
                    display: block;
                    width: 200px;
                    margin: 20px auto;
                    background-color: #2D8CF0;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                    outline: none;
                    border: none;
                    border-radius: 4px;
                    color: white;
                }

                .link-box {
                    width: 200px;
                    display: flex;
                    color: #999999;
                    justify-content: space-between;
                    margin: 0 auto;

                    a {
                        text-decoration: none;
                        color: #999999;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>