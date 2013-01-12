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
			ctx.fillRect(130, 50, 70, 70);

			ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
			ctx.fillRect(170, 90, 70, 70);

			ctx.clearRect(200, 120, 80, 80);

		} else {
			// canvas-unsupported code here
			$('canvas#wrms').html('canvas-unsupported');
		};
	};

	return {
		initialize: initialize
	}
});