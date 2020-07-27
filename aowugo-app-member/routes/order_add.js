var express = require('express');
var router = express.Router();

//增加引用函式
const order = require('./utility/order');

//接收POST請求
router.post('/', function(req, res, next) {

    var foodid=req.body.foodid;                     //會員手機號碼
    var foodno= req.body.foodno;                    //會員名稱
    var customized= req.body.customized;            //lineID
    var ordtime= req.body.ordtime;                  //生日
    
    // 建立一個新資料物件
    var newData={
        foodid: foodid,                     //會員手機號碼
        foodno: foodno,                     //會員名稱
        customized: customized,             //lineID
        ordtime:ordtime,                    //生日
    } 
    console.log(newData)
    order.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;