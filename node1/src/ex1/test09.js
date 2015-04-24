/*
 * 특정 웹 어플리케이션 경로에 대해서만 처리하기.
 *
 * */


var http = require('http');
var url = require('url');

function requestListener(req , res) {
	//그냥 해석하면 query String이 문자열로 추출된다.
	// 쿼리스트링을 파라미터 별로 추출 하고 싶으면  두번째 parameter옵션을 true 값으로 주어라
	var urlInfo = url.parse(req.url,true);
	res.writeHead(200, {
		'Content-Type': 'text/html;charset=UTF-8',
	});
	res.write("<html><head><title>test07</title></head>\n");
	
	if (urlInfo.pathname=='/hello') {
		var name = urlInfo.query.name;
		var path = urlInfo.pathname;
		res.write("<body><h1>test07</h1>\n");
		res.write("<p>안녕하세요 "+name+"님</p>\n");
		
	}
	else{
		res.write("<p>해당 url을 지원하지 않습니다.</p>");
	}
	
	res.end("</body></html>");
	
	
}

var httpServer = http.createServer(requestListener);
httpServer.listen(1338, "localhost");
console.log("Server running localhost:1338");

