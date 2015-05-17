<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    [JSP액션태그 : useBean]
    인스턴스트를 생성한다.
    id : 객체를 참조할 때 사용할 이름. 객체를 저장할때 key로 사용함.
    class :  객체를 생성할 때 사용할 클래스명 .Fully-qualified Name이어야 한다. (패키지명을 하상 포함하ㅏ야 한다. import와 상관없다.)
    
    scope : 개체를 찾고 보관하는 장소를 지정한다. 기본은 PageContext이다.
    			page(PageContext) , request(ServletRequest) , session(HttpSession) , application(ServletContext)			
    			
    type : 객체를 가리키는 참조 변수
    
    
    <jsp:useBean id="list" class="java.util.ArrayList"></jsp:useBean>
    <%-- 태그를 사용하여 객체를 만드는 순간
    대음자바코드로 바뀐다.
     --%>
    
    <% list.add("홍길동");
    list.add("꺾정임");
    list.add("관순유");
     
    %>
    <%= list.get(0)%>
    <%= list.get(1)%>
    --------------------------------------------------------
    
    <jsp:useBean id="list2" class="java.util.ArrayList" scope="page"></jsp:useBean>
    <%
    //scope을 지정하지 않으면 객체가 PageContext 에 보관된다는 것을 확인하자.
    ArrayList r1 = (ArrayList)pageContext.getAttribute("list");
    // scope를 page로 설정하면  PageContext에 객체가 보관 된 다는 것을 확인하자
    ArrayList r2 = (ArrayList)pageContext.getAttribute("list2");
    %>
    <%=list==r1 %>
    
    -------------------------------------------------------.
    <%--이미 해당 보관소에 해당 아이디를 갖는 객체가 있다면 , 기존 객체를 리턴한다. 증명하자! --%>
    <%ArrayList temp = new ArrayList();
    temp.add("원석환");
    temp.add("gg");    	
    	pageContext.setAttribute("list3", temp);
    %>
    <jsp:useBean id="list3" class="java.util.ArrayList"></jsp:useBean>
    
    <%= list3.get(0) %>
    <%= list3.get(1) %>
    
    <jsp:useBean id="list4" class="java.util.ArrayList" scope="request"/>
    <%
    ArrayList temp2 = (ArrayList)pageContext.getAttribute("list4");
    ArrayList temp3 = (ArrayList)request.getAttribute("list4");
    %>    
    <%=temp2 %>
    <%=temp3 %>
    
    <%--class와 타입을 모두 지정하기 --%>
    <jsp:useBean id="list5" class="java.util.ArrayList" type="java.util.ArrayList"></jsp:useBean>
    <%list5.add("홍길동"); %>
    <%=list5.get(0) %>
    
    