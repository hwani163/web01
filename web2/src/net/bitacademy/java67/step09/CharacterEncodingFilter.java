package net.bitacademy.java67.step09;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;

import jdk.nashorn.internal.runtime.regexp.joni.Config;
/*
 * 실습목표 : POST 요청 파라미터의 한글 처리
 *  - 기존에 서블릿에 있던 한글 처리 코드를 제거한다.
 *    - BoardAddServlet , BoardChangeServlet을 변경한다.
 * */

//    이렇게 사용하여도 가능하다. 하지만 바람직 하지 않다.
//@WebFilter(
//    urlPatterns="/*",
//    initParams={
//        @WebInitParam(name="encoding" , value="UTF-8")
//    }
//    )

public class CharacterEncodingFilter implements Filter {
  FilterConfig config;
  
  @Override
  public void init(FilterConfig config) throws ServletException {
    this.config = config;
    
  }

  @Override
  public void destroy() {
    
  }

  @Override
  public void doFilter(ServletRequest request, ServletResponse response,
      FilterChain chanManager) throws IOException, ServletException {
    String encoding = config.getInitParameter("encoding");
    if (encoding==null) {
      encoding="UTF-8";
    }
    request.setCharacterEncoding(encoding);
    chanManager.doFilter(request, response);
    
  }

  

}
