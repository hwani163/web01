<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    Scriptlet
   	-	선언된 순서대로 _jspService()에 복사된다.
   	<% int a; %>
   	<% a=20; %>
   	<% out.println(a); %>
   	<% for(int i=0; i < a; i++){%>
   <%	out.write(i);
   } %>