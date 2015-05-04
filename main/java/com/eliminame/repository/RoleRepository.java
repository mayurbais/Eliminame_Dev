package com.eliminame.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eliminame.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Integer>{

	Role findByName(String name);

}
