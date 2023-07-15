package com.example.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.PaymentModel;

public interface PaymentDAO extends JpaRepository<PaymentModel,Integer>{
	

}
