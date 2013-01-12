// Configure shortcut alias
require.config({
	paths: {
		jquery: 'libs/jquery/jquery'
	}
});

require([
	'app'
], function(App) {
	App.initialize();
});