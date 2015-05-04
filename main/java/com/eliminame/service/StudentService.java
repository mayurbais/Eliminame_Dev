package com.eliminame.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliminame.entity.Student;
import com.eliminame.entity.User;
import com.eliminame.repository.StudentRepository;
import com.eliminame.repository.UserRepository;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	
	@Autowired
	private UserRepository userRepository;
	
	public Student save(Student student) {
		userRepository.save((User)student);
		return studentRepository.save(student);
	}
}
