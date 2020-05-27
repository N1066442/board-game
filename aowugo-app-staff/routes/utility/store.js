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

    await sql('INSERT INTO storeinformation (storeID, storeNamemID, storeAddress, phoneNo, vacantTable, businessHours, staffPhone, wifi, socket, provideMeals, outsideFood, chargringStandards) VALUES ($1, $2, $3, $4, $5, $6, $7, $7, $8, $9, $9, $10, $11, $12)', [newData.storeID, newData.storeNamemID, newData.storeAddress, newData.phoneNo, newData.vacantTable, newData.businessHours, newData.staffPhone, newData.wifi, newData.socket, newData.provideMeals,newData.outsideFood, newData.chargringStandards])
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

    await sql('DELETE FROM storeinformation WHERE storeID = $1', [storeID])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
module.exports = {list, add, remove}
