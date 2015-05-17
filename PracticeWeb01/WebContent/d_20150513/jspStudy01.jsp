<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    JSP란?
    출력문은 자동으로 생성하는 기술이다.
    JSP 파일을 읽어서 서블릿 클래스를 생성한다.
    템플릿 데이터란 ?  JSP에 작성하는 일반적인 텍스트를 템플릿 데이터라고 한다.
    템플릿 데이터는 out.println() , out.write() 등의 출력문을 생성한다.
    톰캣 서버의 경우 , 임시 배치 폴더의 work 디렉토리에 자동으로 생성된 서블릿 파일을 둔다.
    서블릿 파일이 놓이는 폴더 --> ...temp/work
    클래스 이름은 서블릿 컨테이너가 임의로 짓는다.
    JSP파일은 직접 실행 되지 않는다. 단지 서블릿 클래스를 만들기 위한 재료로 사용 될 뿐이다.
    
    언제 JSP파일을 가지고 서블릿 클래스를 생성하는가
    JSP를 최초로 요청 할 때! JSP를 최초로 Request할 때 , 
    JSP 파일이 변경 되었 을 때,
    
    [JSP의 구동원리]
    1) 클라이언트에서 JSP파일의 실행을 요청하면
    2) 서블릿 컨테이너가 JSP로 만든 서블릿 클래스를 찾습니다.
    3) 만약 서블릿 클래스 파일이 없다면 JSP엔진을 통하여 서블릿 클래스 파일을 만듭니다.(.java)
    4) .java 파일을 컴파일 합니다.
    
    만약 JSP파일이 변경 되었다면
    JSP파일을 분석하여 JSP엔진이 서블릿파일을 만듭니다.
    컴파일합니다
    
    해당 서블릿의 service() 메서드를 호출 합니다.
    
    JSP의 컴파일 규약(JSP 가 Servlet으로 바뀔때의 규약)
    1) httpServlet을 상속 받던지 , GenericServlet을 상속받던지
    	아니면 Servlet인터페이스를 직접 구현하던지 세가지 방법중 하나를 동원하여 서블릿 클래스를 정의합니다.
    	
   2) JspPage 인터페이스를 구현 하여야 합니다.
   		jspPage는 jspInit() , jspDestroy() 가 있습니다.
   		init()을 호출하면 jspInit()를 호출하도록 작성하여야 합니다.
   		destroy()를 호출하면 jspDestroy를 호출 하도록 작성하여야 합니다.
   		
   3)HttpJspPage 인터페이스를 구현하여야 합니다.
   		HttpJspPage인터페이스는 _jspService() 메서드가 있는데
   		service()를 호출하면 _jspService()를호출하도록 작성하여야 합니다.
   		
    