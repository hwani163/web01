package net.bitacademy.java67.model;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import net.bitacademy.java67.dao.UserDao;
import net.bitacademy.java67.vo.User;
@WebServlet("/user/list.do")
public class ListAction extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ListAction() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	  ServletContext ctx = request.getServletContext();
	  UserDao dao = (UserDao) ctx.getAttribute("userDao");
	  ArrayList<User> list = new ArrayList<User>();
	  list = dao.selectList();
	  
	  request.setAttribute("list", list);
	  RequestDispatcher rd = request.getRequestDispatcher("/user/list.jsp");
	  rd.forward(request, response);
	}

}
