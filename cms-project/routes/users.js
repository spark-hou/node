var express = require('express');
var router = express.Router();
//数据库
var pool = require('../config/mysql.js').pool;


var users = [{
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
    var sql = "SELECT username,fullname,tel from users WHERE users_id=?";
    pool.query(sql, [req.query.id], function (error, results) {
        if (results.length == 0) {
            res.json({
                status: false,
                msg: '查无此人'
            })
            return;
        } else {
            res.json({
                status: true,
                msg: results[0]
            })
        }
    })
});
//传参username,age,id
//id不能修改
//修改之后的发回去
//编辑资料
router.post('/edit', function (req, res, next) {
    // console.log(req.body);
    // var id = req.body.id;
    // var username = req.body.username;
    // var age = req.body.age;
    // if (id == '' || username == '' || age == "") {
    //     res.json('请输入真确的值！')
    // } else {
    //     users[id - 1].username = username;
    //     users[id - 1].age = age;
    //     res.json(users[(id - 1)]);
    // },`password`=? , req.body.password
    var sql = "UPDATE users set username=?,fullname=?,tel=? where users_id=?";
    console.log(req.body)
    pool.query(sql, [req.body.username, req.body.fullname, req.body.tel, req.body.users_id], function (error, results) {
        console.log(error,results)
        res.json({
            status: true,
            msg: "修改成功"
        })

    })
});
//注册
router.post('/register', function (req, res) {

    var sql = "INSERT into users (username,`password`,fullname,tel) VALUES (?,?,?,?)";
    pool.query(sql, [req.body.username, req.body.password, req.body.fullname, req.body.tel], function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                msg: " 失败"
            });
            return;
        }
        console.log(results);
        //注册成功
        res.json({
            status: true,
            msg: " 注册成功"
        });
    });

})
//登陆
router.post('/login', function (req, res) {
    var sql = "SELECT*from users where username=? and `password`=?";
    pool.query(sql, [req.body.username, req.body.password], function (error, results, fields) {

        console.log(results);

        if (results.length > 0) {
            res.json({
                status: true,
                msg: " 登陆成功",
                uid: results[0].users_id
            })
        } else {
            res.json({
                status: false,
                msg: " 错误"
            })
        }

    })

})

//删除账户
router.post('/delete', function (req, res) {
    var sql = "DELETE from users WHERE users_id=?";
    console.log(req.body);
    pool.query(sql, [req.body.users_id], function (error, results) {
        console.log(results);
        res.json({
            status: true,
            msg: " 删除成功",
        })
    })

})
//获取用户列表
router.get('/getlist', function (req, res) {
    var sql = "select users_id,username,fullname,tel from users";
    pool.query(sql, function (error, results) {
        console.log(results);
        res.json({
            status: true,
            msg: results,
        })
    })

})


module.exports = router;
