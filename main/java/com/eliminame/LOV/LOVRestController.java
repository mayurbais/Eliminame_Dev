package com.eliminame.LOV;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController(value="/lov")
public class LOVRestController {

	@Autowired
	LOVService lovService;
	
	@RequestMapping("/matchingSourceLov")
	public List<MatchingSourceLOV> getMatchingSourceLov(){
		
		return lovService.getMathingSourceLOV();
		
	}
}
