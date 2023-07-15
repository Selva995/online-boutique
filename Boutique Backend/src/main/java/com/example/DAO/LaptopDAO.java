package com.example.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.LaptopModel;

public interface LaptopDAO extends JpaRepository<LaptopModel,Integer> {

	
}
