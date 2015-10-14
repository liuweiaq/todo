"use strict";

define(['json2', 'jquery','underscore', 'backbone','src/models/todoModel'], function(json2, $,_, Backbone,todoModel) {

	// Create a "Todos" variable
	var Todos = new todoModel.TodoList;

	// Todo Item View
	var TodoView = Backbone.View.extend({

		tagName: "li",

		template: _.template($('#item_template').html()),

		events: {
			"click .oso-todo-toggle": "toggleDone",
			"dblclick .oso-todo-view": "edit",
			"click .oso-todo-destroy": "clear",
			"keypress .oso-todo-edit": "updateOnEnter",
			"blur .oso-todo-edit": "close"
		},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.toggleClass('done', this.model.get('done'));
			this.input = this.$('.oso-todo-edit');
			return this;
		},

		toggleDone: function() {
			this.model.toggle();
		},

		edit: function() {
			this.$el.addClass("oso-todo-editing");
			this.input.focus();
		},

		close: function() {
			var value = this.input.val();
			if (!value) {
				this.clear();
			} else {
				this.model.save({
					title: value
				});
				this.$el.removeClass("oso-todo-editing");
			}
		},

		updateOnEnter: function(e) {
			if (e.keyCode == 13) this.close();
		},

		clear: function() {
			this.model.destroy();
		}
		
	});

	// The Application
	var AppView = Backbone.View.extend({

		el: $("#todoapp"),

		statsTemplate: _.template($('#stats_template').html()),

		events: {
			"keypress #new_todo": "createOnEnter",
			"click #clear_completed": "clearCompleted",
			"click #toggle_all": "toggleAllComplete"
		},

		initialize: function() {

			this.input = this.$("#new_todo");
			this.allCheckbox = this.$("#toggle_all")[0];

			this.listenTo(Todos, 'add', this.addOne);
			this.listenTo(Todos, 'reset', this.addAll);
			this.listenTo(Todos, 'all', this.render);

			this.footer = this.$('#todo_footer');
			this.main = $('#main');

			Todos.fetch();
		},

		render: function() {
			var done = Todos.done().length;
			var remaining = Todos.remaining().length;

			if (Todos.length) {
				this.main.show();
				this.footer.show();
				this.footer.html(this.statsTemplate({
					done: done,
					remaining: remaining
				}));
			} else {
				this.main.hide();
				this.footer.hide();
			}

			this.allCheckbox.checked = !remaining;
		},

		addOne: function(todo) {
			var view = new TodoView({
				model: todo
			});
			this.$("#todo_list").append(view.render().el);
		},

		addAll: function() {
			Todos.each(this.addOne, this);
		},

		newAttributes: function() {
			return {
				content: this.input.val(),
				order: TodoList.nextOrder(),
				done: false
			};
		},

		createOnEnter: function(e) {
			if (e.keyCode != 13) return;
			if (!this.input.val()) return;

			Todos.create({
				title: this.input.val()
			});
			this.input.val('');
		},

		clearCompleted: function() {
			_.invoke(Todos.done(), 'destroy');
			return false;
		},

		toggleAllComplete: function() {
			var done = this.allCheckbox.checked;
			Todos.each(function(todo) {
				todo.save({
					'done': done
				});
			});
		}

	});

	return {
		AppView: AppView
	};
});