package com.eliminame.entity;

import java.io.Serializable;

import javax.persistence.Entity;

public class PidmDataCol implements Serializable {
	public PidmDataCol (){
		
	}
	private String colname;
	
	
	private String colval;
	
	private String dataType;

	public String getColname() {
		return colname;
	}

	public void setColname(String colname) {
		this.colname = colname;
	}

	public String getColval() {
		return colval;
	}

	public void setColval(String colval) {
		this.colval = colval;
	}

	public void setDataType(String datatype) {
		this.dataType = datatype;
		
	}
	
	public String getDataType() {
		return this.dataType;
		
	}
}
