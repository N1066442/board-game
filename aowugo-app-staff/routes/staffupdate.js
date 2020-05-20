var express = require('express');
var router = express.Router();

//增加引用函式
<<<<<<< HEAD
const staff = require('./utility/staff');

//接收POST請求
router.post('/', function(req, res, next) {
    var userName = req.body.userName;   //取得員工姓名

    var newData={
        userName:userName,                   //員工姓名
        staffPhone: Number(req.body.staffPhone),     //取得
        nickName: req.body.nickName, //取得價格
        password: req.body.password  //取得盤點日期
    } 
    
    staff.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
=======
var moment = require('moment');
const product = require('./utility/product');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.prono;

    product.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                prono: d.prono,
                proname: d.proname,
                price: d.price,
                inventorydate: moment(d.inventorydate).format("YYYY-MM-DD")
            }

            res.render('product_update_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
>>>>>>> viewdata-staffversion
        }  
    })
});

//匯出
module.exports = router;