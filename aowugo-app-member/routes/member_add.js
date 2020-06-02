var express = require('express');
var router = express.Router();

//增加引用函式
const member = require('./utility/member');

//接收POST請求
router.post('/', function(req, res, next) {
    var prono = req.body.prono;                  //取得產品編號
    var proname = req.body.proname;              //取得產品名稱
    var price = Number(req.body.price);          //取得價格
    var inventorydate = req.body.inventorydate;  //取得盤點日期

    //var memberPhone: req.body.memberPhone,      //會員手機號碼
    //var memberName: req.body.memberName,        //會員名稱
    //var point: req.body.point,                  //點數
    //var creationDate: req.body.creationDate,    //建立日期
    
    // 建立一個新資料物件
    var newData={
        memberPhone: memberPhone,               //會員手機號碼
        memberName: req.body.memberName,        //會員名稱
        lineID: req.body.lineID,                //lineID
        gender: req.body.gender,                //性別
        mail: req.body.mail,                    //mail
        birthday: req.body.birthday,            //生日
        point: req.body.point,                  //點數
        creationDate: req.body.creationDate,    //建立日期
    } 
    
    member.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;