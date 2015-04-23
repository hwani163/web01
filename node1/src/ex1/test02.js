/*
	http 관련 객체 가져오기
  */

var http = require('http');
/*
 * HTTP SERVER 생성하기
 * 	-	createServer(클라이언트 요청이 들어 왔을 때 호출 될 함수);
 * - 	createServer(요청 리스너)
 * 	클라이언트의 요청이 들어 왔을 때 호출될 함수 ? 요청 처리 리스너라 부른다.
 * 클라이언트가 이 웹 서버에게 HTTP 요청을 하면 이벤트가 발생하고 , 
 * nodejs는 이 이벤트를 처리할 함수를 호출 한다.*/
function requestListener(req , res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('석환\n');
}

var httpServer = http.createServer(requestListener);

//웹서버를 가동한다.
httpServer.listen(1338, "localhost");

console.log("Server running localhost:1338");

