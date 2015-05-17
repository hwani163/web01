<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"
    trimDirectiveWhitespaces="f"%>
    <%--지시어 다음에 오는 엔터를 없애라 --%>
    [지시어 Derective Element]
    
    1) page
    -페이지를 제어하는 자바코드를 생성한다.
    pageEncoding
    JSP파일의 텍스트 인코딩을 지정한다.
    JSP 파일을 저장 할 때 page Encoidng 에 설정된 문자 집합으로 저장한다.
    2) include
    - 다른 파일의 내용을 가져온다,.
    3) taglib
    -	JSP 태그 라이브러리를 로딩한다.
    
    
    <%--  문법 :     <%@ 지시어 속성="값" 속성="값" %>--%>
    1.page지시어
    contentType : response.setContentType() 메서드 생성
    pageEncoding
    language
    import
    	예) import="java.util.*"	--> import java.util.*;
    	예) import="java.util.* , java.net.*"
    	
    <%@ page import="java.util.*"%>
    <%@ page import="java.util.*"%>
    
    <% int a=10;%>
    <% int b=20;%>