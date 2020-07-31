var express = require('express');
var router = express.Router();

//增加引用函式
const caltime = require('./utility/caltime');
const { now } = require('moment');

//接收POST請求
router.post('/', function(req, res, next) {
    var memberPhone = req.body.memberPhone;              //取得到達時間
    
    // 建立一個新資料物件
    //var timestamp = new Date().getTime();

    var Timestamp = (new Date()).valueOf();
    
    var newData={   
        arrivalTime:Timestamp,
        memberPhone:memberPhone
    } 
    console.log(newData)
    caltime.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;
