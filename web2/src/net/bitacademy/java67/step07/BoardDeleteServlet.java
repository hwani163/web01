package net.bitacademy.java67.step07;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/* 실습 목표: 서블릿 초기화 파라메터 사용
 */

@WebServlet("/step06/delete")
public class BoardDeleteServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;

  @Override
  protected void doGet(
      HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    int no = Integer.parseInt(request.getParameter("no"));
    
    BoardDao boardDao = new BoardDao();
    ServletContext ctx = this.getServletContext();
    DBConnectionPool dbPool = new DBConnectionPool(
        ctx.getInitParameter("driver"),    //web.xml의 Context 초기화 파라미터 가져오기 
        ctx.getInitParameter("url") , 
        ctx.getInitParameter("user") , 
        ctx.getInitParameter("password"));
    boardDao.setDBConnectionPool(dbPool);
    boardDao.delete(no);
    
    response.sendRedirect("list");
  }
}













