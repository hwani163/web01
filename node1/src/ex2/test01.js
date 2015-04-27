// 실습목표
console.log("실습목표" , "mysql 서버에서 board2 select 하기요");

var mysql = require('mysql');
var host = 'localhost';
var port = 3306;
var MYSQL_USER = "java67";
var MYSQL_PASS = "java67";
var DATABASE = 'java67db';

var connection = mysql.createConnection({
		host : host
		,port : port
		,user : MYSQL_USER
		,password : MYSQL_PASS
		,database : DATABASE
});
var strQuery = "select bno,content,title,date_format(cre_date,'%y-%m-%d') as c_date , pwd from board2";
connection.query(strQuery, function(err, rows) {
	if (err) {
		console.log(err);
		return;
	}
	for ( var i in rows) {
		console.log(rows[i].bno ,rows[i].title, rows[i].content  , rows[i].c_date , rows[i].pwd);
	}
	connection.end();
	});

