package net.bitacademy.java67.step10;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/step10/test01")
public class Test01 extends HttpServlet {

  /**
   * 
   */
  private static final long serialVersionUID = 1L;
  
  /*
   * 오류가 발생하면 오류 페이지를 출력하는 서블릿으로 실행을 위임한다.
   * */
  
  @Override
  protected void service(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    
    try {
      int a = Integer.parseInt(request.getParameter("a"));
      int b = Integer.parseInt(request.getParameter("b"));
      String op  = request.getParameter("op");
      response.setContentType("text/plain;charset=UTF-8");
      PrintWriter out = response.getWriter();
      switch (op) {
      case "plus":
        out.println("결과 : "+(a+b));
        break;
      case "minus":
        out.println("결과 : "+(a-b));
        break;
      case "multiple":
        out.println("결과 : "+(a*b));
        break;
      case "divide":
        out.println("결과 : "+(a/b));
        break;
        
        default : out.println("Not Suported");

      }
      
    } catch (Throwable e) {
      //오류가 발생한다면 오류내용을 추력하는 페이지로 보낸다.
      /*
       * forward/include 할 때 사용하는 주소는 서블릿 주소이다.
       * 루트(/)는 현재 웹 애플리케이션 경로를 의미한다.
       * 예) /step01/error  => localhost:9999/web2/step01/error
       * 웹 브라우저에 보내는 URL 인 경우 ,  당연히 루트(/)는 서버 주소를 의미한다.
       * 예) /step01/error => localhost:9999/step01/error
       * 
       * sendRedirect("/step10/error")?
       * setHeader("Refresh" , "1;url=step01/error");
       * 
       * 
       * */
      request.setAttribute("error", e);
      RequestDispatcher rd =  request.getRequestDispatcher("/step10/error");
     rd.forward(request, response);
     
    }
    
    
  }

}
