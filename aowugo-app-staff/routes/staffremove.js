var express = require('express');
var router = express.Router();

//增加引用函式
const staff = require('./utility/staff');

//接收POST請求
router.post('/', function(req, res, next) {
    var staffName = req.body.staffName;   //取得員工姓名
   
    staff.remove(staffName).then(d => {
        if(d>=0){
            res.render('removeSuccess', {results:d});  //傳至成功頁面     
        }else{
            res.render('removeFail');     //導向錯誤頁面
        }
    })    
});

module.exports = router;