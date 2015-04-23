/*
실습목표 : 
요청과 응답에 대해 사용 할 수 있는 메서드
 */

require('http').createServer(function (req , res) {
	// 	http 응답헤더 출력
	// 	예)
	//     http/1.2 200 OK CRLF
	// 	Content-Type: text/plain CRLF
	// 	....등등등
	// 	HelloWrold CRLF
	res.writeHead(200, {
		'Content-Type': 'text/plain'
		,'Refresh': '3;url=http://daum.net'
	});
	res.end('석환입니다.\n');
}).listen(1338, "localhost");

console.log("Server running localhost:1338");

