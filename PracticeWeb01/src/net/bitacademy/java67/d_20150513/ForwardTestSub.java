package net.bitacademy.java67.d_20150513;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ForwardTestSub
 */
@WebServlet("/d_20150513/ForwardTestSub")
public class ForwardTestSub extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ForwardTestSub() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
      PrintWriter out = response.getWriter();
      out.println(request.getAttribute("hi"));
      request.getRequestDispatcher("/d_20150513/JspForward.jsp").forward(request, response);

      
    }

}
