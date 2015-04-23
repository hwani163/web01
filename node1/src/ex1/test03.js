/*
	http 관련 객체 가져오기
  */

var http = require('http');
/*
 * 응답헤더 다루기*/
function requestListener(req , res) {
	res.writeHead(
			200, {'Content-Type': 'text/plain'});
	res.write("하하하하하");
	res.end('석환\n');
}

var httpServer = http.createServer(requestListener);

//웹서버를 가동한다.
httpServer.listen(1338, "localhost");

console.log("Server running localhost:1338");

