//공통기능 분리하여 모듈로 만들기
//createServer()와  listener() 부분을 분리하여 모듈로 만든다.
//MINI EXPRESS
var app = require('./miniExpress.js');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host    :'localhost',
    port : 3306,
    user : 'java67',
    password : 'java67',
    database:'java67db'
});
connection.connect();

app.get('/board/form.do', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>새 글</h1>');
	res.write('<form action="add.do" method="post">');
	res.write('제목: <input type="text" name="title" size="50"><br>');
	res.write('내용: <textarea name="content" rows="6" cols="50"></textarea><br>');
	res.write('<input type="submit" value="등록"><br>');
	res.write('</form>');
	res.end('</body></html>\n');
	});

app.post('/board/add.do',function(req, res) {
	connection.query(
	  'insert into board2(title,content,cre_date) values(?,?,now())',
	  [req.params('title'), req.params('content')],
	  function(err, result){
		if (err){
		  console.log(err);
		  doError(req, res);
		  return;
		} 
		res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
		res.write('<html><head><title>test10</title></head>\n');
		res.write('<body>');
		res.write('<h1>등록 결과</h1>');
		res.write('<p>등록 성공입니다!</p>');
		res.end('</body></html>\n');
	});
});

app.get('/board/list.do',function (req, res) {
	var strQuery = "select bno,title,date_format(cre_date,'%y-%m-%d') as c_date,views from board2";
	connection.query(strQuery, function(err, rows) {
		if (err) {
			console.log(err);
			return;
		}
		res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'
			});
		res.write('<html><head><title>test10</title></head>\n');
		res.write('<body>');
		res.write('<h1>게시글</h1>\n');
		res.write('<table border="1">\n');
		res.write('<tr>\n');
		res.write('<th>번호</th>\n');
		res.write('<th>제목</th>\n');
		res.write('<th>등록일</th>\n');
		res.write('</tr>\n');
		res.write('<tr>\n');
		for ( var i in rows) {
		res.write('<td>'+rows[i].bno+'</td>\n');
		res.write('<td>'+rows[i].title+'</td>\n');
		res.write('<td>'+rows[i].c_date+'</td>\n');
		res.write('</tr>\n');
		}
		res.end('</body></html>\n');
		
		connection.end();
		});
});

app.get('/board/list.do',function (req, res) {
	var strQuery = "select bno,content,title,date_format(cre_date,'%y-%m-%d') as c_date , pwd from board2";
	connection.query(strQuery, function(err, rows) {
		if (err) {
			console.log(err);
			return;
		}
		res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'
			});
		res.write('<html><head><title>test10</title></head>\n');
		res.write('<body>');
		res.write('<h1>게시글</h1>\n');
		res.write('<table border="1">\n');
		res.write('<tr>\n');
		res.write('<th>번호</th>\n');
		res.write('<th>제목</th>\n');
		res.write('<th>등록일</th>\n');
		res.write('</tr>\n');
		res.write('<tr>\n');
		for ( var i in rows) {
		res.write('<td>'+rows[i].bno+'</td>\n');
		res.write('<td>'+rows[i].title+'</td>\n');
		res.write('<td>'+rows[i].c_date+'</td>\n');
		res.write('</tr>\n');
		}
		res.end('</body></html>\n');
		
		connection.end();
		});
});
/*

function doChange(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>변경 결과</h1>');
	res.end('</body></html>\n');
}

function doDelete(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>삭제 결과</h1>');
	res.end('</body></html>\n');
}

function doError(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>요청 오류!</h1>');
	res.write('<p>해당 URL을 지원하지 않습니다!</p>');
	res.end('</body></html>\n');
}

var urlMapper = {
	'/board/form.do': doForm,
	'/board/add.do': doAdd,
	'/board/list.do': doList,
	'/board/detail.do': doDetail,
	'/board/change.do': doChange,
	'/board/delete.do': doDelete,
};

//Handler가 하는일 : 클라이언트에서 받아온 정보를 파싱하여 실제로 보여질또는 데이터를 저장하거나 수정하는일을 하는 객체한테 전해준다.
//전해줄 때는 요청정보(request)에 담아서 보내버린다.
function callHandler(path,req,res,params) {
	var handler = urlMapper[path];
	if (handler) {
		// req에 파라미터 값을 꺼내는(실제로 값을 꺼내는일을 하는 애는 doAdd) 함수를 추가한다. 이 객체를 핸들러(DAO)에게 전달한다.
		req.getParameter = function(name) {
			return params[name];
		};
		handler(req, res);			//???? 정작 핸들러에게 req,res정보를 전달(함수호출)하지 않았는다
	} else {
		doError(req, res);
	}
	
}*/


function doError(req,res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
	res.write('<html><head><title>miniExpress</title></head>\n');
	res.write('<body>');
	res.write('<p>작업중 오류발생.</p>');		
	res.end('</body></html>\n');
}
app.listen(1337);










