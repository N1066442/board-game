var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const staff = require('./utility/staff');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.userName;

    staff.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                userName: d.userName,
                staffPhone: d.staffPhone,
                nickName: d.nickName,
                password: d.password,
            }

            res.render('staffupdateform', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;