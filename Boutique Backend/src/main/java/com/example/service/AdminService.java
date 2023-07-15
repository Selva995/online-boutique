package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DAO.AdminDAO;
import com.example.entity.AdminModel;
@Service
public class AdminService {
    @Autowired
    AdminDAO ad;
	public List<AdminModel> getAllUsers() {
		// TODO Auto-generated method stub
		return ad.findAll();
	}
	public void saveUser(AdminModel a) {
		 ad.save(a);
	}
	/*public AdminModel fetchUserByEmailAndPassword(String email, String password) {
		return ad.findByEmailAndPassword(email,password);

		
	}*/
	

}
