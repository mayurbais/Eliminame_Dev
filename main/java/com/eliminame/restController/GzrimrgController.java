package com.eliminame.restController;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.eliminame.LOG.LogService;
import com.eliminame.LOV.RecordLOV;
import com.eliminame.entity.Gzrimrg;
import com.eliminame.entity.PidmColDataDto;
import com.eliminame.entity.PidmDataCol;
import com.eliminame.service.GzrimrgService;

@RestController(value ="/gzrimrgController")
public class GzrimrgController {

	@Autowired
	GzrimrgService gzrimrgService; 
	
	@Autowired
	LogService logService;
	
	@RequestMapping(value="/getGzrimrgTables")
	public List<Gzrimrg> getGzrimrgTables(){
		return gzrimrgService.getGzrimrgTables();
	}
	
	@RequestMapping(value="/getRecordList")
	public List<RecordLOV> getRecordList(String pidm, String tableName){
		return gzrimrgService.getRecordList(pidm, tableName);
	}
	
	@RequestMapping(value="/getColumnValuesForRec")
	public List<PidmDataCol> getColumnValuesForRec(String rowid, String tableName){
		List<PidmDataCol> listofdata = gzrimrgService.getColumnValuesForRec(rowid, tableName);
		return listofdata;
	}
	
	@RequestMapping(value="/mergeRecords",  method=RequestMethod.POST) 
	@Transactional 
	public void  mergeRecord( @ModelAttribute("pidmColDataDto") PidmColDataDto pidmColDataDto){
		logService.logActivity("MERGE",null,"MERGE Process Started for row id   " + pidmColDataDto.getRecordId1() + "and row id " + pidmColDataDto.getRecordId2() + "for table " + pidmColDataDto.getTableName() );
		
		gzrimrgService.saveRecordVal(pidmColDataDto.getRecordId1(), pidmColDataDto.getTableName(), pidmColDataDto.getPidmDataCol1()); 
		gzrimrgService.saveRecordVal(pidmColDataDto.getRecordId2(), pidmColDataDto.getTableName(), pidmColDataDto.getPidmDataCol2());
	
		logService.logActivity("MERGE",null,"MERGE Process Ended for row id   " + pidmColDataDto.getRecordId1() + "and row id " + pidmColDataDto.getRecordId2() + "for table " + pidmColDataDto.getTableName() );
	}
}
