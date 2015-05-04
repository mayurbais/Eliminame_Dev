package com.eliminame.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliminame.entity.SelectedColumns;
import com.eliminame.repository.SelectedColumnsRepository;

@Service
public class SelectedColumnService {

	@Autowired
	SelectedColumnsRepository selectedColumnsRepository;
	
	public List<SelectedColumns> getSelectedColumns(){
		return selectedColumnsRepository.findAll();
	}
}
