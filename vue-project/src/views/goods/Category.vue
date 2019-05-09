<template>
    <div class="category-box">
        <div class="block">
            <p>全部分类</p>
            <el-tree
                    :data="data"
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false"
                    :render-content="renderContent">
            </el-tree>
        </div>
    </div>
</template>

<script>
    let id = 1000;
    export default {
        name: "Category",
        data() {
            const data = [
                {
                    id: 1,
                    label: '全部分类',
                    children: [
                        {
                            id: 2,
                            label: '111',
                        },
                        {
                            id: 3,
                            label: '111',
                        },
                    ],
                },
                {
                    id: 4,
                    label: '全部分类',
                    children: [
                        {
                            id: 5,
                            label: '111',
                        },
                        {
                            id: 6,
                            label: '111',
                        },
                    ],
                },
                {
                    id: 7,
                    label: '全部分类',
                    children: [
                        {
                            id: 8,
                            label: '111',
                        },
                        {
                            id: 9,
                            label: '111',
                        },
                    ],
                },
            ];
            return {
                data: JSON.parse(JSON.stringify(data))
            };
        },
        methods: {
            append(data,value) {
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

            renderContent(h, {node, data, store}) {
                return (
                    <span class="custom-tree-node">
                    <span>{node.label}</span>
                    <span class="button-group">
                    <el-button size="mini" type="text" on-click={() => this.addHandle(data)}>添加</el-button>
                <el-button size="mini" type="text" on-click={() => this.editHandle(node, data)}>编辑</el-button>
                <el-button size="mini" type="text" on-click={() => this.delHandle(node, data)}>删除</el-button>
                </span>
                </span>
                );
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
                    this.append(data,value);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            editHandle(node, data){
                console.log(node)
            },
        },
    }
</script>

<style lang="scss">
    .custom-tree-node {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

</style>