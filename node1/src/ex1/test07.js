/*
 * 요청 파라메터 추출하기
 * 요청과 응답에 대해 사용할 수 있는 메서드
 *
 * */


var http = require('http');
var url = require('url');
function requestListener(req , res) {
	//그냥 해석하면 query String이 문자열로 추출된다.
	// 쿼리스트링을 파라미터 별로 추출 하고 싶으면  두번째 parameter옵션을 true 값으로 주어라
	var urlInfo = url.parse(req.url,true);
	console.log("URL정보 : " , urlInfo.href);
	console.log("해당 웹 어플리케이션 경로",urlInfo.pathname);
	//testURl : http://127.0.0.1:1338/cacaclalc/computer.do?v1=90&v2=12&op=77
	console.log("v1 = " , urlInfo.query.v1);
	console.log("v2 = " , urlInfo.query.v2);
	console.log("op = " , urlInfo.query.op);
	
	
	res.writeHead(200, {
		'Content-Type': 'text/html;charset=UTF-8',
		});
	res.write("<html><head><title>test07</title></head>\n");
	res.write("<body><h1>test07</h1>\n");
	res.write("<p>안녕하세요</p>\n");
	res.end("</body></html>");
}

var httpServer = http.createServer(requestListener);

//웹서버를 가동한다.
httpServer.listen(1338, "localhost");

console.log("Server running localhost:1338");

