import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {Message} from 'element-ui';
import router from './router'

Vue.use(Vuex);
let ReleaseModule={
    state:{
        editorContent:'',

    },
    mutations:{
        changeEditorContent(state,html){
            state.editorContent=html;
        }
    },
};
let UserModule = {
    state: {
        uid: '',
        role: '',
        token: '',
        avatar:'',
    },
    mutations: {
        saveUserInfo(state, user) {
            state.uid = user.id;
            state.token = user.token;
            state.role = user.role;
            state.avatar=user.avatar;
        }
    },
    actions: {
        Login({commit, state}, formData) {
            axios.post('/api/user/login',
                formData
            )
                .then((res) => {
                    console.log(res);
                    if (!res.status) {
                        Message.error(res.msg);
                        return;
                    }
                    //存储token,role(1:超管，2普管，3：运营)
                    sessionStorage.token = res.data.token;
                    sessionStorage.uid = res.data.id;
                    sessionStorage.role = res.data.role;
                    sessionStorage.avator=res.data.avatar;
                    //储存到state里
                    commit('saveUserInfo', res.data);
                    Message({
                        message: res.msg,
                        duration: 1000,
                        onClose: () => {
                            console.log('query信息');
                            // if (router.query.redirect) {
                            //     router.push({path: this.redirect});
                            // } else {
                            //     router.push({name: 'Index'});
                            // }
                            router.push({name: 'Index'});
                        },
                    })
                })
        },
    },
};
let MenuModule = {
    state: {
        count: 1,
        isCollapse: false,
    },
    mutations: {
        Collapse(state) {
            state.isCollapse = !state.isCollapse;
        },
    },
    actions: {

    },
};
export default new Vuex.Store({
    modules: {
        user: UserModule,
        menu: MenuModule,
        release:ReleaseModule,
    }
})
