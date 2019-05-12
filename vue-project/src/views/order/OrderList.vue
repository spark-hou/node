<template>
    <el-table
            :data="tableData"
            border
            class="order-list"
            style="width: 100%">
        <el-table-column
                fixed
                label="商品名称"
                width="600">
            <template slot-scope="scope">
                <div class="title-box">
                    <img src="@/assets/img/goods/avator.png" alt="" style="width: 60px;height: 60px">
                    <div class="title-content">
                        <span>{{ scope.row.title }}</span>
                        <span>商品库存{{scope.row.num}}</span>
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

                prop="stock"
                label="库存"
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
                <el-button type="danger" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "OrderList",
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },

        data() {
            return {
                tableData: [
                    {
                        img: '@/assets/img/goods/avator.png',
                        title: '凤凰牌自行车',
                        price: '11',
                        stock: '200',
                        date: '2019.04.05',
                        num: '322323',
                    },
                    {
                        img: '@/assets/img/goods/avator.png',
                        title: '凤凰牌自行车',
                        price: '11',
                        stock: '200',
                        date: '2019.04.05',
                        num: '322323',
                    },
                    {
                        img: '@/assets/img/goods/avator.png',
                        title: '凤凰牌自行车',
                        price: '11',
                        stock: '200',
                        date: '2019.04.05',
                        num: '322323',
                    },
                    {
                        img: '@/assets/img/goods/avator.png',
                        title: '凤凰牌自行车',
                        price: '11',
                        stock: '200',
                        date: '2019.04.05',
                        num: '322323',
                    },

                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    .order-list {
        .title-box {
            display: flex;
            align-items: center;

            .title-content {
                padding-left: 10px;

                > span {
                    display: block;
                }
            }
        }
    }
</style>