require(['requireConfig'], function() {
	require(['src/views/todoView'], function(todoView) {
		
		// Finally, we kick things off by creating the **App**.
		var App = new todoView.AppView;
	});
});