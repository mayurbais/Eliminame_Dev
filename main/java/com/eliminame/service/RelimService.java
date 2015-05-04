package com.eliminame.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.eliminame.entity.Gzrelim;
import com.eliminame.entity.ModuleObj;
import com.eliminame.repository.RelimRepository;

@Service
public class RelimService {

	@Autowired
	RelimRepository relimRepository; 
	protected static final int NUMBER_OF_PERSONS_PER_PAGE = 5;
	
	@PersistenceContext
	EntityManager em;
	
	public List<Gzrelim> getAllRelim(int pageIndex){
		PageRequest pageSpecification =  new PageRequest(0, NUMBER_OF_PERSONS_PER_PAGE);
		
		return relimRepository.findAll();
		
	}

	public void deactivateRec(String P_PIDM) {
		String sqlQuery = "UPDATE SPRIDEN "
				+ "	  SET SPRIDEN_CHANGE_IND = 'E'"
				+ "	   WHERE SPRIDEN_PIDM = " + P_PIDM 
				+ "AND SPRIDEN_CHANGE_IND IS NULL";
		
		Query  q =em.createNativeQuery(sqlQuery);
		q.executeUpdate();
	}

	public void  deleteRec() {
	}

	
	private Boolean isPidmInTable(String tableName, String colName, String pidm){
		String sqlQuery = "SELECT max('Y') as yesno FROM " + tableName + " where " + colName + " = " +pidm;
		Query  q =em.createNativeQuery(sqlQuery);
		Object obj =   q.getSingleResult();
		
		if(obj == null){
			
			return false;
		}else {
			return true;
		}

	}
	
	public ModuleObj getActivatedModule(String pidm) {
		String sqlQuery = "select gubinst_alumni_installed,"
				+ "		gubinst_finance_installed,"
				+ "		gubinst_humanre_installed,"
				+ "		gubinst_student_installed,"
				+ "     gubinst_bilcsh_installed,"
				+ "     gubinst_finaid_installed from gubinst";
				
		
		Query  q =em.createNativeQuery(sqlQuery);
		Object[] obj =  (Object[]) q.getSingleResult();
		ModuleObj moduleObj = new ModuleObj();
		if(obj[0].equals("Y") == true){
			moduleObj.setAluConst(isPidmInTable("APBCONS", "APBCONS_PIDM",pidm ));
			moduleObj.setAluOrgn(isPidmInTable("AOBORGN", "AOBORGN_PIDM",pidm ));
		}
		
		if(obj[1].equals("Y") == true){
			moduleObj.setFinAgency(isPidmInTable("FTVAGCY", "FTVAGCY_AGCY_CODE_PIDM",pidm ));
			moduleObj.setFinBank(isPidmInTable("GXVBANK", "GXVBANK_BANK_CODE_PIDM",pidm ));
			moduleObj.setFinCust(isPidmInTable("FTVCUST", "FTVCUST_PIDM",pidm ));
			moduleObj.setFinEmpl(isPidmInTable("FCBEMPL", "FCBEMPL_PIDM",pidm ));
			moduleObj.setFinMagr(isPidmInTable("FTVFMGR", "FTVFMGR_FMGR_CODE_PIDM",pidm ));
			moduleObj.setFinVend(isPidmInTable("FTVVEND", "FTVVEND_PIDM",pidm ));
		}
		if(obj[2].equals("Y") == true){
			moduleObj.setHrAppl(isPidmInTable("PABAPPL", "PABAPPL_PIDM",pidm ));
			moduleObj.setHrEmpl(isPidmInTable("PEBEMPL", "PEBEMPL_PIDM",pidm ));
			moduleObj.setHrCobra(isPidmInTable("PCBPERS", "PCBPERS_PIDM",pidm ));
			moduleObj.setHrBene(isPidmInTable("PDRBENE", "PDRBENE_BENE_PIDM",pidm ));
		}
		if(obj[3].equals("Y") == true){
			moduleObj.setStdGenr(isPidmInTable("SGBSTDN", "SGBSTDN_PIDM",pidm ));
			moduleObj.setStdRecr(isPidmInTable("SRBRECR", "SRBRECR_PIDM",pidm ));
			moduleObj.setStdAdm(isPidmInTable("SARADAP", "SARADAP_PIDM",pidm ));
			moduleObj.setStdRegr(isPidmInTable("SFBETRM", "SFBETRM_PIDM",pidm ));
			moduleObj.setStdHous(isPidmInTable("SLBRMAP", "SLBRMAP_PIDM",pidm ));
			moduleObj.setStdFacu(isPidmInTable("SIBINST", "SIBINST_PIDM",pidm ));
			moduleObj.setStdTran(isPidmInTable("SHRTRAM", "SHRTRAM_PIDM",pidm ));
		}
		if(obj[4].equals("Y") == true){
			moduleObj.setAr(isPidmInTable("TBRACCD", "TBRACCD_PIDM",pidm )); // F_IsPidmInTable('TBRACCD','TBRACCD_PIDM', P_PIDM);
			if(moduleObj.getAr().equals("N")){
				moduleObj.setAr(isPidmInTable("TBRDEPO", "TBRDEPO_PIDM",pidm )); // F_IsPidmInTable('TBRDEPO','TBRDEPO_PIDM', P_PIDM);
			}
			if(moduleObj.getAr().equals("N")){
				moduleObj.setAr(isPidmInTable("TBRMEMO", "TBRMEMO_PIDM",pidm ));//F_IsPidmInTable('TBRMEMO','TBRMEMO_PIDM', P_PIDM);
			}
			if(moduleObj.getAr().equals("N")){
				moduleObj.setAr(isPidmInTable("TBBCPRF", "TBBCPRF_PIDM",pidm ));//F_IsPidmInTable('TBBCPRF','TBBCPRF_PIDM', P_PIDM);
			}
			
		}
		if(obj[5].equals("Y") == true){
			moduleObj.setFinAidAppl(isPidmInTable("RORSTAT", "RORSTAT_PIDM",pidm )); //:SYST.FIN_AID_APPL := F_IsPidmInTable('RORSTAT','RORSTAT_PIDM', P_PIDM);
		}
	
		return moduleObj;

	}
	
}
