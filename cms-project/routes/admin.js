var express = require('express');
var router = express.Router();
//数据库
var pool = require('../config/mysql.js').pool;

//添加分类
//一级分类的parent_id=0
router.post('/category/add', function (req, res) {
    var sql = "insert into category (`name`,parent_id) VALUES (?,?)";
    pool.query(sql, [req.body.name, req.body.parent_id], function (error, results) {
        res.json({
            status: true,
            msg: "添加成功"
        })

    })
})

//删除分类
router.post('/category/delete', function (req, res) {
    var sql = "DELETE from category WHERE category_id=?";
    pool.query(sql, [req.body.category_id], function (error, results) {
        res.json({
            status: true,
            msg: "删除成功"
        })
    })
})
//查询分类
router.get('/category/getlist', function (req, res) {
    var sql = "select * from category";
    pool.query(sql, function (error, results) {
        res.json({
            status: true,
            msg: results
        })
    })
})
//编辑分类
router.post('/category/edit', function (req, res) {
    var sql = "UPDATE category SET parent_id=? ,`name`=? where category_id=?";
    console.log(req.body)
    pool.query(sql, [req.body.parent_id, req.body.name, req.body.category_id], function (error, results) {
        res.json({
            status: true,
            msg: "修改成功"
        })
    })
})


module.exports = router;