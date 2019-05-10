<template>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                fixed
                label="商品名称"
                width="600">
            <template slot-scope="scope">
                <img src="@/assets/img/goods/avator.png" alt="" style="width: 60px;height: 60px">
                <span style="margin-left: 10px">{{ scope.row.title }}</span>
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
        name: "List",
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
                    },
                    {
                        img: '@/assets/img/goods/avator.png',
                        title: '凤凰牌自行车',
                        price: '11',
                        stock: '200',
                        date: '2019.04.05',
                    },
                    {
                        img: '@/assets/img/goods/avator.png',
                        title: '凤凰牌自行车',
                        price: '11',
                        stock: '200',
                        date: '2019.04.05',
                    },
                    {
                        img: '@/assets/img/goods/avator.png',
                        title: '凤凰牌自行车',
                        price: '11',
                        stock: '200',
                        date: '2019.04.05',
                    },

                ],
            }
        }
    }
</script>

<style lang="scss" >

</style>