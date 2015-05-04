package com.eliminame.entity;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;


@Entity
@Table(name = "app_gaurdian")
@PrimaryKeyJoinColumn(name="id")
public class Gaurdian extends User{
	

private Integer primaryPhoneNumber;

private Integer secondaryPhoneNumber;

@OneToOne(mappedBy="gaurdian1") 
private Student student;

public Integer getPrimaryPhoneNumber() {
	return primaryPhoneNumber;
}
public void setPrimaryPhoneNumber(Integer primaryPhoneNumber) {
	this.primaryPhoneNumber = primaryPhoneNumber;
}
public Number getSecondaryPhonNumber() {
	return secondaryPhoneNumber;
}
public void setSecondaryPhoneNumber(Integer secondaryPhoneNumber) {
	this.secondaryPhoneNumber = secondaryPhoneNumber;
}

public Student getStudent() {
	return student;
}
public void setPrimaryPhoneNumber(Student student) {
	this.student = student;
}

}
