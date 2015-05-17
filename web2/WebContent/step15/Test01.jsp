<%@page import="net.bitacademy.java67.step13.BoardVo"%>
<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    
    [c:out]
    -출력문을 생성하는 태그이다.
    - c : out value ="출력할값" default="기본값"
    
    <c:out value="하하하" default="기본...."/>
    <c:out value="${null}" default="기본값...."></c:out>
    <c:out value="${null}" >기본이래...</c:out>
    
    [c:set]
    - 변수를 생성한다. 기존에 이미 같은 이름의 변수가 있따면 덮어쓴다.
    -	c:set var="변수명" value="값" scope="" 
    
    <c:set var="name" value="홍길동"></c:set>
    <c:set var="name2" scope="request">임꺽정</c:set>
    ${pageScope.name}
    ${requestScope.name2}
    
    <c:set var="name" value="신채호"></c:set>
    ${name}
    
    <%BoardVo board = new BoardVo();
    	board.setNo(1);
    	board.setTitle("제목입니다.");
    	pageContext.setAttribute("board", board);    	
    %>
    	${board.title}
    	
    	<c:set target="${board }" property="title" value="오호라...제목"></c:set>
    	${board.title}
    	
    	
    	
    	[보관소 저장된 값 제거하기]
    	
    	c:remove var="변수명" scope="보관소"
    	제거전 : ${name }
    	<c:remove var="name"/>
    	제거후 : ${name}
    	
    	
    	[scope를 지정하지 않으면 paageContext부터 저장소를 하나하나 다 찾아 올라간다.]
    	제거전 : ${name2 }
    	<c:remove var="name2" scope="page"/>
    	없는객체를 제거하려했을 때 결과 : ${name}
    
    
    	[scope을 지정하면 , 오로지 그 보관소에서만 찾는다. 못찾으면 다른 보관소로 이동하지 않는다.]
    	제거전 :  ${board.title}
    	<c:remove var="board" scope="page"/>
    	제거후 : ${board.title}