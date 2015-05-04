package com.eliminame.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eliminame.entity.ExceptionTable;


public interface ExceptionTableRespository extends JpaRepository<ExceptionTable,Integer> {

	ExceptionTable findByGzrexmtTableName(String tableName);
}
