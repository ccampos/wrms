// Configure shortcut alias
require.config({
	paths: {
		jquery: 'libs/jquery/jquery'
	},
	urlArgs: "bust=" + (new Date()).getTime()
});

require([
	'app'
], function(App) {
	App.initialize();
});