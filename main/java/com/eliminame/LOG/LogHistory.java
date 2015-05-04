package com.eliminame.LOG;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="GZRAUDH")
public class LogHistory {
	
	@Column(name="GZRAUDH_USER_ID")
	 private String userId;
	 
	 @Column(name="GZRAUDH_SESSION_ID")
	 @Id
	 private String sessionId; 
	 
	 @Column(name="GZRAUDH_ACTIVITY_DATE")
	 private String activityDate;
	  
	 

	 public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public String getActivityDate() {
		return activityDate;
	}

	public void setActivityDate(String activityDate) {
		this.activityDate = activityDate;
	}

	
}
