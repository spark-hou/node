<template>
    <div class="category-box">
        <div class="block">
            <p>分类</p>
            <el-tree
                    node-key="id"
                    :props="defaultProps"
                    :load="loadNode"
                    lazy
                    :expand-on-click-node="true">
           <span class="custom-tree-node" slot-scope="{ node, data }">
                 <span>{{ node.label }}</span>
          <span>
          <el-button type="text" size="mini" @click.stop="editHandle(node,data)">编辑</el-button>
          <el-button type="text" size="mini" @click.stop="openAddHandle(node,data)">添加</el-button>
          <el-button type="text" size="mini" @click.stop="delHandle(node, data)">删除</el-button>
        </span>
         </span>
            </el-tree>
        </div>

        <el-dialog title="编辑节点" :visible.sync="editModel">
            <el-form label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="editForm.name"></el-input>
                </el-form-item>
                <el-upload
                        class="avatar-uploader"
                        action="/api/upload/common"
                        :show-file-list="false"
                        :on-success="uploadSuccess2"
                        :headers="headers"
                        :before-upload="beforeUpload2">
                    <img v-if="editForm.img" :src="editForm.img" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="editModel = false">取 消</el-button>
                <el-button type="primary" @click="confirmEditHandle">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="添加节点" :visible.sync="addModel">
            <el-form label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="addForm.name"></el-input>
                </el-form-item>
                <el-upload
                        class="avatar-uploader"
                        action="/api/upload/common"
                        :show-file-list="false"
                        :on-success="uploadSuccess"
                        :headers="headers"
                        node-key="id"
                        updateKeyChildren
                        :before-upload="beforeUpload">
                    <img v-if="addForm.img" :src="addForm.img" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="addModel = false">取 消</el-button>
                <el-button type="primary" @click="confirmAddHandle">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    let id = 1000;
    export default {
        name: "Category",
        data() {
            return {
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                currentNodeData: [],
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`,
                },
                addForm: {
                    name: '',
                    img: '',
                    pId: '',
                },
                editForm: {
                    name: '',
                    img: '',
                    id: '',
                },
                editModel: false,
                addModel: false,
                form: {
                    name: '',
                },
                imageUrl: '',
            };
        },
        methods: {
            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },
                 //删除节点
            delHandle(node, data) {
                // console.log(node)
                // console.log(data);
                // console.log(node.parent.childNodes.indexOf(node));

                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.post('/api/category/delete', {
                        id: data.id,
                    }).then((res) => {
                        let index = node.parent.childNodes.indexOf(node);
                        node.parent.childNodes.splice(index, 1);
                        this.$message({
                            type: 'info',
                            message: res.msg,
                        });
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            //打开添加窗口，获取pid
            openAddHandle(node, data) {
                this.addModel = true;
                this.addForm.pId = data.id;
                //转存data
                this.currentNodeData = data;

            },
            //确定添加节点
            confirmAddHandle() {
                //表单验证
                this.$http.post('/api/category/add', {
                    ...this.addForm
                }).then((res) => {
                    if (res.status) {
                        this.$message(res.msg);
                    }
                    let newChild = {...this.addForm, id: res.data.id};
                    this.$set(this.currentNodeData, 'children', []);
                    this.currentNodeData.children.push(newChild);
                    this.addModel = false;
                    this.addForm = {
                        name: '',
                        img: '',
                        pId: '',
                    };
                });
            },
            //打开编辑窗口
            editHandle(node, data) {
                this.editModel = true;
                console.log(data);
                //转存数据
                this.editForm.name = data.name;
                this.editForm.id = data.id;
                this.editForm.img = data.img;
                this.currentNodeData = data;
            },
            //提交修改内容
            confirmEditHandle() {
                this.$http.post('/api/category/update', {
                    ...this.editForm
                }).then((res) => {
                    this.$message(res.msg);
                    this.editModel = false;
                    this.currentNodeData.name = this.editForm.name;
                    this.currentNodeData.img = this.editForm.img;
                    this.editForm = {
                        name: '',
                        img: '',
                        id: '',
                    };
                })
            },
            uploadSuccess(res, file) {
                this.addForm.img = res.src;

            },
            uploadSuccess2(res, file) {
                this.editForm.img = res.src;

            },
            beforeUpload(file) {
                const isJPG = file.type === 'image/jpeg' || 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            beforeUpload2(file) {
                const isJPG = file.type === 'image/jpeg' || 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{name: '全部节点', id: 1}]);
                }
                console.log(node);
                this.$http.get('/api/category/sub', {
                    params: {
                        pId: node.data.id,
                    },
                }).then((res) => {
                    resolve(res.data)
                })
            },


        },

    }
</script>

<style lang="scss">
    .category-box {
        .custom-tree-node {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .avatar-uploader .el-upload:hover {
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

</style>