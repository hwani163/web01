/*
 * 계산기 만들귀
 *
 * */

var http = require('http');
var url = require('url');
/*
 * 요청 URL 형식 /carc?v1=값&v2=값2&op=연산자명 연산자명 : plus , minus , multiple , divide
 * 
 * 출력결과 URL )calc?v1=20&v2=30&op=miltiple 출력 20
 * 
 * 실습목표 :  게시판 만들기
 * 0)글 등록form : /board/form.do
 * 1) 글등록 : /board/add.do?title=값&content=값
 * 2) 글목록 : /board/list.do
 * 3) 글 조회 : /board/detail.do?no=값
 * 4)글 변경 : /board/change.do?no=값&title=값&content=값
 * 5)글 삭제 : /board/delete.do?no=값
 */

function doForm(req , res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8',	});
	res.write('<h1>새 글</h1>');
	res.write('<form action="add.do" method="post">');
	res.write('제목 : <input type="text" size="50" name="title"><br><br>');
	res.write('내용 : <textarea name="content" rows ="6" cols="50"></textarea><br>');
	res.write('<input type="submit" value="등록"><br>');
	res.write('</form></body></html>');
	
}

function doAdd(req , res) {
	var title = req.getParameter('title');
	var content = req.getParameter('content');
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8',	});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>새  글등록</h1>');
	res.end('</body></html>\n');
}
function doList(req , res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8',	});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>게시글</h1>');
	res.end('</body></html>\n');
}
function doDetail(req , res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8',	});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>상세정보</h1>');
	res.end('</body></html>\n');
}
function doChange(req , res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8',	});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>게시물 수정</h1>');
	res.end('</body></html>\n');
}
function doDelete(req , res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8',	});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>게시물 삭제</h1>');
	res.end('</body></html>\n');
}
function doError(req , res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8',	});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>페이지 오류</h1>');
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

	http.createServer(function(req, res) {
		var urlInfo = url.parse(req.url, true);
		
		var handler = urlMapper[urlInfo.pathname];
		if (handler) {
			//req에 파라메터 값을 꺼내는 함수를 추가한다. 그 객체를 핸들러 에게 전달한다.
			req.getParameter = function(name) {
				return urlInfo.query["name"];
			}
			handler(req, res);
		} else {
			doError(req, res);
		}
		
	}).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');