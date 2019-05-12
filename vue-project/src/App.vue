<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Login from './views/Login.vue';
    import Register from './views/Register.vue';
    import Index from './views/Index.vue';

    export default {
        name: 'app',
        components: {
            Login, Register, Index,
        },
    }
</script>

<style lang="scss">
    body,html{
        margin: 0;
        padding: 0;
    }
    #app {
        @import "assets/lib/font-awesome-4.7.0/css/font-awesome.min.css";
    }
</style>
