package com.eliminame.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eliminame.entity.ExceptionTable;
import com.eliminame.service.ExceptionTableService;

@RestController("/exceptionTableController")
public class ExceptionTableController {

	@Autowired
	ExceptionTableService exceptionTableService;
	
	@RequestMapping("/getExceptionTablelist")
	public List<ExceptionTable> getExceptionTablelist(){
		return exceptionTableService.getExceptionTablelist();
	}
	
	


	@RequestMapping("/getAllTablelist")
	public List<String> getAllTablelist(String srchString){
		return exceptionTableService.getAllTablelist(srchString);
	}
	
	@RequestMapping("/addToExceptionList")
	public void addToExceptionList(String tableName){
		exceptionTableService.addToExceptionList(tableName);
	}
	
	
}
