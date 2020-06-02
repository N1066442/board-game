var express = require('express');
var router = express.Router();

//增加引用函式
const member = require('./utility/member');

//接收POST請求
router.post('/', function(req, res, next) {
    var memberPhone = req.body.memberPhone;   //取得會員手機號碼

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
    
    member.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;