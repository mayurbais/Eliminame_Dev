package com.eliminame.config;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebConfiguration extends WebMvcConfigurerAdapter  {
// 	@Override
//    public void addViewControllers(ViewControllerRegistry registry) {
//        registry.addViewController("/login").setViewName("login");
//        registry.addViewController("/index").setViewName("index");
//        registry.addViewController("/home").setViewName("home");
//        
//    }
	
	 public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
	        converters.add(getJacksonMessageConverter());
	        extendMessageConverters(converters);
	  }
	 
	 @Bean
	public  MappingJackson2HttpMessageConverter getJacksonMessageConverter(){
			MappingJackson2HttpMessageConverter mappingJacksonHttpMessageConverter = new MappingJackson2HttpMessageConverter();
			return mappingJacksonHttpMessageConverter;
	}
}