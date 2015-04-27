var http = require('http');
var url = require('url');
var mysql = require('mysql');
var queryString= require('querystring');

// 실습 목표: 게시판 만들기
// - 게시물 입력 요청 처리하기
//

var connection = mysql.createConnection({
    host    :'localhost',
    port : 3306,
    user : 'java67',
    password : 'java67',
    database:'java67db'
});

connection.connect();

function doForm(req, res) {
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
}

function doAdd(req, res) {
	connection.query(
	  'insert into board2(title,content,cre_date) values(?,?,now())',
	  [req.getParameter('title'), req.getParameter('content')],
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
}

function doList(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>게시글</h1>');
	res.end('</body></html>\n');
}

function doDetail(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>상세정보</h1>');
	res.end('</body></html>\n');
}

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
	
}
http.createServer(function(req, res) {
//	http://localhost:1337/board/form.do 의 정보는 req.url객체 안에 있다.
//	parse라는 도구(펑션)을 통하여 파싱하여 urlInfo에 담아서 준다.
	var urlInfo = url.parse(req.url, true);

	// GET 요청은 URL에서 파라미터 값을 추출하고,
	// POST 요청은 message body에서 파라미터 값을 추출한다.
	var params;
	
	//GET일때와 POST일 때 데이터를 보내는 형식이 다르기 때문에 방법을 나누어 처리하여야 한다.
	if (req.method == 'GET') {
		//req라는 객체에는 method라는 라벨을 가진 으로 요청하는 request냐 post냐
		params = urlInfo.query;
		callHandler(urlInfo.pathname,req,res,params);
	} 
	else if (req.method == 'POST') {
		//POST방식은 데이터를 MessageBody에 있다.		
		var messageBody='';
		req.on('data',function(data){
			messageBody+=data; //데이터를 계속읽어서 하나의 문자열을 만든다.
		});
		req.on('end',function(){//데이터를 다 읽었을 때 end메시지를 보내여 데이터종료를 알린다.
			params = querystring.parse(messageBody);		//그동안 저장된 messageBody라는 변수를 가지고 쿼리스트링이라는 도구를 사용하여 파싱한후
																				//params라는 객체에 저장한다.
																				//get은 이미 .query라는 도구를 통하여 파싱하기 때문에 간단하다.
			callHandler(urlInfo.pathname,req,res,params);
		});
	}
	
	
	
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');










