/*
	http 관련 객체 가져오기
  */

var http = require('http');
/*
 * 응답헤더 다루기*/
function requestListener(req , res) {
	res.writeHead(200, {
		'Content-Type': 'text/html;charset=UTF-8',
		});
	res.write("<html><head><title>test04</title></head>");
	res.write("<body><h1>test04</h1>\n");
	res.write("<p>안녕하세요</p>\n");
	res.end("</body></html>");
}

var httpServer = http.createServer(requestListener);

//웹서버를 가동한다.
httpServer.listen(1338, "localhost");

console.log("Server running localhost:1338");

