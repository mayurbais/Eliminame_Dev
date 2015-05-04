package com.eliminame.service;


import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliminame.LOV.RecordLOV;
import com.eliminame.entity.Gzrimrg;
import com.eliminame.entity.PidmDataCol;
import com.eliminame.repository.GzrimrgRepository;

@Service
public class GzrimrgService {

	@Autowired
	GzrimrgRepository gzrimrgRepository;
	
	@PersistenceContext
	EntityManager em;
	
	
	public List<Gzrimrg> getGzrimrgTables(){
		return gzrimrgRepository.findAll();
	}
	
	public List<RecordLOV> getRecordList(String pidm, String tableName){
		String sqlQuery = "SELECT TO_CHAR(ROWNUM), ROWIDTOCHAR(ROWID) FROM "+ tableName +" WHERE " + tableName+"_PIDM = "+ pidm;
		Query  q =em.createNativeQuery(sqlQuery);
		List<Object[]> records = q.getResultList();
		
		List<RecordLOV> result = new ArrayList<RecordLOV>();
		for(Object[] obj:records){
			RecordLOV o = new RecordLOV();
			o.setName((String) obj[0]);
			o.setValue((String) obj[1]);
			result.add(o);
		}
		return result;
	
	}
	
	public List<PidmDataCol> getColumnValuesForRec(String rowid, String tableName){
		String sqlQuery_data = "SELECT * FROM "+ tableName +" WHERE ROWID = '"+ rowid + "'";
		
		String sqlQuery_colname  = " select COLUMN_NAME, data_type"
				+ "	from ALL_TAB_COLS where table_name = " + "'" + tableName +"'";
		
		Query  q_colname = em.createNativeQuery(sqlQuery_colname);
		List<Object[]> col_records = q_colname.getResultList();
		
		Query  q_data = em.createNativeQuery(sqlQuery_data);
		List<Object[]> data_records = q_data.getResultList(); 
		
		List<PidmDataCol> pidmDataColList = new ArrayList<>();
		for(int i=0;i<col_records.size();i++){
			PidmDataCol pidmDataCol = new PidmDataCol();  
			pidmDataCol.setColname((col_records.get(i)[0].toString()));
			pidmDataCol.setDataType((col_records.get(i)[1].toString()));
			if(data_records.get(0)[i]==null){
				pidmDataCol.setColval("null");
			}else{
				pidmDataCol.setColval(data_records.get(0)[i].toString());
			}
			pidmDataColList.add(pidmDataCol);
		}
		
		return pidmDataColList;
	}

	public void saveRecordVal(String rowId, String tableName,List<PidmDataCol> list) {
		StringBuilder colNameString = new StringBuilder();
		StringBuilder colValString = new StringBuilder();
		for(PidmDataCol p : list ){
			colNameString.append(p.getColname());
			colNameString.append(",");
			
			if(p.getDataType().equals("DATE")){
				p.setColval("2014-11-13 15:45:45");
				colValString.append("to_date("); //"" + 29-Oct-09', 'DD-Mon-YY')
			}
			
			colValString.append("'");
			colValString.append(p.getColval());
			colValString.append("'");
			
			if(p.getDataType().equals("DATE")){
				colValString.append(",'yyyy-mm-dd hh24:mi:ss')"); 
			}
			
			colValString.append(",");
		}
		
		String colNameStringTrim = colNameString.substring(0, colNameString.length()-1);
		String colValStringTrim = colValString.substring(0, colValString.length()-1);
		
	
		
		String sqlQuery_data = "insert into " + tableName + "("+ colNameStringTrim + ") values (" + colValStringTrim + ")" ; 
		
		Query  q_colname = em.createNativeQuery(sqlQuery_data);
		q_colname.executeUpdate();
		
	}

	
}
