<template>
    <div class="user-list">
        <div class="page-title">
            <span>客户列表</span>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-row class="search-box">
            <el-col :span="3">
                <el-input v-model="search" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" class="searchBtn">查询</el-button>
            </el-col>
        </el-row>
        <el-table
                :data="tableData"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}"
        >
            <el-table-column
                    prop="id"
                    label="#"
                    width="80">
            </el-table-column>
            <el-table-column

                    label="头像"
                    sortable
                    width="180">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" alt="" class="avatar">
                </template>

            </el-table-column>
            <el-table-column
                    prop="username"
                    label="账号"
                    sortable
                    width="280">
            </el-table-column>
            <el-table-column
                    prop="nickname"
                    label="昵称"
                    sortable
                    width="180"
            >
            </el-table-column>
            <el-table-column
                    prop="sex"
                    label="性别"
                    sortable
                    width="180"
            >
            </el-table-column>
            <el-table-column
                    prop="tel"
                    label="电话"
                    sortable
                    width="280"
            >
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "UserList",
        data() {
            return {
                search: '',
                tableData: [

                ],
            };
        },
        methods: {
            getUserList() {
                this.$http.get('/api/user/list', {
                    //在axios的拦截器里添加了头部
                    // headers:{Authorization: `Bearer ${sessionStorage.token}`},
                }).then((res)=>{
                    console.log('设置拦截器之后的res', res);
                    this.tableData=[...res.data];
                })
            },
        },
        created() {
            this.getUserList();
        },
    }
</script>

<style scoped lang="scss">
    .user-list {
        .page-title {
            display: flex;
            justify-content: space-between;
            padding-bottom: 20px;
            border-bottom: 1px solid #999999;

            > span {
                font-size: 20px;
                font-weight: bolder;
            }
        }

        .search-box {
            margin: 20px 0;

            .searchBtn {
                margin-left: 10px;
            }
        }

        .avatar {
            width: 50px;
            height: 50px;
        }
    }
</style>