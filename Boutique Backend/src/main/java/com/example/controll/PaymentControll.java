package com.example.controll;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.DAO.PaymentDAO;
import com.example.entity.LaptopModel;
import com.example.entity.PaymentModel;
import com.example.service.PaymentService;

@RestController
@CrossOrigin(origins="http://localhost:4200")

public class PaymentControll {
	@Autowired
    PaymentService ps;
	@GetMapping("details")
	@CrossOrigin(origins="http://localhost:4200")
	//@RequestMapping(value="/users",method=RequestMethod.GET)
	public List<PaymentModel> getUsers() {
		return ps.getAllpay();
	}
	//PaymentDAO pd;
	@PostMapping("payments")
	@CrossOrigin(origins="http://localhost:4200")
	public void savePay(@RequestBody PaymentModel p)throws Exception {
		//for(int i=0;i<p.length;i++) {
			ps.savep(p);
			//}
	}
}
