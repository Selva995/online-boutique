package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DAO.CustomerDAO;
import com.example.entity.CustomerModel;
@Service
public class CustomerService {
	@Autowired
    CustomerDAO cd;
	public List<CustomerModel> getAllUsers() {
		return cd.findAll() ;
	}
/*public CustomerModel getUserById(String email) {
		
		Optional<CustomerModel> cm=cd.findById(email);
		if(cm.isPresent()) {
			//System.out.println(pm.get().getName());
			return cm.get();
		}else {
                      return null;
}
}*/
	public void saveUser(CustomerModel c) {
		 cd.save(c);
	}
	public CustomerModel fetchUserByEmail(String email) {
		return cd.findByEmail(email);
	}
	public CustomerModel fetchUserByEmailAndPassword(String email,String password) {
		return cd.findByEmailAndPassword(email,password);
	}
	

}
