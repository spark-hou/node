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
                <el-input v-model="input" placeholder="请输入内容"></el-input>
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
                    prop="img"
                    label="头像"
                    sortable
                    width="180">
                <img src="@/assets/logo.png" alt="" class="avatar">
            </el-table-column>
            <el-table-column
                    prop="num"
                    label="账号"
                    sortable
                    width="280">
            </el-table-column>
            <el-table-column
                    prop="nickName"
                    label="昵称"
                    sortable
                    width="180"
                    :formatter="formatter">
            </el-table-column>
            <el-table-column
                    prop="sex"
                    label="性别"
                    sortable
                    width="180"
                    :formatter="formatter">
            </el-table-column>
            <el-table-column
                    prop="tel"
                    label="电话"
                    sortable
                    width="280"
                    :formatter="formatter">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "UserList",
        data() {
            return {
                tableData: [{
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    num:'13112312412414',
                    nickName:'asda',
                    sex:'男',
                    tel:'1313131313',
                }, {
                    id: 2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    num:'13112312412414',
                    nickName:'asda',
                    sex:'男',
                    tel:'1313131313',
                }, {
                    id: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    num:'13112312412414',
                    nickName:'asda',
                    sex:'男',
                    tel:'1313131313',
                }, {
                    id: 4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    num:'13112312412414',
                    nickName:'asda',
                    sex:'男',
                    tel:'1313131313',
                }]
            };
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