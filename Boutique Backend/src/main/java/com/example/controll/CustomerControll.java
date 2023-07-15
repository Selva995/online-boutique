package com.example.controll;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.service.CustomerService;
import com.example.DAO.CustomerDAO;
import com.example.entity.CustomerModel;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CustomerControll {
	@Autowired
	CustomerService cs;
	@GetMapping("view")
	//@RequestMapping(value="/users",method=RequestMethod.GET)
	public List<CustomerModel> getUsers() {
		return cs.getAllUsers();
	}
	/*@PostMapping("viewI")
	public CustomerModel getCustomer(@RequestBody CustomerModel id) {
	String id1=id.getEmail();
	return cs.getUserById(id1);	
}*/
	@PostMapping("insert")
	@CrossOrigin(origins="http://localhost:4200")
	//@RequestMapping(value="/save",method=RequestMethod.POST)
	public void saveU(@RequestBody CustomerModel c) throws Exception{
		String tempEmailId=c.getEmail();
		if(tempEmailId !=null && !"".equals(tempEmailId));
		 CustomerModel cobj=cs.fetchUserByEmail(tempEmailId);
		 if(cobj !=null) {
			 throw new Exception("user with " +tempEmailId+ " Already exist");
		 }
		 cs.saveUser(c);
	}
	public CustomerModel loginU(@RequestBody CustomerModel c) throws Exception{
		String tempEmailId=c.getEmail();
		String tempPass=c.getPassword();
		CustomerModel c1=null;
		if(tempEmailId !=null && tempPass!=null) {
			cs.fetchUserByEmailAndPassword(tempEmailId, tempPass);
		}
		if(c1==null) {
			throw new Exception("Your datas should not be blank");
		}
		 return c1;
	}


	@Autowired
	private CustomerDAO cDAO;
	@PostMapping("/login")
    @CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<?> userLogin(@RequestBody CustomerModel userData){
		CustomerModel user=cDAO.findByEmail(userData.getEmail());
		System.out.println(user);
		if(user.getPassword().equals(userData.getPassword())) {
			return ResponseEntity.ok(user);
		}
		return (ResponseEntity<?>)ResponseEntity.internalServerError();
	}
}
	
	
	

