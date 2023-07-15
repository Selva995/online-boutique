package com.example.controll;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.DAO.AdminDAO;
import com.example.entity.AdminModel;
import com.example.service.AdminService;

@RestController
@CrossOrigin(origins="*")
public class AdminControl {
	@Autowired
	AdminService cs;
	@GetMapping("view2")
	//@RequestMapping(value="/users",method=RequestMethod.GET)
	public List<AdminModel> getUsers() {
		return cs.getAllUsers();
	}
	@PostMapping("update")
	public void updatU(@RequestBody AdminModel a) {
		cs.saveUser(a);
	}
	@Autowired
	private AdminDAO aDAO1;
	@PostMapping("/verify")
   @CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<?> userLogin1(@RequestBody AdminModel userData1)throws Exception{
		AdminModel user1=aDAO1.findByEmail(userData1.getEmail());
		System.out.println(user1);
		if(user1.getKeyword().equals(userData1.getKeyword())) {
			return ResponseEntity.ok(user1);
		}
		return (ResponseEntity<?>)ResponseEntity.internalServerError();
	}
	@Autowired
	private AdminDAO aDAO;
	@PostMapping("/login2")
    @CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<?> userLogin(@RequestBody AdminModel userData){
		AdminModel user=aDAO.findByEmail(userData.getEmail());
		System.out.println(user);
		if(user.getPassword().equals(userData.getPassword())) {
			return ResponseEntity.ok(user);
		}
		return (ResponseEntity<?>)ResponseEntity.internalServerError();
	}
}