package com.eliminame.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eliminame.entity.Gzrelim;

@Repository
public interface RelimRepository extends JpaRepository<Gzrelim, String>{

	


}
