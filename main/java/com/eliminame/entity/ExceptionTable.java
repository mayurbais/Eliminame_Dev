package com.eliminame.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.eliminame.annotation.UniqueExceptionTable;
import com.eliminame.annotation.ValidExceptionTable;

@Entity
@Table(name="GZREXMT")
public class ExceptionTable {

	@Column(name="GZREXMT_TABLE_NAME")
	@UniqueExceptionTable(message = "Exception Table alreadly exists in Exception List")
	@ValidExceptionTable(message="No table with that name!")
	private String gzrexmtTableName; 
	
	@Id
	@GeneratedValue
	private Integer id;        
	
	
	public String getGzrexmtTableName() {
		return gzrexmtTableName;
	}
	public void setGzrexmtTableName(String gzrexmtTableName) {
		this.gzrexmtTableName = gzrexmtTableName;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
}
