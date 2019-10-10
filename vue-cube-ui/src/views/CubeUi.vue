<template>
    <div class="CubeUi">
        <span>hello</span>
        <cube-button @click="showTimePicker">TimePicker</cube-button>
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
            <el-table-column

                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    label="日期"
                    width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    show-overflow-tooltip>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "CubeUi",
        data(){
          return{
              tableData: [
                  {
                      date: '2016-05-03',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                      date: '2016-05-02',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                      date: '2016-05-04',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                      date: '2016-05-01',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                      date: '2016-05-08',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                      date: '2016-05-06',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                      date: '2016-05-07',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                  }],
              multipleSelection: [],
          }
        },
        methods:{
            //日期选择器
            showTimePicker () {
                this.$createTimePicker({
                    showNow: true,
                    minuteStep: 5,
                    delay: 15,
                    onSelect: (selectedTime, selectedText, formatedTime) => {
                        this.$createDialog({
                            type: 'warn',
                            title: `selected time: ${selectedTime}`,
                            content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
                            icon: 'cubeic-alert'
                        }).show()
                    },
                    onCancel: () => {
                        this.$createToast({
                            type: 'correct',
                            txt: 'Picker canceled',
                            time: 1000
                        }).show()
                    }
                }).show()
            },
            handleSelectionChange(val) {
                console.log(val)
                this.multipleSelection = val;
                //toggleAllSelection
                // if (val.length == 7) {
                //    this.tableData.forEach((row)=>{
                //        this.$refs.multipleTable.toggleRowSelection(row);
                //    })
                // }else {
                //     this.$refs.multipleTable.clearSelection();
                // }


            },
            ha(val) {
                console.log(val)
            }
        }

    }
</script>

<style scoped lang="scss">

</style>
