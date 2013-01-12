define([
	'jquery'
], function($) {
	var initialize = function() {
		var canvas = $('canvas#wrms')[0];

		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');
			// drawing code here
			$('canvas#wrms').css('background-color', '#ccc');
			ctx.fillStyle = 'rgb(200, 0, 0)';
			ctx.fillRect(10, 10, 55, 50);

			ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
			ctx.fillRect(30, 30, 55, 50);

		} else {
			// canvas-unsupported code here
			$('canvas#wrms').html('canvas-unsupported');
		};
	};

	return {
		initialize: initialize
	}
});