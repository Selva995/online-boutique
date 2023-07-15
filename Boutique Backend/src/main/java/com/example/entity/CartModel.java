package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="cart_model")
public class CartModel {
	@Id
	@GenericGenerator(name="xyz",strategy="increment")
	@GeneratedValue(generator="xyz")
	int id;
	String title,description;
	double price;
	String email;
	public CartModel() {
		
	}
	
	public CartModel(int id, String title, String description, double price, String email) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.email = email;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
}
