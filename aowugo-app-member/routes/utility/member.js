'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有產品資料
//------------------------------------------
var list = async function(){
    var result=[];

    console.log("查看會員資訊");
    await sql('SELECT * FROM member')
        .then((data) => {            
            result = data.rows;
            console.log(result)  ;
        }, (error) => {
            result = null;
            //console.log("除去錯誤")  ;
        });
		
    return result;
}
//------------------------------------------
//執行資料庫動作的函式-新增產品資料
//------------------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO member (prono, proname, price, inventorydate) VALUES ($1, $2, $3, $4)', [newData.memberPhone, newData.memberName, newData.lineID, newData.gender, newData.mail, newData.birthday, newData.point, newData.creationDate])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
//------------------------------------------
// 取出型態資料
//------------------------------------------
var getDropdownData = async function(){
    //儲存下拉式選單資料
    var protype;
    
    //取回protype資料
    await sql('SELECT * FROM member')
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

    await sql('INSERT INTO member (prono, proname, typno, price) VALUES ($1, $2, $3, $4)', [newData.memberPhone, newData.memberName, newData.lineID, newData.gender, newData.mail, newData.birthday, newData.point, newData.creationDate])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
//----------------------------------
// 刪除商品
//----------------------------------
var remove = async function(prono){
    var result;

    await sql('DELETE FROM member WHERE prono = $1', [prono])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
//------------------------------------------
//執行資料庫動作的函式-取出單一商品
//------------------------------------------
var query = async function(prono){
    var result={};
    
    await sql('SELECT * FROM member WHERE prono = $1', [prono])
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
// 更新商品
//----------------------------------
var update = async function(newData){
    var results;

    await sql('UPDATE member SET proname=$1, price=$2, inventorydate=$3 WHERE prono = $4', [newData.memberPhone, newData.memberName, newData.lineID, newData.gender, newData.mail, newData.birthday, newData.point, newData.creationDate])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}
module.exports = {list, add, getDropdownData, remove, query, update}