'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
// 新增開始時間
//------------------------------------------
var add = async function(newData){
    var result;
    console.log(newData.memberPhone)
    console.log(newData.arrivalTime)
    await sql('INSERT INTO calculatingtime ( "memberPhone", "arrivalTime") VALUES ($1, $2)', [newData.memberPhone, newData.arrivalTime])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}

module.exports = {add}