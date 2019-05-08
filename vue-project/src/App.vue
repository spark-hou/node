<template>
    <div id="app">
        <Login></Login>
        <ul>
            <li v-for="(item,index) in list" @click="clickHandle" :key="item">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    //@是src的缩写
    import Login from '@/views/Login.vue';

    export default {
        components: {
            Login,
        },
        data: function () {
            return {
                list: [12, 23, 454, 23, 45, 67, 34],
            };
        },
        methods: {
            clickHandle() {
                alert('hello world')
            },
        },
    }
    // Vue.component('app',{})等价于
</script>
<style lang="scss">
    /*公共类*/
    $blue: #2d8cf0;
    $fz14: 14px;
    $fz12: 12px;
    @import "./assets/lib/font-awesome-4.7.0/css/font-awesome.min.css";
    html, body {
        margin: 0;
        padding: 0;
    };

</style>
