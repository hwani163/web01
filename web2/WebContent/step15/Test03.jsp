<%@page import="java.util.ArrayList"%>
<%@page import="net.bitacademy.java67.step13.BoardVo"%>
<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    
    [c:forEach]
    	-	반복문 구현한다.
    	-   c:forEach var="항목명" items="목록" begin="시작인덱스" end="종료인덱스"
    	-	var -> 목록에서 꺼낸 객체를 가리킨다.
    	-	items -> 배열이나 Collection인터페이스 구현체를 가리킨다.
    					java.util.Collection(ArrayList , LinkedList , Vector ,EnumSet)
    					java.util.Iterrater
    					
    1) 배열반복
    <%pageContext.setAttribute("name", new String[]{"홍길동","임걱정" , "신쟃"});%>
    
    <c:forEach var="n" items="${name}">
    ${n}
    </c:forEach>
    
    --------------------------------------------------------
    
    <c:forEach var ="n2" items="${name}" begin="1">
    ${n2}
    </c:forEach>
    
    --------------------------------------------------
    
     <c:forEach var ="n2" items="${name}" begin="0" end="1">
    ${n2}
    </c:forEach>
    
    
    2) ArrayList 반복하기
    <%ArrayList<String> names2 = new ArrayList<String>();
    names2.add("홍길동");
    names2.add("임꺽정");
    names2.add("신채호");
    names2.add("유관순");    
    request.setAttribute("names2", names2);
    %>
    
    <c:forEach var ="items" items="${names2 }">
    ${items}
    </c:forEach>
    
    3) 그냥 반복문 만들기
    <c:set var="sum" value="0"></c:set>
    <c:forEach var="no" begin="1" end="10">
    =>${sum} = sum+${no}
    <c:set var="sum" value="${sum+no }"></c:set>    
    </c:forEach>
    합계 : ${sum}
    
    
    [c:forTokens]
    특정 구분자로 문자열을 쪼개고 싶을 때 사용한다.
    <c:set var="queryString" value="name=aaa&age=20&tel=111"></c:set>
    <c:forTokens items="${queryString}" delims="&" var="token">
    ${token}
    </c:forTokens>