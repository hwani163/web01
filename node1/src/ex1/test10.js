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
 */
function requestListener(req, res) {
	var urlInfo = url.parse(req.url, true);
	res.writeHead(200, {
		'Content-Type' : 'text/html;charset=UTF-8',
	});
	res.write("<html><head><title>test07</title></head>\n");

	if (urlInfo.pathname == '/carc') {

		var op = urlInfo.query.op;
		var v1 = urlInfo.query.v1;
		var v2 = urlInfo.query.v2;
		var result;
		switch (op) {
		case 'plus':
			result = Number(v1) + Number(v2);
			break;
		case 'minus':
			result = v1 - v2;
			break;
		case 'multiple':
			result = v1 * v2;
			break;
		case 'divide':
			result = v1 / v2;
			break;
		case'remainder':
			result = v1%v2;
		/*default:
			res.write("<p>해당 연산을 지원하지 않습니다.</p>");
			break;*/
			default:
				throw "해당 연산을지원 하지 않습니다.";
		}
		if (result!=undefined) {
			res.write("<p>계산결과는 " + result + "</p>\n");
		}

	} else {
		res.write("<p>해당 url을 지원하지 않습니다.</p>");
	}

	res.end("</body></html>");

}

var httpServer = http.createServer(requestListener);
httpServer.listen(1337, "localhost");
console.log("Server running localhost:1337");
