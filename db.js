const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'us-cdbr-east-06.cleardb.net',
  user     : 'b1f2d28c2d0f95',
  password : 'd0b518a4',
  port : '3306',
  database : 'heroku_c6122936cc1be5c',
  dateStrings : 'date'
});


 //리스트 전체 불러오기
function getAllMemos(callback){
    connection.query('select * from shop ORDER BY id DESC',(err, rows, fields) =>{
    if(err) throw err;
    callback(rows);
    })
}


 //리스트에 새로운 내용 추가하는 함수
function insertMemo(content,title,writer,picture,sub1,sub2,sub3,sub4,price,callback){
    connection.query(`INSERT INTO shop(content,date,title,writer,picture,sub1,sub2,sub3,sub4,price) VALUES("${content}",NOW(),"${title}","${writer}","${picture}", "${sub1}","${sub2}","${sub3}","${sub4}","${price}")`,
    (err,result) =>{
      if(err) throw err;
    callback();
    })
}


 //리스트중 아이디값이 일치하는 row만 불러오는 함수
function getMemoById(id,callback){
  connection.query(`select * from shop WHERE id = ${id}`,(err, row, fields) =>{
    if(err) throw err;
    callback(row);
    })
}

//리스트를 수정하고 싶을 때 id값이 일치하는 부분을 수정하는 함수 
function updateMemoById(id,content,title,writer,picture,sub1,sub2,sub3,sub4,price, callback){
  connection.query(`UPDATE shop SET CONTENT='${content}', title = '${title}', writer = '${writer}', picture = '${picture}', sub1 = '${sub1}', sub2 = '${sub2}', date=NOW(), sub3 = '${sub3}', sub4 = '${sub4}', price = '${price}', WHERE ID=${id}`, (err, result) => {
    if(err) throw err;
    callback();
  })
}


//리스트중 id값이 일치하는 부분을 삭제하는 함수
function deleteMemoById(id, callback){
  connection.query(`DELETE FROM shop WHERE id = ${id}`,(err, result) =>{
    if(err) throw err;
    callback();
    })
}


    module.exports = {
    getAllMemos,
    insertMemo,
    getMemoById,
    updateMemoById,
    deleteMemoById,
}

