package net.bitacademy.java67.step08;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class MyServletContextListener implements ServletContextListener {

  @Override
  public void contextDestroyed(ServletContextEvent arg0) {

    //웹 어플리 캐이션을 종료하기 직전에 호출된다.
    System.out.println("contextDestroyed");
  }

  @Override
  public void contextInitialized(ServletContextEvent arg0) {
    System.out.println("contextInitialized()");
  }

}
