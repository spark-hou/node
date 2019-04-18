var express = require('express');
var router = express.Router();

var user = [{
    id: 1,
    username: '黄小米',
    age: 28
}, {
    id: 2,
    username: ' 黄渤',
    age: 45
}];
/* GET users listing. */
router.get('/info', function (req, res, next) {
    console.log(req.query);
    // 用户资料id=
    user.forEach(function (item) {
        if (item.id == req.query.id) {
            res.json(item);
        }
    })
    res.send();
});
//传参username,age,id
//id不能修改
//修改之后的发回去

router.post('/edit', function (req, res, next) {
    console.log(req.body);
    var id = req.body.id;
    var username = req.body.username;
    var age = req.body.age;
    if (id==''||username==''||age==""){
        res.json('请输入真确的值！')
    }else {
        user[id-1].username=username;
        user[id-1].age=age;
        res.json(user[(id-1)]);
    }
});
//注册
router.post('/register', function (req, res) {
    //注册成功
    res.json({
        status: true,
        msg: " 注册成功"
    });
})
//登陆
router.post('/login', function (req, res) {
    console.log(req.body);
    if (req.body.username == 'moz' && req.body.password == '123') {
        res.json({
            status: true,
            msg: " 登陆成功",
        })
    } else {
        res.json({
            status: false,
            msg: " 错误"
        })
    }
})
module.exports = router;
