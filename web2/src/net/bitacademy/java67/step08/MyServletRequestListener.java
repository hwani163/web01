package net.bitacademy.java67.step08;

import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;

public class MyServletRequestListener implements ServletRequestListener {


  @Override
  public void requestInitialized(ServletRequestEvent event) {
    System.out.println("requestInitialized");
    event.getServletRequest().setAttribute("time", System.currentTimeMillis());

  }
  @Override
  public void requestDestroyed(ServletRequestEvent event) {
    System.out.println("requestDestroyed");
    
    long startTime = (long)event.getServletRequest().getAttribute("time");
    System.out.println("요청 처리시간 : "+(System.currentTimeMillis()-startTime));
  }

}
