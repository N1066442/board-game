'use strict';
//引用操作資料庫的物件
const sql = require('./asyncDB');
var add = async function(newData){
    var result;
    console.log(newData)
    await sql('INSERT INTO topup ("serNo" , "memberPhone" , "staffPhone" , "topup", "topupPoints", "topupTime") VALUES ($1, $2, $3, $4, $5, $6)', [newData.serNo, newData.memberPhone, newData.staffPhone, newData.topup, newData.topupPoints, newData.topupTime])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
        
    return result;
}

module.exports = {add}