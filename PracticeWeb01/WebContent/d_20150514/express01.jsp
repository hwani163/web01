<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@page import="java.sql.Date"%>
    
    
    
    [산술 연산자 사용]
    $앞에 역슬래시(\)를 붙이명
    붙이면 $를 인반 문자로 간주한다.
    
    \${10+20} --> ${10+20}
    
    \${10 mod 20} 
     ${10 mod 20}
    
    [empty 연산자]
    <%pageContext.setAttribute("name","홍길동");%>
    ${empty name}
    ${empty name2}
    
    
    [파라미터 값 꺼내기]
    ${param.name}
    ${param.age}
    [리터럴(literal)표현식]
    - 값을 표현하는 문법
    문자열 -> ${"하하하"} , ${'하하하'}
    숫자 -> ${300} , ${3.14159}
    논리값 -> ${true} , ${false}
    null -> #${null}#
    