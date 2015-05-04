package com.eliminame.restController;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.eliminame.entity.Student;
import com.eliminame.service.StudentService;

@RestController(value="/studentController")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	

	@RequestMapping(value="/createStudent", method=RequestMethod.POST)
	public Student createStudent(@Valid @ModelAttribute("student") Student student, BindingResult result){
		if (result.hasErrors()) {
			return null;
		}
		return studentService.save(student);
	}
	
}
