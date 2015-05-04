package com.eliminame.LOG;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Service
public class LogService {

	@Autowired
	private LogRepository logRepository;
	
    @Autowired
    private LogHistoryRepository logHistoryRepository; 
	
	public void logActivity(String action, String pidm, String details ){
		
		ServletRequestAttributes attr = (ServletRequestAttributes)RequestContextHolder.currentRequestAttributes();
		HttpSession session= attr.getRequest().getSession(false);
		
		LogObject logObj = new LogObject();
		logObj.setAction(action);
		logObj.setPidm(pidm);
		logObj.setDetails(details);
		logObj.setSessionId(session.getId());
		
		
		logRepository.save(logObj);
	}
	
	public void creteSession(){
		
        ServletRequestAttributes attr = (ServletRequestAttributes)RequestContextHolder.currentRequestAttributes();
		//String userName = attr.getRequest().getUserPrincipal().getName();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String currentPrincipalName = authentication.getName();
        String sessionId = attr.getRequest().getSession().getId();
        
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-YY");
        Calendar cal = Calendar.getInstance();
        String result =  formatter.format(cal.getTime());
   
        formatter.format(cal.getTime());
        LogHistory logH = new LogHistory();
        logH.setUserId(currentPrincipalName);
        logH.setSessionId(sessionId);
        logH.setActivityDate(result);
		logHistoryRepository.save(logH);
	}
}
