package net.bitacademy.java67.d_20150513;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/d_20150513/Seok")
public class Seok extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Seok() {
        super();
        // TODO Auto-generated constructor stub
    }
@Override
protected void service(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
  response.setCharacterEncoding("UTF-8");
  request.setAttribute("hi", "hi");
  PrintWriter out = response.getWriter();
  out.println("원");
    RequestDispatcher rd = request.getRequestDispatcher("/d_20150513/Hwan");
    rd.include(request, response);
    rd = request.getRequestDispatcher("/d_20150513/JspInclude.jsp");
    rd.include(request, response);
    
 
  
  

}
}
