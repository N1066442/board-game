'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有會員資料
//------------------------------------------
var list = async function(){
    var result="";

    //console.log("查看會員資訊");
    await sql('SELECT * FROM food')
        .then((data) => {            
            result = data.rows;
            //console.log(result)  ;
        }, (error) => {
            result = null;
            //console.log("除去錯誤")  ;
        });
		
    return result;
}
//------------------------------------------
//執行資料庫動作的函式-新增會員資料
//------------------------------------------

var add = async function(newData){
    var result;
    console.log(newData)
    console.log(newData.foodid)
    console.log(newData.foodno)
    console.log(newData.customized)
    console.log(newData.orderdetailid)
    console.log(newData.orderid)
    console.log(newData.ordtime)
    await sql('INSERT INTO orderdetail (foodid, foodno, customized, orderdetailid, orderid, ordtime)  VALUES ($1, $2, $3, $4, $5, $6)', [newData.foodid, newData.foodno, newData.customized, newData.orderdetailid, newData.orderid, newData.ordtime])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}

//----------------------------------
// 刪除會員資料
//----------------------------------
var remove = async function(orderdetailid){
    var result;

    await sql('DELETE FROM orderdetail WHERE orderdetailid = $1', [orderdetailid])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}

//------------------------------------------
//執行資料庫動作的函式-取得一個會員資料
//------------------------------------------
var query = async function(orderdetailid){
    var result={};
    
    await sql('SELECT * FROM orderdetail WHERE orderdetailid = $1', [orderdetailid])
        .then((data) => {
            if(data.rows.length > 0){
                result = data.rows[0];   
            }else{
                result = -1;
            }    
        }, (error) => {
            result = null;
        });
		
    return result;
}

//----------------------------------
// 更新會員資料
//----------------------------------
var update = async function(newData){
    var results;

    await sql('UPDATE orderdetail SET foodid=$1, foodno=$2, customized=$3, orderid=$4, ordtime=$5 WHERE orderdetailid = $6', [newData.foodid, newData.foodno, newData.customized,  newData.orderid, newData.ordtime, newData.orderdetailid,])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}
module.exports = {list, add, remove, query, update}
