package net.bitacademy.java67.d_20150513;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ForwardTest
 */
@WebServlet("/d_20150513/ForwardTest")
public class ForwardTest extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ForwardTest() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
	    throws ServletException, IOException {
	  response.setCharacterEncoding("UTF-8");
	  request.setAttribute("hi", "제이름은 원석환 입니다. 이것은 포워드 테스트 입니다.");	  
	 request.getRequestDispatcher("/d_20150513/ForwardTestSub").forward(request, response);
   
	  
	}

}
