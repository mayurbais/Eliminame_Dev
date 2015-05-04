package com.eliminame.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eliminame.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer>{

	Student findByName(String name);


}
