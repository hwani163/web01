// 실습목표
console.log("실습목표" , "mysql 서버에서 board2 insert 하기요");

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
var strQuery = 'insert into board2(title,content,cre_date) values(?,?,now())'
var values = ['hahaha' , '우헤헤'];
connection.query(strQuery,values,function(err, result) {
	if (err) {
		console.log(err);
		return;
	}
	else {
		console.log(result);
	}
	connection.end();
	});

