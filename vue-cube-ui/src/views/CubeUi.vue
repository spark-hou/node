<template>
    <div class="CubeUi">
        <span>hello</span>
        <cube-button @click="showTimePicker">TimePicker</cube-button>

    </div>
</template>

<script>
    export default {
        name: "CubeUi",
        data(){
          return{

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
            }
        }

    }
</script>

<style scoped lang="scss">

</style>