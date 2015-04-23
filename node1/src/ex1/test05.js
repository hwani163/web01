/*
	http 관련 객체 가져오기
  */

var http = require('http');
/*
 * 요청 파라메터 알아 내기*/
function requestListener(req , res) {
	//헤더 정보 알아내기
	console.log(req.headers);
	
	//HTTP요청 방식 알아내기
	console.log("method = ",req.method);
	
	// 3) 요청 URL알아내기
	console.log("URL = ",req.url);
	res.writeHead(200, {
		'Content-Type': 'text/html;charset=UTF-8',
		});
	res.write("<html><head><title>test05</title></head>\n");
	res.write("<body><h1>test05</h1>\n");
	res.write("<p>안녕하세요</p>\n");
	res.end("</body></html>");
}

var httpServer = http.createServer(requestListener);

//웹서버를 가동한다.
httpServer.listen(1338, "localhost");

console.log("Server running localhost:1338");

