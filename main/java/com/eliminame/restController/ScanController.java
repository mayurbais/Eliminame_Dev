package com.eliminame.restController;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.ParameterMode;
import javax.persistence.StoredProcedureQuery;
import javax.transaction.Transactional;
import javax.validation.constraints.NotNull;

import org.neo4j.cypher.internal.compiler.v2_1.planner.logical.findShortestPaths;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eliminame.LOG.LogService;
import com.eliminame.LOV.MatchingSourceLOV;
import com.eliminame.LOV.MatchingSourceRepository;
import com.eliminame.entity.Gzrelim;
import com.eliminame.entity.ModuleObj;
import com.eliminame.repository.GzrelimRepository;
import com.eliminame.repository.RelimRepository;
import com.eliminame.service.RelimService;


@RestController("/scanController")
public class ScanController {
	
	@Autowired
	LogService logService;
	
	@Autowired
	GzrelimRepository gzrelimRepository;
	
	@Autowired
	RelimRepository relimRepository;

	
	@Autowired
	RelimService relimService;

	@Autowired
	MatchingSourceRepository matchingSourceRepository; 
	
	
	
	@RequestMapping("/scanRecords")
	public void scanRecords(@NotNull String matchingSrc, @NotNull String range){
		logService.logActivity("SCAN",null,"Scan Process Started - Matching Source:"+matchingSrc+" and Scan Range:"+range);
		gzrelimRepository.pScanDupPidmWrap(matchingSrc, Integer.valueOf(range));;
		
		logService.logActivity("SCAN",null,"Scan Process Ended.");
		
	}
	
	@RequestMapping("/getDuplicateRecords")
	public List<Gzrelim> duplicateRecords(){
		List<Gzrelim> lp = relimRepository.findAll();
		return lp;
	}
	
	@RequestMapping("/deactivateRec")
	@Transactional
	public void deactivateRec(@NotNull String pidm){
		logService.logActivity("DEACTIVATE",null,"Deactivate Process Started for pidm " + pidm);
		relimService.deactivateRec(pidm);
		logService.logActivity("DEACTIVATE",null,"Deactivate Process Ended for pidm " + pidm);
	}
	
	@RequestMapping("/deleteRec")
	public void deleteRec(@NotNull String pidm,@NotNull String matchingGroup){
		logService.logActivity("DELETE",null,"Delete Process Started for pidm " + pidm);
		relimService.deleteRec();
		logService.logActivity("DELETE",null,"Delete Process Ended for pidm " + pidm);
	}
	
	
	@RequestMapping("/getActivatedModule")
	public ModuleObj getActivatedModule(@NotNull String pidm){
		return  relimService.getActivatedModule(pidm);
	}
}
