package com.eliminame.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="SELECTEDCOLUMNS")
public class SelectedColumns {

	@Id
	@GeneratedValue
	private Integer id;
	
	@Column
	private String columnName;
}
