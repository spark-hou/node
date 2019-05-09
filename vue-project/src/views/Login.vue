<template>
    <div class="bg">
        <div class="login-box">
            <form action="">
                <div class="title">欢迎登陆</div>
                <div class="body">
                    <label for="" class="input-box">
                        <i class="fa fa-user"></i>
                        <input type="text" placeholder="请输入昵称">
                    </label>
                    <label for="" class="input-box">
                        <i class="fa fa-key"></i>
                        <input type="password" placeholder="请输入密码">
                    </label>
                    <button type="button">登陆</button>
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
    export default {
        name: "Login",

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

                    a{
                        text-decoration: none;
                        color: #999999;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>