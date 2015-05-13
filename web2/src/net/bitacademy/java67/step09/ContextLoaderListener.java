package net.bitacademy.java67.step09;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class ContextLoaderListener implements ServletContextListener {
  DBConnectionPool dbPool;
  @Override
  public void contextInitialized(ServletContextEvent event) {
    //웹 애플리케이션을 실행하는 동안 사용할 기본 객체 준비한다.
    ServletContext ctx = event.getServletContext();
    dbPool = new DBConnectionPool( 
        ctx.getInitParameter("driver"),    //web.xml의 Context 초기화 파라미터 가져오기 
        ctx.getInitParameter("url") , 
        ctx.getInitParameter("user") , 
        ctx.getInitParameter("password"));
    
    BoardDao boardDao= new BoardDao();
    boardDao.setDBConnectionPool(dbPool);
    
    ctx.setAttribute("boardDao", boardDao);
    
    
  }

  @Override
  public void contextDestroyed(ServletContextEvent event) {
    dbPool.closeAll();
    

  }


}
