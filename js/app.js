define([
	'jquery'
], function($) {
	var initialize = function() {
		$('canvas#wrms').css('background-color', '#333');
	}

	return {
		initialize: initialize
	}
});