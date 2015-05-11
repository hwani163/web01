package net.bitacademy.java67.step04.servlet;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.bitacademy.java67.step04.DBConnectionPool;
import net.bitacademy.java67.step04.dao.ManagerDao;
import net.bitacademy.java67.step04.vo.ManagerVo;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;


@WebServlet("/step04/manager/ManagerAdd")
public class ManagerAdd extends HttpServlet {
  private static final long serialVersionUID = 1L;

  @Override
  protected void service(
      HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    
    request.setCharacterEncoding("UTF-8");
    MultipartRequest mr = new MultipartRequest       
        (request, "manager/img/", 1024*1024*10, "UTF-8", new DefaultFileRenamePolicy());
      // (요청객체, 파일이 쓰여질 경로, 파일의 최대크기, 인코딩방식, 파일명이 이미 있을 경우 '파일명+1')
        
         
         File photo = mr.getFile("photo"); // image에 파일의 이름을 담음
         System.out.println(photo);
         photo.getName();
    
    ManagerVo manager = new ManagerVo();
    manager.setName(mr.getParameter("name"));
    manager.setEmail(mr.getParameter("email"));
    manager.setPassword(mr.getParameter("password"));
    manager.setTel(mr.getParameter("tel"));
    manager.setPhoto(photo.getName());
    
    ManagerDao managerDao = new ManagerDao();
    managerDao.setDBConnectionPool(new DBConnectionPool());
    managerDao.insert(manager);
    
    response.sendRedirect("ManagerList");
  }
}
