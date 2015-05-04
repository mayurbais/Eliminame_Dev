package com.eliminame.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.eliminame.entity.Gzrimrg;

public interface GzrimrgRepository extends CrudRepository<Gzrimrg, String>{

	
	@Override
	public List<Gzrimrg> findAll();
	
	
}
    
