package com.eliminame.LOV;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="GTVCMSC")
public class MatchingSourceLOV implements ILov {

	@Column(name="GTVCMSC_DESC")
	private String name;
	
	@Column(name="GTVCMSC_CODE")
	@Id
	private String value;
	
	          
	
	@Override
	public String getName() {
		// TODO Auto-generated method stub
		return name;
	}

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return value;
	}

	@Override
	public void setName(String name) {
		// TODO Auto-generated method stub
		this.name = name;
	}

	@Override
	public void setValue(String value) {
		// TODO Auto-generated method stub
		this.value = value;
	}

}
