<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
java Express Language 는 자바빈 컴포넌트에 저장된 어플리케이션 데이터  쉽게 를 제어할수 있게 한다.
니가 익스프레션스을 만들떄 JSPEL은. 두가지를 따라야한다 바로 arithmetic과 logical이다
JSP EL 익스프레션 범위 내에 있다. , 니가 integer를 사용하거나 , 부동소수점 , 문자 , 변하지 않는 불리언값 , 그리고 null값이다

간단한 신택스
보통 JSP태그 ㅏㄴ에서 니가 attribute를 명시할때 너는 간단하게 스트링을 사용할 수 있다. 
ex)
 <jsp:setProperty property="perimeter" name="box" value="100"/>
 ${exper}
 
여기 expr 은 정의한다. 익스프레션 그 자체를 가장 보통적인 JSPEL 에서의  연산은 . 과 [] 이다.
이 두가지 연산자는 여러가지 자바빈의 어트리뷰트들 과 JSP안에서 세워지는 객체들을 엑세스 하게 따른다.
예를들어 위의 신택스 [jsp:setProperty]태그는 익스프레션에서 다음과 같이 쓸 수 있다.

<jsp:setProperty property="box" name="perimeter"
						value="${2*box.width+2*box.height }"/>
						
JSP컴파일러(JSP엔진은)이 딸라{ }폼안에 들어있는 어트리 뷰트를 를 볼 때 
이것은 코드를 산출한다. 
 JSP 컴파일러는 특성에 $ {} 형태를 볼 때, 식을 평가하는 코드를 생성하고 expresson의 값 substitues.
 
Express 에서 기본으로  제공하는 객체
1) 보관소를 가리키는 객체명

pageScope	Scoped -> PageContext에 대해서 getAttribute()호출
requestScope	ServletRequest에 대해서 getAttribute()호출
sessionScope	Scoped HttpSession에 대해서 getAttribute()호출
applicationScope	ServletConext에 대해서 getAttribute()호출

2) Servlet/Jsp에서 제공하는 객체
param	-----> getParameter("")		${params.파라메터명} get이랑POST둘다 가능
paramValues	Request parameters as collections of strings
header	HTTP request headers as strings
headerValues	HTTP request headers as collections of strings
initParam	Context-initialization parameters
cookie	Cookie values
pageContext	The JSP PageContext object for the current page


[Express Language]
- 자바 객체의 프로퍼티 값을 쉽게 꺼내는 기술
- 스크립트 류의 문법처럼



 
