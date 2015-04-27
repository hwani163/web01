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
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>새  글</h1>');
	res.write('</body></html>\n');
	
}

function doAdd(req , res) {
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

var urlMapper ={
		'/board/form.do':doForm
		,'/board/add.do':doAdd
		,'/board/list.do':doList
		,'/board/change.do':doChange
		,'/board/delete.do':doDelete
};

http.createServer(function(req, res) {
	var urlInfo = url.parse(req.url, true);
	
	var handler = urlMapper[urlInfo.pathname];
	if (handler) {
		handler(req,res);
	}else {
		doError(req,res);
	}
	
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

