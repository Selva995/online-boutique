package com.example.controll;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.DAO.CartDAO;
import com.example.entity.CartModel;
import com.example.service.CartService;

@RestController
@CrossOrigin(origins="*")
public class CartControll {
	@Autowired
	CartDAO cd;
	@GetMapping("showcart")
	@CrossOrigin(origins="http://localhost:4200")
	public List<CartModel>findAllOrders(){
		return cd.findAll();
	}

	CartService cs;
	@PostMapping("id")
    @CrossOrigin(origins="http://localhost:4200")
	public CartModel getCustomer(@RequestBody CartModel id) {
     int id1=id.getId();
	return cs.getCartById(id1);	
	}
	
	@PostMapping("cart")
	@CrossOrigin(origins="http://localhost:4200")
	public void addcart(@RequestBody CartModel c[]) {
		for(int i=0;i<c.length;i++) {
			cd.save(c[i]);
			}
	}

}
