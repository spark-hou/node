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
                    <el-button @click="showHandle(scope.row)" type="text" size="small">查看</el-button>
                    <el-button @click="editHandle(scope,scope.row)" type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--查看用户详细信息-->
        <el-dialog title="用户详细信息" :visible.sync="seeBoxVisible">
            <el-form :model="showInfoBox" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号">
                    <el-input v-model="showInfoBox.username" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="头像">
                    <img :src="showInfoBox.avatar" alt="" class="avatar">
                </el-form-item>
                <el-form-item label="用户ID">
                    <el-input v-model="showInfoBox.id" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="showInfoBox.nickname" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="账户级别">
                    <el-input v-model="showInfoBox.role_name" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-input v-model="showInfoBox.sex" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="showInfoBox.tel" :disabled="true"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="seeBoxVisible = false">取 消</el-button>
            </div>
        </el-dialog>
        <!--编辑用户详细信息-->
        <el-dialog title="编辑用户详细信息" :visible.sync="editBoxVisible">
            <el-form :model="editInfoBox" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号">
                    <el-input v-model="editInfoBox.username" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="头像">
                    <el-upload
                            class="avatar-uploader"
                            action="/api/upload/common"
                            :show-file-list="false"
                            :headers="headers"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="editInfoBox.avatar" :src="editInfoBox.avatar" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="用户ID">
                    <el-input v-model="editInfoBox.id" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="editInfoBox.nickname"></el-input>
                </el-form-item>
                <el-form-item label="账户级别">
                    <el-select v-model="editInfoBox.role" placeholder="请选择">
                        <el-option
                                v-for="item in role"
                                :key="item.id"
                                :label="item.role_name"
                                :value="item.id">

                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="editInfoBox.sex" placeholder="请选择">
                        <el-option value="男">男</el-option>
                        <el-option value="女">女</el-option>

                    </el-select>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="editInfoBox.tel"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editBoxVisible = false">取 消</el-button>
                <el-button @click="submitEdit" type="primary">提交</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "UserList",
        data() {
            return {
                search: '',
                tableData: [],
                editBoxVisible: false,
                seeBoxVisible: false,
                showInfoBox: {
                    avatar: "",
                    id: '',
                    nickname: "",
                    role: '',
                    role_name: "",
                    sex: "",
                    tel: '',
                    username: "",
                },
                editInfoBox: {
                    avatar: "",
                    id: '',
                    nickname: "",
                    role: '',
                    role_name: "",
                    sex: "",
                    tel: '',
                    username: "",
                },
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`,
                },
                role: [],
                roleIndex:'',
            };
        },
        methods: {
            getUserList() {
                this.$http.get('/api/user/list', {
                    //在axios的拦截器里添加了头部
                    // headers:{Authorization: `Bearer ${sessionStorage.token}`},
                }).then((res) => {
                    console.log('设置拦截器之后的res', res);
                    this.tableData = [...res.data];
                })
            },
            showHandle(row) {
                this.seeBoxVisible = true;
                console.log(row);
                this.showInfoBox = {...row};
            },
            editHandle(scope,row) {
                this.editBoxVisible = true;
                this.editInfoBox = {...row};
                this.$http.get('/api/role/list').then((res) => {
                    this.role = [...res.data];
                })
                this.roleIndex=scope.$index;
            },
            //提交编辑的数据
            submitEdit() {
                let obj = {...this.editInfoBox};
                this.$http.post('/api/user/info/update', {
                    ...this.editInfoBox, uid: this.editInfoBox.id
                }).then((res) => {
                    this.editBoxVisible = false;
                    this.$message(res.msg);
                   this.tableData.splice(this.roleIndex,1,obj)


                })
            },
            handleAvatarSuccess(res, file) {
                this.editInfoBox.avatar = res.src;
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg' || 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }

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

        .avatar-uploader {
            .el-upload {
                border: 1px dashed #d9d9d9;
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
            }

            .el-upload:hover {
                border-color: #409EFF;
            }

            .avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 178px;
                height: 178px;
                line-height: 178px;
                text-align: center;
            }

            .avatar {
                width: 178px;
                height: 178px;
                display: block;
            }
        }


    }
</style>