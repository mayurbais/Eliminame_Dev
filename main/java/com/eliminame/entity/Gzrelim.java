package com.eliminame.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.ParameterMode;
import javax.persistence.StoredProcedureParameter;
import javax.persistence.Table;

@Entity
@Table(name="GZRELIM")
@NamedStoredProcedureQuery(name = "Gzrelim.P_SCAN_DUP_PIDM_WRAP", procedureName = "P_SCAN_DUP_PIDM_WRAP", parameters = {
		  @StoredProcedureParameter(mode = ParameterMode.IN, name = "P_MATCH_SOURCE", type = String.class),
		  @StoredProcedureParameter(mode = ParameterMode.IN, name = "P_SCAN_RANGE", type = Integer.class) })
public class Gzrelim {

	@Id
	private String gzrelim_id;
	
//	
	private String gzrelim_mark_dup;	
	private Integer gzrelim_match_group;	
	private Integer gzrelim_pidm;
	private String gzrelim_last_name;	
	private String gzrelim_entity_cde;	
	private String gzrelim_first_name;	
	private String gzrelim_mi;	
//		
	private String gzrelim_street_line1;
	private String gzrelim_street_line2;	
	private String gzrelim_street_line3;	
	private String gzrelim_street_line4;	
	private String gzrelim_city;
	private String gzrelim_stat_code;
	private String gzrelim_zip;
	private String gzrelim_natn_code;
	private String gzrelim_cnty_code;
	private String gzrelim_phone_area;
	private String gzrelim_phone_number;
	
	
	private String gzrelim_phone_ext;
	private String gzrelim_ssn;
	private Date gzrelim_birth_date;	
	private String gzrelim_sex;
	private String gzrelim_email_address;
	private String gzrelim_atyp_code; 
	private String gzrelim_tele_code;
	private String gzrelim_emal_code; 
	private String gzrelim_asrc_code; 
	private String gzrelim_ctry_code_phone;
	private String gzrelim_house_number;
	private String  gzrelim_surname_prefix;
	private String  gzrelim_delete_ind;
	private Integer gzrelim_accuracy;
	private String  gzrelim_birth_day;	
	private String  gzrelim_birth_month;
	private String  gzrelim_birth_year;
	
	public String getGzrelim_id() {
		return gzrelim_id;
	}
	public void setGzrelim_id(String gzrelim_id) {
		this.gzrelim_id = gzrelim_id;
	}
	public String getGzrelim_mark_dup() {
		return gzrelim_mark_dup;
	}
	public void setGzrelim_mark_dup(String gzrelim_mark_dup) {
		this.gzrelim_mark_dup = gzrelim_mark_dup;
	}
	public Integer getGzrelim_match_group() {
		return gzrelim_match_group;
	}
	public void setGzrelim_match_group(Integer gzrelim_match_group) {
		this.gzrelim_match_group = gzrelim_match_group;
	}
	public Integer getGzrelim_pidm() {
		return gzrelim_pidm;
	}
	public void setGzrelim_pidm(Integer gzrelim_pidm) {
		this.gzrelim_pidm = gzrelim_pidm;
	}
	public String getGzrelim_last_name() {
		return gzrelim_last_name;
	}
	public void setGzrelim_last_name(String gzrelim_last_name) {
		this.gzrelim_last_name = gzrelim_last_name;
	}
	public String getGzrelim_entity_cde() {
		return gzrelim_entity_cde;
	}
	public void setGzrelim_entity_cde(String gzrelim_entity_cde) {
		this.gzrelim_entity_cde = gzrelim_entity_cde;
	}
	public String getGzrelim_first_name() {
		return gzrelim_first_name;
	}
	public void setGzrelim_first_name(String gzrelim_first_name) {
		this.gzrelim_first_name = gzrelim_first_name;
	}
	public String getGzrelim_mi() {
		return gzrelim_mi;
	}
	public void setGzrelim_mi(String gzrelim_mi) {
		this.gzrelim_mi = gzrelim_mi;
	}
	public String getGzrelim_street_line1() {
		return gzrelim_street_line1;
	}
	public void setGzrelim_street_line1(String gzrelim_street_line1) {
		this.gzrelim_street_line1 = gzrelim_street_line1;
	}
	public String getGzrelim_street_line2() {
		return gzrelim_street_line2;
	}
	public void setGzrelim_street_line2(String gzrelim_street_line2) {
		this.gzrelim_street_line2 = gzrelim_street_line2;
	}
	public String getGzrelim_street_line3() {
		return gzrelim_street_line3;
	}
	public void setGzrelim_street_line3(String gzrelim_street_line3) {
		this.gzrelim_street_line3 = gzrelim_street_line3;
	}
	public String getGzrelim_street_line4() {
		return gzrelim_street_line4;
	}
	public void setGzrelim_street_line4(String gzrelim_street_line4) {
		this.gzrelim_street_line4 = gzrelim_street_line4;
	}
	public String getGzrelim_city() {
		return gzrelim_city;
	}
	public void setGzrelim_city(String gzrelim_city) {
		this.gzrelim_city = gzrelim_city;
	}
	public String getGzrelim_stat_code() {
		return gzrelim_stat_code;
	}
	public void setGzrelim_stat_code(String gzrelim_stat_code) {
		this.gzrelim_stat_code = gzrelim_stat_code;
	}
	public String getGzrelim_zip() {
		return gzrelim_zip;
	}
	public void setGzrelim_zip(String gzrelim_zip) {
		this.gzrelim_zip = gzrelim_zip;
	}
	public String getGzrelim_natn_code() {
		return gzrelim_natn_code;
	}
	public void setGzrelim_natn_code(String gzrelim_natn_code) {
		this.gzrelim_natn_code = gzrelim_natn_code;
	}
	public String getGzrelim_cnty_code() {
		return gzrelim_cnty_code;
	}
	public void setGzrelim_cnty_code(String gzrelim_cnty_code) {
		this.gzrelim_cnty_code = gzrelim_cnty_code;
	}
	public String getGzrelim_phone_area() {
		return gzrelim_phone_area;
	}
	public void setGzrelim_phone_area(String gzrelim_phone_area) {
		this.gzrelim_phone_area = gzrelim_phone_area;
	}
	public String getGzrelim_phone_number() {
		return gzrelim_phone_number;
	}
	public void setGzrelim_phone_number(String gzrelim_phone_number) {
		this.gzrelim_phone_number = gzrelim_phone_number;
	}
	public String getGzrelim_phone_ext() {
		return gzrelim_phone_ext;
	}
	public void setGzrelim_phone_ext(String gzrelim_phone_ext) {
		this.gzrelim_phone_ext = gzrelim_phone_ext;
	}
	public String getGzrelim_ssn() {
		return gzrelim_ssn;
	}
	public void setGzrelim_ssn(String gzrelim_ssn) {
		this.gzrelim_ssn = gzrelim_ssn;
	}
	public Date getGzrelim_birth_date() {
		return gzrelim_birth_date;
	}
	public void setGzrelim_birth_date(Date gzrelim_birth_date) {
		this.gzrelim_birth_date = gzrelim_birth_date;
	}
	public String getGzrelim_sex() {
		return gzrelim_sex;
	}
	public void setGzrelim_sex(String gzrelim_sex) {
		this.gzrelim_sex = gzrelim_sex;
	}
	public String getGzrelim_email_address() {
		return gzrelim_email_address;
	}
	public void setGzrelim_email_address(String gzrelim_email_address) {
		this.gzrelim_email_address = gzrelim_email_address;
	}
	public String getGzrelim_atyp_code() {
		return gzrelim_atyp_code;
	}
	public void setGzrelim_atyp_code(String gzrelim_atyp_code) {
		this.gzrelim_atyp_code = gzrelim_atyp_code;
	}
	public String getGzrelim_tele_code() {
		return gzrelim_tele_code;
	}
	public void setGzrelim_tele_code(String gzrelim_tele_code) {
		this.gzrelim_tele_code = gzrelim_tele_code;
	}
	public String getGzrelim_emal_code() {
		return gzrelim_emal_code;
	}
	public void setGzrelim_emal_code(String gzrelim_emal_code) {
		this.gzrelim_emal_code = gzrelim_emal_code;
	}
	public String getGzrelim_asrc_code() {
		return gzrelim_asrc_code;
	}
	public void setGzrelim_asrc_code(String gzrelim_asrc_code) {
		this.gzrelim_asrc_code = gzrelim_asrc_code;
	}
	public String getGzrelim_ctry_code_phone() {
		return gzrelim_ctry_code_phone;
	}
	public void setGzrelim_ctry_code_phone(String gzrelim_ctry_code_phone) {
		this.gzrelim_ctry_code_phone = gzrelim_ctry_code_phone;
	}
	public String getGzrelim_house_number() {
		return gzrelim_house_number;
	}
	public void setGzrelim_house_number(String gzrelim_house_number) {
		this.gzrelim_house_number = gzrelim_house_number;
	}
	public String getGzrelim_surname_prefix() {
		return gzrelim_surname_prefix;
	}
	public void setGzrelim_surname_prefix(String gzrelim_surname_prefix) {
		this.gzrelim_surname_prefix = gzrelim_surname_prefix;
	}
	public String getGzrelim_delete_ind() {
		return gzrelim_delete_ind;
	}
	public void setGzrelim_delete_ind(String gzrelim_delete_ind) {
		this.gzrelim_delete_ind = gzrelim_delete_ind;
	}
	public Integer getGzrelim_accuracy() {
		return gzrelim_accuracy;
	}
	public void setGzrelim_accuracy(Integer gzrelim_accuracy) {
		this.gzrelim_accuracy = gzrelim_accuracy;
	}
	public String getGzrelim_birth_day() {
		return gzrelim_birth_day;
	}
	public void setGzrelim_birth_day(String gzrelim_birth_day) {
		this.gzrelim_birth_day = gzrelim_birth_day;
	}
	public String getGzrelim_birth_month() {
		return gzrelim_birth_month;
	}
	public void setGzrelim_birth_month(String gzrelim_birth_month) {
		this.gzrelim_birth_month = gzrelim_birth_month;
	}
	public String getGzrelim_birth_year() {
		return gzrelim_birth_year;
	}
	public void setGzrelim_birth_year(String gzrelim_birth_year) {
		this.gzrelim_birth_year = gzrelim_birth_year;
	}
	}
