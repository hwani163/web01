package net.bitacademy.java67.step10;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/step10/student")
public class StudentPage extends HttpServlet {
/**
   * 
   */
  private static final long serialVersionUID = 1L;

@Override
protected void service(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
  
  PrintWriter out = response.getWriter();
  
  out.println("<h1>수강생관리");
  out.println("<table border='1'>");
  out.println("<tr>");
  out.println("<th>번호</th><th>이름</th><th>연락처</th>");
  out.println("</tr>");
  
  out.println("<tr>");
  out.println("<td>1</td><td>홍길동</td><td>1111-1111</td>");
  out.println("</tr>");
  
  out.println("<tr>");
  out.println("<td>2</td><td>유관순</td><td>2222-2222</td>");
  out.println("</tr>");
  
  out.println("<tr>");
  out.println("<td>2</td><td>장보고</td><td>2222-2222</td>");
  out.println("</tr>");
  
  out.println("<tr>");
  out.println("<td>2</td><td>안창호</td><td>2222-2222</td>");
  out.println("</tr>");
  out.println("</table>");
}
}
