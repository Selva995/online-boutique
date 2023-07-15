package com.example.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.CustomerModel;

public interface CustomerDAO extends JpaRepository<CustomerModel,String>{

	public CustomerModel findByEmail(String email);
	public CustomerModel findByEmailAndPassword(String email,String password);
	

}

