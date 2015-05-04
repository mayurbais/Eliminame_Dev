package com.eliminame.restController;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.eliminame.entity.User;
import com.eliminame.service.UserService;

@RestController(value="/registration")
public class RegistrationController {
	
	@Autowired
	private UserService userService;
	

	@RequestMapping(value="/register", method=RequestMethod.POST)
	public User registerUser(@Valid @ModelAttribute("user") User user, BindingResult result){
		if (result.hasErrors()) {
			return null;
		}
		return userService.save(user);
	}
}
