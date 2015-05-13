package net.bitacademy.java67.step11;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/* 실습 목표: 인클루드 적용
 */

@WebServlet("/step11/detail")
public class BoardDetailServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;

  @Override
  protected void doGet(
      HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {

    response.setContentType("text/html;charset=UTF-8");
    PrintWriter out = response.getWriter();
    
    out.println("<!DOCTYPE html>");
    out.println("<html>");
    out.println("<head>");
    out.println("<meta charset='UTF-8'>");
    out.println("<title>게시판</title>");
//    RequestDispatcher rd = request.getRequestDispatcher("/step11/commonStyle");
    RequestDispatcher rd = request.getRequestDispatcher("/step11/commonStyle.jsp");
    rd.include(request, response);
   
    out.println("</head>");
    out.println("<body>");
    out.println("<h1>게시물 상세정보2</h1>");
    
    try {
      ServletContext ctx = this.getServletContext();
      BoardDao boardDao =  (BoardDao) ctx.getAttribute("boardDao");
      
      BoardVo board = boardDao.select(
          Integer.parseInt(request.getParameter("no")));
      out.println("<form action=\"change\" method=\"post\">");
      out.println("번호: <input type='text' name='no' readonly value='"
          + board.getNo() + "'><br>");
      out.println("제목: <input type='text' name='title' value='"
          + board.getTitle() + "'><br>");
      out.println("내용: <textarea cols='50' rows='10' name='content'>"
          + board.getContent() + "</textarea><br>");
      out.println("조회수: " + board.getViews() + "<br>");
      out.println("생성일: " + board.getCreateDate() + "<br>");
      out.println("<input type='submit' value='변경'>");
      out.println("<input type='button' value='삭제'"
          + " onclick=\"location.href='delete?no=" + board.getNo() + "'\">");
      out.println("<input type='button' value='취소' onclick=\"location.href='list';\">");
      out.println("</form>");
    } 
    catch (Exception e) {
      
      rd = request.getRequestDispatcher("/step11/error");
      request.setAttribute("error", e);
      rd.forward(request, response);
      return;
    }
//    rd = request.getRequestDispatcher("/step11/footer");
    rd = request.getRequestDispatcher("/step11/footer.jsp");
    rd.include(request, response);
    
    out.println("</body>");
    out.println("</html>");
  }
}













