<template>

    <div class="list-box">
        <el-table
                :data="tableData"
                border
                class="goods-list"
                style="width: 100%">
            <el-table-column
                    fixed
                    label="商品名称"
                    width="600">
                <template slot-scope="scope">
                    <div class="title-box">
                        <img :src='scope.row.img_md' alt="" style="width: 60px;height: 60px">
                        <div class="title-content">
                            <span class="title">{{ scope.row.name }}</span>
                            <span class="content">商品库存{{scope.row.hotPoint}}</span>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格"
                    width="250">
            </el-table-column>
            <el-table-column

                    prop="marketPrice"
                    label="市场价"
                    width="250">
            </el-table-column>
            <el-table-column

                    prop="date"
                    label="发布时间"
                    width="250">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="150">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
                    <el-button type="danger" size="small" @click="delHandle(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="currentPage"
                :total="1000">
        </el-pagination>
    </div>

</template>

<script>
    export default {
        name: "List",
        page: '1',
        tableData: [],

        data() {
            return {
                tableData: [],
            }
        },
        methods: {
            handleClick(row) {
                this.$router.push({name: 'GoodsRelease'})
            },
            //页数改变
            currentPage(val) {
                this.page = val;
                this.loadPage();
            },
            //加载第一页
            loadPage() {
                this.$http.get('/api/goods', {
                    params:{
                        pageIndex: this.page
                    }
                }).then((res) => {
                    this.tableData = [...res.data];
                    console.log(res.data)
                })
            },
            //删除商品
            delHandle(row) {
                this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.post('/api/goods/delete', {
                        id: row.id
                    }).then((res) => {
                        this.$message({
                            type: 'success',
                            message: res.msg
                        });
                        let index=this.tableData.indexOf(row);
                        this.tableData.splice(index,1);
                    })


                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },
        created() {
            this.loadPage();
        }
    }
</script>

<style lang="scss">
    .list-box {
        .goods-list {
            .title-box {
                display: flex;
                align-items: center;

                .title-content {
                    padding-left: 10px;

                    .title {
                        display: block;
                        overflow: hidden;
                        width: 400px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    .content {
                        display: block;
                        overflow: hidden;
                        width: 400px;
                        height: 48px;
                    }
                }
            }
        }
    }

</style>