"use strict";

define(['backbone','backbone.localStorage'], function(Backbone) {
	
	// Todo Model
	var Todo = Backbone.Model.extend({

		defaults: function() {
			return {
				title: "empty todo...",
				order: TodoList.nextOrder(),
				done: false
			};
		},

		toggle: function() {
			this.save({
				done: !this.get("done")
			});
		}

	});

	// Todo Collection
	var TodoList = Backbone.Collection.extend({

		model: Todo,

		localStorage: new Backbone.LocalStorage("todos-backbone"),

		done: function() {
			return this.where({
				done: true
			});
		},

		remaining: function() {
			return this.where({
				done: false
			});
		},

		comparator: 'order'

	}, {
		nextOrder: function() {
			if (!this.length) return 1;
			return this.last().get('order') + 1;
		}
	});

	return{
		TodoList:TodoList
	};
});