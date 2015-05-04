package com.eliminame.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="GZRIMRG")
public class Gzrimrg {
	@Id
	@Column(name="GZRIMRG_TABLE_NAME")
	private String  gzrimrgTableName;

	public String getGzrimrg_table_name() {
		return gzrimrgTableName;
	}

	public void setGzrimrg_table_name(String gzrimrgTableName) {
		this.gzrimrgTableName = gzrimrgTableName;
	}
	
}
