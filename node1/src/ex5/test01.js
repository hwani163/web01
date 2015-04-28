var app = require('./miniExpress.js');


// 실습 목표: web01/WebContent/step07/ex4/test01.html의 요청 처리
//


/* '/board/form.do' 요청이 들어왔을 때 호출될 함수를 등록한다.
 */
app.get('/hello', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
	
	res.end('안녕하세요'+req.params['name']+'님\n');
});

function doError(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
	res.write('<html><head><title>test10</title></head>\n');
	res.write('<body>');
	res.write('<h1>요청 처리 오류!</h1>');
	res.write('<p>작업 처리 중 오류가 발생했습니다.</p>');
	res.end('</body></html>\n');
}

app.listen(1337);










