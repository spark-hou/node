var express = require('express');
var router = express.Router();
var http = require("https");

http.get("https://api.binance.com/api/v3/ticker/price", function (data) {
    var str = "";
    data.on("data", function (chunk) {
        str += chunk;//监听数据响应，拼接数据片段
    })
    data.on("end", function () {
        console.log(str.toString())
    })
})
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
