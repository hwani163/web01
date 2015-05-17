<%@page import="java.util.ArrayList"%>
<%@page import="net.bitacademy.java67.step13.BoardVo"%>
<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    
    [c:url]
    	-	URL을 쉽게 만든다.
    	https://www.google.co.kr/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#newwindow=1&q=L10N
    	
    <c:url var="searchUrl" value="https://www.google.co.kr/webhp">
    <c:param name="sourceid" value="chrome-instant"></c:param>
    <c:param name="ion" value="1"></c:param>
    <c:param name="espv" value="2"></c:param>
    <c:param name="ie" value="UTF-8"></c:param>
    <c:param name="newwindow" value="1"></c:param>
    <c:param name="q" value="L10N"></c:param>
    </c:url>
    ${searchUrl}
    
    [c:import]
    -HTTP 요청을 수행한다.
    -	url : 서버에 요청할 URL
    - var : 서버의 응답 결과를 보관소에 저장할 때 사용할 이름
    		  만약 var속성을 생략하면 현재 위치에 응답 결과를 출력한다.
    <c:import url="${searchUrl }" var="result"></c:import>
    
    [c:redirect]
    - 리다이렉트를 수행 한다.
    파라메터(GET방식)의 서버의 value값이 google이면 google로 redirect한다.
    <c:if test="${param.server=='google'}">
    <c:redirect url="http://www.google.com"></c:redirect>
    </c:if>
    
    
    
    