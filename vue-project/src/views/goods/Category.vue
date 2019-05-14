<template>
    <div class="category-box">
        <div class="block">
            <p>分类</p>
            <el-tree :data="data"
                     node-key="id"
                     :props="defaultProps"
                     :load="loadNode"
                     lazy

                     :expand-on-click-node="false">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                 <span>{{ node.label }}</span>
          <span>
          <el-button type="text" size="mini" @click="editModel = true">编辑</el-button>
          <el-button type="text" size="mini" @click="">添加</el-button>
          <el-button type="text" size="mini" @click="">删除</el-button>
        </span>
         </span>
            </el-tree>
        </div>

        <el-dialog title="编辑节点" :visible.sync="editModel">
            <el-form :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="editModel = false">取 消</el-button>
                <el-button type="primary" @click="editModel = false">确 定</el-button>
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
                data: [
                    {
                        id: 1,
                        name: '全部分类',
                        children: [
                            {
                                id: 2,
                                name: '111',
                            },
                            {
                                id: 3,
                                name: '111',
                            },
                        ],
                    },
                ],
                editModel: false,
                form: {
                    name: '',
                },
                imageUrl: '',
            };
        },
        methods: {
            append(data, value) {
                const newChild = {id: id++, label: value, children: []};
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },

            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },

            delHandle(node, data) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.remove(node, data);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            addHandle(data) {
                this.$prompt('添加内容', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /^(\d|[\u4e00-\u9fa5]|[a-z0-9\$#@=\.]){1,10}$/,
                    inputErrorMessage: '1-10个字符'
                }).then(({value}) => {
                    this.append(data, value);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            editHandle(node, data) {
                console.log(node)
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: '全部节点',id:1 }]);
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