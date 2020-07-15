var express = require('express');
var router = express.Router();

//增加引用函式
const topupp = require('./utility/topupp');

//接收POST請求
router.post('/', function(req, res, next) {               
    var memberPhone = req.body.memberPhone;              
    var staffPhone = req.body.staffPhone;                  
    var topup = Number(req.body.topup);                  
    var topupPoints = Number(req.body.topupPoints);
    var topupTime = req.body.topupTime;
    
    // 建立一個新資料物件

    var newData={
        memberPhone:memberPhone,
        staffPhone:staffPhone,
        topup:topup,
        topupPoints:topupPoints,
        topupTime:topupTime
    } 
    console.log(newData)
    topupp.add(newData).then(d => {
        if (d==0){
            res.render('topupSuccess');  //傳至成功頁面
        }else{
            res.render('topupFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;
