package com.eliminame.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;


@Entity
@Table(name = "app_address")
public class Address {

	private Integer id;
	private String streetName1;
	private String apptNo;
	private String streetName2;
	private String city;
	private String state;
	private String country;
	private Integer zipCode; 
	
	@GenericGenerator(name = "generator", strategy = "foreign", parameters = @Parameter(name = "property", value = "student"))
	@GeneratedValue(generator = "generator")
	@Column(name = "student_id", unique = true, nullable = false)
	@Id
	private Integer studentId;
	

	@OneToOne
	@PrimaryKeyJoinColumn
	private Student student;
	
	
	
	public Integer getStudentId() {
		return this.studentId;
	}
	
	public void setStudentId(Integer StudentId) {
		this.studentId= StudentId;
	}
	

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	
	public String getStreetName1() {
		return streetName1;
	}
	public void setStreetName1(String streetName1) {
		this.streetName1 = streetName1;
	}
	public String getApptNo() {
		return apptNo;
	}
	public void setApptNo(String apptNo) {
		apptNo = apptNo;
	}
	public String getStreetName2() {
		return streetName2;
	}
	public void setStreetName2(String streetName2) {
		this.streetName2 = streetName2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public Integer getZipCode() {
		return zipCode;
	}
	public void setZipCode(Integer zipCode) {
		this.zipCode = zipCode;
	}
	
}
