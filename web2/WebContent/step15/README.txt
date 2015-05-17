[JSP Standard Tag Libarary(JSTL)]

-JSP 확장 태그이다.
JSTL API와 구현체를 다운로드 받아야 한다.

[JSTL]
1) 사용할 태그 라이브러리를 가져온다.

<%@ taglib uri="라이브러리 URL" prefix="별명"%>

[JSTL 라이브러리]
Core(http://java.sun.com/jsp/jstl/core , c) 접두어로 c를 많이씀
	=> 변수사용 , 조건문 , 반복문 , URL다루기 , 예외처리 , 출력
XML((http://java.sun.com/jsp/jstl/xml , x)
I18N(http://java.sun.com/jsp/jstl/fmt , fmt)	
Database((http://java.sun.com/jsp/jstl/sql , c) 라이브러리 쓰지말자(JSP내부에서 DB가져오는것)
Functions((http://java.sun.com/jsp/jstl/functions , fn)