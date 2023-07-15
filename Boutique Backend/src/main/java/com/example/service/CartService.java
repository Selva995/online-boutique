package com.example.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.DAO.CartDAO;
import com.example.entity.CartModel;
@Service
public class CartService {
@Autowired	
CartDAO cd;
public CartModel getCartById(int id) {
		
		Optional<CartModel> cm=cd.findById(id);
		if(cm.isPresent()) {
			//System.out.println(pm.get().getName());
			return cm.get();
		}else {
                      return null;
}
}
}
