'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
// 取出型態資料
//------------------------------------------
var getDropdownData = async function(){
    //儲存下拉式選單資料
    var protype;
    
    //取回protype資料
    await sql('SELECT * FROM "member"')
        .then((data) => {
            protype = data.rows;  
        }, (error) => {
            result = [];
        });
    
    //設定回傳資料    
    var result = {};
    result.protype = protype;

    //回傳
    return result;
}

//------------------------------------------
// 新增商品
//------------------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO product (prono, proname, typno, price) VALUES ($1, $2, $3, $4)', [newData.prono, newData.proname, newData.typno, newData.price])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}

//匯出
module.exports = {getDropdownData, add};