'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

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

//匯出
module.exports = {remove};