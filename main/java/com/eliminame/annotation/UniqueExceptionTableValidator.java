package com.eliminame.annotation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.eliminame.repository.ExceptionTableRespository;

public class UniqueExceptionTableValidator implements ConstraintValidator<UniqueExceptionTable, String> {
	
	@Autowired
	private ExceptionTableRespository exceptionTableRespository;

	@Override
	public void initialize(UniqueExceptionTable constraintAnnotation) {
	}

	@Override
	public boolean isValid(String tableName, ConstraintValidatorContext context) {
		if(exceptionTableRespository == null) {
			return true;
		}
		return exceptionTableRespository.findByGzrexmtTableName(tableName) == null;
	}

}
