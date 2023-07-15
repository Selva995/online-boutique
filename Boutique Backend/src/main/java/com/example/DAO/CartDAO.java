package com.example.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.CartModel;

public interface CartDAO extends JpaRepository<CartModel,Integer> {

}
