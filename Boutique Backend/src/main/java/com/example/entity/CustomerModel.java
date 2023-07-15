package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.Table;



@Entity
@Table(name="customer_model")
public class CustomerModel {
	@Id
	String email;
	String userName;
	String password;
	public CustomerModel() {
		
	}
	
	public CustomerModel(String userName, String email, String password) {
		super();
		this.userName = userName;
		this.email = email;
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	}

	
	