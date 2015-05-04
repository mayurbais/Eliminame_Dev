package com.eliminame.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;



@Entity
@Table(name = "app_student")
@PrimaryKeyJoinColumn(name="id")
public class Student extends User {

	private String classno;
	private String section;
	
	@OneToOne(cascade = CascadeType.ALL)
	@PrimaryKeyJoinColumn
	private Gaurdian gaurdian1;
	
	@OneToOne(cascade = CascadeType.ALL)
	@PrimaryKeyJoinColumn
	private Gaurdian gaurdian2;
	
	@OneToOne(mappedBy= "student",cascade = CascadeType.ALL)
	private Address address;
	

	
	public String getClassno() {
		return classno;
	}
	public void setClassno(String classno) {
		this.classno = classno;
	}
	public String getSection() {
		return section;
	}
	public void setSection(String section) {
		this.section = section;
	}
	public Gaurdian getGaurdian1() {
		return gaurdian1;
	}
	public void setGaurdian1(Gaurdian gaurdian1) {
		this.gaurdian1 = gaurdian1;
	}
	public Gaurdian getGaurdian2() {
		return gaurdian2;
	}
	public void setGuardian2(Gaurdian gaurdian2) {
		this.gaurdian2 = gaurdian2;
	}
	
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
}
