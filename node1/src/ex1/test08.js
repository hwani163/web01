/*
 * 이름을 파라메터로 받아서 인사하기
 *
 * */


var http = require('http');
var url = require('url');

function requestListener(req , res) {
	//그냥 해석하면 query String이 문자열로 추출된다.
	// 쿼리스트링을 파라미터 별로 추출 하고 싶으면  두번째 parameter옵션을 true 값으로 주어라
	var urlInfo = url.parse(req.url,true);
	var name = urlInfo.query.name;
	var path = urlInfo.pathname;
	
	
	
	res.writeHead(200, {
		'Content-Type': 'text/html;charset=UTF-8',
		});
	res.write("<html><head><title>test07</title></head>\n");
	res.write("<body><h1>test07</h1>\n");
	res.write("<p>안녕하세요 "+name+"님</p>\n");
	res.end("</body></html>");
}

var httpServer = http.createServer(requestListener);

//웹서버를 가동한다.
httpServer.listen(1338, "localhost");

console.log("Server running localhost:1338");

