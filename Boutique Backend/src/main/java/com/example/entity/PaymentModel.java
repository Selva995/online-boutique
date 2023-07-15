package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="payment_model")
public class PaymentModel {
	@Id
	@GenericGenerator(name="xyz",strategy="increment")
	@GeneratedValue(generator="xyz")
    int id;
	String email;
	//String title,description;
	String name,address,state;
	long phoneNo;
	int zipCode;
    double grandTotal;
    public PaymentModel() {
    	
    }
    
	public PaymentModel(int id, String email, String name, String address, String state, long phoneNo, int zipCode,
			double grandTotal) {
		super();
		this.id = id;
		this.email = email;
		this.name = name;
		this.address = address;
		this.state = state;
		this.phoneNo = phoneNo;
		this.zipCode = zipCode;
		this.grandTotal = grandTotal;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}
	public int getZipCode() {
		return zipCode;
	}
	public void setZipCode(int zipCode) {
		this.zipCode = zipCode;
	}
	public double getGrandTotal() {
		return grandTotal;
	}
	public void setGrandTotal(double grandTotal) {
		this.grandTotal = grandTotal;
	}
    
					
}
