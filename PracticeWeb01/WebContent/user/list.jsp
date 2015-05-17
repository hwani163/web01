<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@page import="net.bitacademy.java67.vo.User" %>
    
    <%
    ArrayList<User> list = new ArrayList<User>();
    list = (ArrayList<User>)request.getAttribute("list"); %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

<%for(int i=0;  i<list.size(); i++){%>
<%= list.get(i).getUno() %>
<%= list.get(i).getName() %>
<%= list.get(i).getTel() %>
<%= list.get(i).getEmail() %>
<%= list.get(i).getHomepage() %>
<%= list.get(i).getTwitter() %>
<br>
<% }%>

</body>
</html>