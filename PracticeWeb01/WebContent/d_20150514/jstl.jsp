<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    [jsp standard tag libarary jstl]
    jsp 확장 태그이다.
    jspl API와 구현체를 다운로드 받아야 한다.
    http://jstl.java.net
    
    [jstl 사용법]
    1) 사용할 태그 라이브러리를 가져온다.

    [jstl 라이브러리의 종류]
    
    <%@taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c" %>
    => 변수사용 , 조건문 , 반복문 , URL다루기 , 예외처리 , 출력
    <%@ taglib uri="http://java.sun.com/jsp/jstl/xml"  prefix="x"%>
    
    
    [c:out]
    출력문을 생성하는 태그이다.
    c: out value="출력할값" default="기본값 
    " 