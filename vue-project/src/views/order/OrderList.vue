<template>
    <div class="order-list">
        <el-row class="search-box">
            <el-col :span="3">
                <el-input v-model="search" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" class="searchBtn" @click="startSearch">查询</el-button>
            </el-col>
        </el-row>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    label="商品名称"
                    width="600">
                <template slot-scope="scope">
                    <div class="title-box">
                        <div class="title-content">
                            <span class="title">{{ scope.row.name }}</span>
                            <span class="content">商品库存{{scope.row.hotPoint}}</span>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    prop="payment"
                    label=付款金额
                    width="250">
            </el-table-column>
            <el-table-column

                    prop="status"
                    label="订单状态"
                    width="250">
            </el-table-column>
            <el-table-column

                    prop="create_time"
                    label="创建时间"
                    width="250">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="150">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
                    <el-button type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "OrderList",

        methods: {
            handleClick(row) {
                console.log(row);
            },
            loadOrder() {
                this.$http.post('/api/order/list',{}).then((res) => {
                    this.tableData=[...res.data];
                    console.log(this.tableData)
                })
            },
            startSearch(){

            },
        },

        data() {
            return {
                search: '',
                tableData: [],
            }
        },
        created() {
            this.loadOrder();
        }
    }
</script>

<style scoped lang="scss">
    .order-list {
        .search-box {
            margin: 20px 0;

            .searchBtn {
                margin-left: 10px;
            }
        }

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
</style>