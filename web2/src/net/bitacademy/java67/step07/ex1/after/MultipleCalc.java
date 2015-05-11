package net.bitacademy.java67.step07.ex1.after;

public class MultipleCalc extends Filter {

  public MultipleCalc(Filter next) {
    super(next, "*");
    // TODO Auto-generated constructor stub
  }

  @Override
  public int doFilter(int a, int b) {
    // TODO Auto-generated method stub
    return a*b;
  }

}
