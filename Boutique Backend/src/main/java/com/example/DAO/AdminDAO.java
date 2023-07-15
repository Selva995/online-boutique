package com.example.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.AdminModel;

public interface AdminDAO extends JpaRepository<AdminModel,String> {
//	public AdminModel findByEmailAndPassword(String email,String password);

	public AdminModel findByEmail(String email);



	

}
