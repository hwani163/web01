<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
    <%
    //10초정도 멈추었다가 클라이언트에게 응답한다.
    //응답시간이 지연 되는 것을 표현 하기 위함이다.
    Thread.currentThread().sleep(10000);
    %>
<h1>스마트폰</h1>
<ul>
  <li>애플 아이폰 </li>
  <li> 삼성갤럭시폰 </li>
  <li> 엘지 G씨리쯔 </li>
</ul>