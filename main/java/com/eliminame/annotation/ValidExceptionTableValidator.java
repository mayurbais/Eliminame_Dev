package com.eliminame.annotation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.eliminame.service.ExceptionTableService;



public class ValidExceptionTableValidator implements ConstraintValidator<ValidExceptionTable, String> {
	
	@Autowired
	private ExceptionTableService exceptionTableService;

	@Override
	public void initialize(ValidExceptionTable constraintAnnotation) {
	}

	@Override
	public boolean isValid(String tableName, ConstraintValidatorContext context) {
		if(exceptionTableService == null) {
			return true;
		}
		return exceptionTableService.findTableInAllTable(tableName) != null;
	}

}
