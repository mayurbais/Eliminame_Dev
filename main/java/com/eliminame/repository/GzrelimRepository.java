package com.eliminame.repository;

import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.eliminame.entity.Gzrelim;

public interface GzrelimRepository extends CrudRepository<Gzrelim, String>{

	@Procedure(name = "Gzrelim.P_SCAN_DUP_PIDM_WRAP")
	
	void pScanDupPidmWrap(@Param("P_MATCH_SOURCE") String P_MATCH_SOURCE, @Param("P_SCAN_RANGE")  Integer P_SCAN_RANGE);
}
