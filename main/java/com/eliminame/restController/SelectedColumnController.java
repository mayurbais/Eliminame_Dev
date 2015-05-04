package com.eliminame.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eliminame.entity.SelectedColumns;
import com.eliminame.service.SelectedColumnService;

@RestController("/selectedColumns")
public class SelectedColumnController {

	@Autowired
	SelectedColumnService selectedColumnService;
	
	@RequestMapping("/selectedColumns")
	public List<SelectedColumns> getSelectedColumns(){
		return selectedColumnService.getSelectedColumns();
	}
}
