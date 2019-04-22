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
//获取指定id的分类
router.get('/category/detail', function (req, res) {
    var sql = "select * from category where category_id=?";
    pool.query(sql, [req.query.category_id], function (error, results) {
        if (results.length == 0) {
            res.json({
                status: false,
                msg: '失败'
            })
            return;
        }
        res.json({
            status: true,
            msg: results[0]
        })
    })
})
//添加文章
router.post('/article/add', function (req, res) {
    var sql = "INSERT INTO article (category_id,title,description,content,main_photo) VALUES (?,?,?,?,?)";
    pool.query(sql, [req.body.category_id, req.body.title, req.body.description, req.body.content, req.body.main_photo], function (error, results) {
        res.json({
            status: true,
            msg: "上传成功"
        })

    })
})
//删除指定ID的文章
router.post('/article/del', function (req, res) {
    var sql = "DELETE from article where article_id=?";
    pool.query(sql, [req.body.article_id], function (error, results) {
        res.json({
            status: true,
            msg: "删除成功"
        })

    })
})
//编辑指定id文章
router.post('/article/edit', function (req, res) {
    var sql = "UPDATE article set category_id=?,title=?,description=?,content=?,main_photo =? WHERE article_id=?";
    pool.query(sql, [req.body.category_id, req.body.title, req.body.description, req.body.content, req.body.main_photo, req.body.article_id], function (error, results) {
        res.json({
            status: true,
            msg: "编辑成功"
        })

    })
})
// 获取指定id详情
router.get('/article/detail', function (req, res) {
    var sql = "SELECT * from article where article_id=?";
    pool.query(sql, [req.query.article_id], function (error, results) {
        res.json({
            status: true,
            msg: results[0]
        })
    })
})
//获取文章列表
router.get('/article/list', function (req, res) {
    var sql = "SELECT category_id,title from article";
    pool.query(sql,function (error, results) {
        res.json({
            status: true,
            msg: results
        })
    })
})

module.exports = router;