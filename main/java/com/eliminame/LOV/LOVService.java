package com.eliminame.LOV;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LOVService {
	
	@Autowired
	MatchingSourceRepository matchingSourceRepository;
 
	public List<MatchingSourceLOV> getMathingSourceLOV(){
		return matchingSourceRepository.findAll();
		
	} 
}
