<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%!int i =10;
    %>
    <%int result = plus(10,20); %>
    <%! public int j = 20; %>
    <%! public int plus(int a , int b){
      return a + b;}
      %>
      
      <%=result %>
    
    [선언식(Declaration Element)]
    - 자바의 클래스 바로 밑에 내려간다.
    -	자바 클래스에 멤버 변수나 메서드를 추가하고 싶을 때 사용한다.
    -	선언식에 작성한 자바 코드는 그대로 클래스 블록에 복사된다.
    -	따라서 선언식 태그의 위치는 상관없다.
    
    	클래스 블럭안에 들어갈수있는것은 모두 들어 갈 수 있다.
    	for , if 와같은 statement 는