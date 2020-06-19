'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有店家資訊
//------------------------------------------
var list = async function(){
    var result=[];

    //console.log("查詢店家資訊");
    await sql('SELECT * FROM storeinformation')
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
// 新增店家資訊
//------------------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO storeinformation ("storeID", "storeName", "storeAddress", "phoneNo", "vacantTable", "businessHours", "wifi", "socket", "provideMeals", "outsideFood", "chargingStandards") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [newData.storeID, newData.storeNamemID, newData.storeAddress, newData.phoneNo, newData.vacantTable, newData.businessHours, newData.wifi, newData.socket, newData.provideMeals,newData.outsideFood, newData.chargringStandards])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
//----------------------------------
// 刪除員工
//----------------------------------
var remove = async function(storeID){
    var result;

    await sql('DELETE FROM storeinformation WHERE "storeID"= $1', [storeID])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
//------------------------------------------
//執行資料庫動作的函式-取出單一店家資訊
//------------------------------------------
var query = async function(storeID){
    var result={};
    
    await sql('SELECT * FROM storeinformation WHERE "storeID" = $1', [storeID])
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
// 更新店家資料
//----------------------------------
var update = async function(newData){
    var results;

    await sql('UPDATE storeinformation SET "storeName"=$1, "storeAddress"=$2, "phoneNo"=$3 , "vacantTable"=$4, "businessHours"=$5, "wifi"=$6, "socket"=$7, "provideMeals"=$8, "outsideFood"=$9, "chargringStandards"=$10 WHERE "storeID" = $11', [newData.storeID, newData.storeName, newData.storeAddress, newData.phoneNo, newData.vacantTable, newData.businessHours, newData.wifi, newData.socket, newData.provideMeals, newData.outsideFood, newData.chargringStandards])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}
module.exports = {list, add, remove, query, update}
