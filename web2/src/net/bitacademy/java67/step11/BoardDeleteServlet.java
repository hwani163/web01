package net.bitacademy.java67.step11;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/* 실습 목표: 서블릿 초기화 파라메터 사용
 */

@WebServlet("/step11/delete")
public class BoardDeleteServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;

  @Override
  protected void doGet(
      HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    int no = Integer.parseInt(request.getParameter("no"));
    
    ServletContext ctx = this.getServletContext();
    BoardDao boardDao =  (BoardDao) ctx.getAttribute("boardDao");
    
    boardDao.delete(no);
    
    response.sendRedirect("list");
  }
}













