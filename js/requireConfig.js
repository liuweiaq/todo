"use strict";

require.config({
	"baseUrl": "../lib",
	paths:{
        "src":"../js"
	},
	shim:{
	    'backbone':{
	    	deps:['underscore'],
	    	exports:'Backbone'
	    }

	}
});