'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有餐點資料
//------------------------------------------
var list = async function(){
    var result=[];

    console.log("查詢餐點");
    await sql('SELECT * FROM food')
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
// 新增餐點
//------------------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO food (foodID, itemID, foodName, foodPoint, foodImg) VALUES ($1, $2, $3, $4, $5)', [newData.foodID, newData.itemID, newData.foodName, newData.foodPoint, newData.foodImg])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
//----------------------------------
// 刪除餐點
//----------------------------------
var remove = async function(foodID){
    var result;

    await sql('DELETE FROM food WHERE foodID = $1', [foodID])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
module.exports = {list, add, remove}