<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    [include 지시어]
    다른 파일의 내용을 그대로 가져온다.
    따라서 인클루드 하는 파일 까지 합쳐서 하나의 자바 소스 파이릉ㄹ 생성한다.
    Test08_2.jsp 와 Test08_a.inc를 합쳐서 하나의 자바 소스 파일을 생성한다.
    인클루드 파일에서도 contentType을 설정 해 주어라! 그래야만 텍스트가 정상적으로 처리된다.
    <%@ include file="Test08_a.inc"%>
    
    //서블릿에서 인클루드는 둘다 서블릿이어야 하지만
    // JSP내에서 Include지시어는 어떤 파일이던지 상관이 없다.
    a? <%=a%>