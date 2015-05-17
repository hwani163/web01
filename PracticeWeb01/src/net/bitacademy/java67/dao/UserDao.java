package net.bitacademy.java67.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.sql.DataSource;

import net.bitacademy.java67.vo.User;

public class UserDao {
  DataSource dataSource;
  
  public void setDataSource(DataSource dataSource){
    this.dataSource = dataSource;
  }

  public ArrayList<User> selectList(){
    ArrayList<User> list = new ArrayList<User>();
    Connection con =null;
    Statement stmt =null;
    ResultSet rs = null;
    
    try {
      con = dataSource.getConnection();
      stmt = con.createStatement();
      
      rs = stmt.executeQuery("select uno ,name , email , tel , hp , twit from users");
      
      User user = null;
      
      while (rs.next()) {
        user = new User();
        user.setUno(rs.getInt("uno"));
        user.setName(rs.getString("name"));
        user.setEmail(rs.getString("email"));
        user.setTel(rs.getString("hp"));
        user.setTwitter(rs.getString("twit"));
        list.add(user);        
      }
      return list;
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }finally{
      try{rs.close();} catch(Exception e){}
      try{stmt.close();} catch(Exception e){}
      try{con.close();} catch(Exception e){}
    }
    
    
    
    
    
    
  }
}
