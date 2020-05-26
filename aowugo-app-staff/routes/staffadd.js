var express = require('express');
var router = express.Router();

//增加引用函式
<<<<<<< HEAD
const staff = require('./utility/staff');

//接收POST請求
router.post('/', function(req, res, next) {
    var userName = req.body.userName;                  //取得員工名稱
    var staffPhone = req.body.staffPhone;              //取得員工電話
    var nickName = req.body.nickName;                  //取得員工暱稱
    var password = req.body.password;                  //取得密碼
    
    // 建立一個新資料物件
    var newData={
        userName:userName,
        staffPhone:staffPhone,
        nickName:nickName,
        password:password
    } 
    
    staff.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;
=======
const product = require('./utility/product');

//接收GET請求
router.get('/', function(req, res, next) {
    product.getDropdownData().then(d => {
        if (d!=[]){
            res.render('product_add_form', {result:d});  //轉至新增頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    });
});

module.exports = router; 
>>>>>>> viewdata-staffversion
