var express = require('express');
var router = express.Router();

<<<<<<< HEAD
//增加引用函式
const staff = require('./utility/staff');

//接收POST請求
router.post('/', function(req, res, next) {
    var userName = req.body.userName;   //取得員工姓名
   
    staff.remove(userName).then(d => {
        if(d>=0){
            res.render('removeSuccess', {results:d});  //傳至成功頁面     
        }else{
            res.render('removeFail');     //導向錯誤頁面
        }
    })    
=======
//接收GET請求
router.get('/', function(req, res, next) {
    res.render('product_remove_form'); 
>>>>>>> viewdata-staffversion
});

module.exports = router;