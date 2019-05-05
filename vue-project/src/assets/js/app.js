//存储session
function setSession(key, value = '') {
    //obj=>string
    if (typeof value == 'object') {
        let val=JSON.stringify(value);
    }

    sessionStorage.setItem(key, val);
}

//获取session
function getSession(key) {
    let val = sessionStorage.getItem(key);
    let value = JSON.parse(val);
    return value;
}
//判断是否登陆
function isLogin() {
    let {uid}=getSession('user');
    return uid?true:false;
}

export {
    getSession,
    setSession,
    isLogin,
}