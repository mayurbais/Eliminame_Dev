package com.eliminame.entity;

import java.util.List;

public class PidmColDataDto {
	List<PidmDataCol> pidmDataCol1;
	List<PidmDataCol> pidmDataCol2;
	String tableName; 
	String recordId1; 
	String recordId2;
	
	public List<PidmDataCol> getPidmDataCol1() {
		return pidmDataCol1;
	}
	public void setPidmDataCol1(List<PidmDataCol> pidmDataCol1) {
		this.pidmDataCol1 = pidmDataCol1;
	}
	public List<PidmDataCol> getPidmDataCol2() {
		return pidmDataCol2;
	}
	public void setPidmDataCol2(List<PidmDataCol> pidmDataCol2) {
		this.pidmDataCol2 = pidmDataCol2;
	}
	public String getTableName() {
		return tableName;
	}
	public void setTableName(String tableName) {
		this.tableName = tableName;
	}
	public String getRecordId1() {
		return recordId1;
	}
	public void setRecordId1(String recordId1) {
		this.recordId1 = recordId1;
	}
	public String getRecordId2() {
		return recordId2;
	}
	public void setRecordId2(String recordId2) {
		this.recordId2 = recordId2;
	}

}
