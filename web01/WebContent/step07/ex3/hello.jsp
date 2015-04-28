<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
    //POST요청으로 들어오는 한글은 데이터를 꺼내기 전에 
    //어떤 문자 집합 인지알려 주어야 한다.
    request.setCharacterEncoding("UTF-8");
    %>
안녕하세요
${param.name} , ${param.age}.