/*
	http 관련 객체 가져오기
  */

var http = require('http');
var url = require('url');
/*
 * 요청 URL정보 알아내기
 *
 * */
function requestListener(req , res) {
	
	var urlInfo = url.parse(req.url);
	console.log("URL정보 : " , urlInfo.href);
	console.log("해당 웹 어플리케이션 경로",urlInfo.pathname);
	console.log("쿼리스트링 = ",urlInfo.search);
	console.log("쿼리스트링 추출!  ",urlInfo.query);
	
	res.writeHead(200, {
		'Content-Type': 'text/html;charset=UTF-8',
		});
	res.write("<html><head><title>test06</title></head>\n");
	res.write("<body><h1>test06</h1>\n");
	res.write("<p>안녕하세요</p>\n");
	res.end("</body></html>");
}

var httpServer = http.createServer(requestListener);

//웹서버를 가동한다.
httpServer.listen(1338, "localhost");

console.log("Server running localhost:1338");

