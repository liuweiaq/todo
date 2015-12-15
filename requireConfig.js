"use strict";

require.config({
	"baseUrl": "..",  //将requirejs基目录设置为相对于main.js上一层.
	paths:{
        "src":"js",
        "underscore":"bower/underscore/underscore",
        "backbone":"bower/backbone/backbone",
        "backbone.localStorage":"bower/backbone.localStorage/backbone.localStorage",
        "handlebars.runtime":"bower/handlebars/handlebars.runtime",
        "jquery":"bower/jquery/dist/jquery",
        "json2":"bower/json2/json2"
	},
	shim:{
	    'backbone':{
	    	deps:['underscore']
	    }

	}
});