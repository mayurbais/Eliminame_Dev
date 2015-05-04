package com.eliminame.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliminame.entity.ExceptionTable;
import com.eliminame.repository.ExceptionTableRespository;

@Service
public class ExceptionTableService {

	@Autowired
	ExceptionTableRespository exceptionTableRespository; 
	
	@PersistenceContext
	EntityManager em;
	
	public List<ExceptionTable> getExceptionTablelist(){
		return exceptionTableRespository.findAll();
	}

	public List<String> getAllTablelist(String srchString) {
		
	Query q  = em.createNativeQuery("select table_name from all_tables where TABLE_NAME like '" + '%'+srchString+'%'+"' and table_name NOT IN (select GZREXMT_TABLE_NAME from GZREXMT)");
		List<String> list = q.getResultList();
		return list;

		
	}

	public void addToExceptionList(String tableName) {
		// TODO Auto-generated method stub
		ExceptionTable t = new ExceptionTable();
		t.setGzrexmtTableName(tableName); 
		exceptionTableRespository.save(t);
	}

	public Object findTableInAllTable(String tableName) {
		Query q  = em.createNativeQuery("select table_name from all_tables where TABLE_NAME =" + tableName);
		return q.getFirstResult();
		
	}
}
