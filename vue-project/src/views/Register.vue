<template>
    <div class="bg">
        <div class="register-box">
            <form action="">
                <div class="title">注册新账户</div>
                <div class="body">
                    <label for="" class="input-box">
                        <i class="fa fa-male"></i>
                        <input type="text" placeholder="请输入昵称" v-model="formData.nickname">
                    </label>
                    <label for="" class="input-box">
                        <i class="fa fa-phone"></i>
                        <input type="text" placeholder="请输入手机号" v-model="formData.tel">
                    </label>
                    <div class="input-box">
                        <i class="fa fa-mars-double"></i>
                        <div class="sex-box">
                            <span><input type="radio" name="1" checked id="man" value="男" v-model="formData.sex"> <i
                                    class="fa fa-mars"></i><label
                                    for="man">男</label></span>
                            <span><input type="radio" name="1" id="woman" value="女" v-model="formData.sex"><i
                                    class="fa fa-venus"></i> <label
                                    for="woman">女</label></span>
                        </div>
                    </div>
                    <label for="" class="input-box">
                        <i class="fa fa-user"></i>
                        <input type="text" placeholder="请输入账号" v-model="formData.username">
                    </label>
                    <label for="" class="input-box">
                        <i class="fa fa-lock"></i>
                        <input type="password" placeholder="请输入密码" v-model="formData.password">
                    </label>
                    <button type="button" @click="registerHandle">注册</button>
                    <div class="link-box">
                        <router-link to="/login">密码登陆</router-link>
                        <a href="">忘记密码？</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data: function () {
            return {
                formData: {
                    username: '',
                    password: '',
                    nickname: '',
                    sex: '男',
                    tel: '',
                },

            };

        },
        methods: {
            registerHandle() {
                // 表单验证
                console.log({...this.formData});
                this.$http.post('/api/user/register', {
                    ...this.formData

                }).then((res) => {
                    console.log(res.data);
                    if (res.data.status) {
                        //存储token
                        sessionStorage.token=res.data.data.token;
                        sessionStorage.uid=res.data.data.id;
                        //跳转

                        this.$message({
                            message:res.data.msg,
                            onClose:()=>{
                                this.$router.push({name: 'Index'});
                            },
                        });
                    } else {
                        this.$message(res.data.msg);
                    }
                });
                1
            },

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

        .register-box {
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

                .sex-box {
                    height: 30px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    justify-content: space-between;

                    span {
                        display: flex;
                        align-items: center;
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