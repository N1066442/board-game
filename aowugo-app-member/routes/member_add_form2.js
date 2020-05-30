var express = require('express');
var router = express.Router();

//增加引用函式
const member = require('./utility/member');

//接收GET請求
router.get('/', function(req, res, next) {
    member.getDropdownData().then(d => {
        if (d!=[]){
            res.render('member_add_form2', {result:d});  //轉至新增頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    });
});

module.exports = router;