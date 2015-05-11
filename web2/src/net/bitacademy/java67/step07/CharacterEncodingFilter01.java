package net.bitacademy.java67.step07;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class CharacterEncodingFilter01 implements Filter {

  @Override
  public void destroy() {
    // TODO Auto-generated method stub
    
  }

  @Override
  public void doFilter(ServletRequest request, ServletResponse response,
      FilterChain chanManager) throws IOException, ServletException {
    // 다음 필터를 실행하기 전에 수행할 작업
    System.out.println("작업전......");
    //다음 필터를 실행 . 만약 다음 필터가 없다면 , 원래대로 서블릿 실행
    
    //서블릿 실행 후에 수행할 작업
    // to 체인 관리자
    // 다른 필터를 실행해 주오.
    // 만약 다음 필터가 없다면 , 원래대로 서블릿 실행해 주오.
    chanManager.doFilter(request, response);
    
    System.out.println("작업후....");
    
  }

  @Override
  public void init(FilterConfig arg0) throws ServletException {
    // TODO Auto-generated method stub
    
  }

}
