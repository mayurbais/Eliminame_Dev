package com.eliminame.LOG;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="GZRAUDT")
public class LogObject {

	@Column
	@Id
	@GeneratedValue
	private Integer id;
	
	@Column(name="GZRAUDT_SESSION_ID")
	private String sessionId;
	@Column(name="GZRAUDT_ACTION")
	private String action;
	@Column(name="GZRAUDT_PIDM")
	private String pidm;
	@Column(name="GZRAUDT_DETAILS")
	private String details;
	
	
	public String getSessionId() {
		return sessionId;
	}
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	public String getPidm() {
		return pidm;
	}
	public void setPidm(String pidm) {
		this.pidm = pidm;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	
		 
}
