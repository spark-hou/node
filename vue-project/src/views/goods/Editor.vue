<template>
    <div>
        <div ref="editor" style="text-align:left"></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import E from 'wangeditor'

    export default {
        name: 'editor',
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            var editor = new E(this.$refs.editor);
            editor.customConfig.uploadImgServer = '/api/upload/editor';
            editor.customConfig.uploadImgHeaders = {
                'Authorization': `Bearer ${sessionStorage.token}`,
            }
            editor.customConfig.onchange = (html) => {
                this.$store.commit('changeEditorContent',html)
            }
            editor.create()
        },
        computed:mapState({
            editorContent:state=>state.release.editorContent,
        })
    }
</script>

<style scoped>
</style>
