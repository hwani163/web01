package net.bitacademy.java67.step11;

import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;

public class RequestMonitoringListener implements ServletRequestListener {


  @Override
  public void requestInitialized(ServletRequestEvent event) {
    event.getServletRequest().setAttribute("time", System.currentTimeMillis());

  }
  @Override
  public void requestDestroyed(ServletRequestEvent event) {
    long startTime = (long)event.getServletRequest().getAttribute("time");
    System.out.println("요청 처리시간 : "+(System.currentTimeMillis()-startTime));
  }

}
