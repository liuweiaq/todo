"use strict";

define(['handlebars.runtime'],function(Handlebars){
    
	Handlebars = Handlebars.default;

	Handlebars.registerHelper('whether', function(condition,result1,result2) {

		if (condition) {
			return result1;
		}else{
			return result2;
		}
	});

	Handlebars.registerHelper('equal', function(condition1,condition2) {

		if (condition1===condition2) {
			return true;
		}else{
			return false;
		}
	});


  	return Handlebars;
});