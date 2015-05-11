package net.bitacademy.java67.step04.servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import net.bitacademy.java67.step04.DBConnectionPool;
import net.bitacademy.java67.step04.dao.ManagerDao;
import net.bitacademy.java67.step04.vo.ManagerVo;

@WebServlet("/step04/manager/ManagerUpdate")
public class ManagerUpdate extends HttpServlet {
  private static final long serialVersionUID = 1L;
  

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    request.setCharacterEncoding("UTF-8");
    response.setContentType("text/html;charset=UTF-8");
    ManagerDao managerDao = new ManagerDao();
    managerDao.setDBConnectionPool(new DBConnectionPool());
    
    MultipartRequest mulRequest = new MultipartRequest(
        request, "C:\\Users\\hwan\\git\\web01\\web2\\WebContent\\step04\\manager\\img\\",
        1024*1024*10,
        "UTF-8",
        new DefaultFileRenamePolicy());
      // (요청객체, 파일이 쓰여질 경로, 파일의 최대크기, 인코딩방식, 파일명이 이미 있을 경우 '파일명+1')
         File image = mulRequest.getFile("photo"); // image에 파일의 이름을 담음
         System.out.println(image);
         System.out.println(image.getName());
         
    
    
    ManagerVo manager = new ManagerVo();
    manager.setMno(Integer.parseInt(mulRequest.getParameter("no")));
    manager.setName(mulRequest.getParameter("name"));
    manager.setEmail(mulRequest.getParameter("email"));
    manager.setPassword(mulRequest.getParameter("password"));
    if (image.getName()!=null) {
     manager.setPhoto(image.getName());
    }else {      
      manager.setPhoto(mulRequest.getParameter("photo"));
    }
    
    manager.setTel(mulRequest.getParameter("tel"));
    managerDao.update(manager);
   
    response.sendRedirect("ManagerList");
   
    
    
    
    
  }
}