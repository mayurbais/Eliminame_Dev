package com.eliminame.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedStoredProcedureQueries;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.ParameterMode;
import javax.persistence.StoredProcedureParameter;

@Entity
@NamedStoredProcedureQueries(
@NamedStoredProcedureQuery(
	    name = "P_SCAN_DUP_PIDM_WRAP",
	    procedureName = "P_SCAN_DUP_PIDM_WRAP",
	    parameters = {
	        @StoredProcedureParameter(mode=ParameterMode.IN, name="P_MATCH_SOURCE", type=String.class),
	        @StoredProcedureParameter(mode=ParameterMode.IN, name="P_SCAN_RANGE", type=String.class)

	    }
	    
	))
	
public class ScanObject {

	@Id
	@GeneratedValue
	private int id;
}
