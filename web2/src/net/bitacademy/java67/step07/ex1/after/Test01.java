package net.bitacademy.java67.step07.ex1.after;

public class Test01 {

  public static void main(String[] args) {
    PlusCalc c1 = new PlusCalc(null);
    MultipleCalc c2 = new MultipleCalc(c1);
    
    
    System.out.println(c1.compute("+", 10, 20));
    System.out.println(c2.compute("*", 10, 20));
    

  }

}
