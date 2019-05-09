<template>
    <div class="category-box">
        <div class="block">
            <p>全部分类</p>
            <el-tree
                    :data="data"
                    show-checkbox
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false"
                    :render-content="renderContent">
            </el-tree>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data() {
            const data = [
                {
                    id: 1,
                    label: '全部分类'
                },
            ];
            return {
                data: JSON.parse(JSON.stringify(data))
            };
        },
        methods: {
            append(data) {
                const newChild = { id: id++, label: 'testtest', children: [] };
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

            renderContent(h, { node, data, store }) {
                return (
                    `<span class="custom-tree-node">
                    <span>{node.label}</span>
                    <span>
                    <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
                <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
                </span>
                </span>`);
            }
        },
    }
</script>

<style lang="scss">


</style>