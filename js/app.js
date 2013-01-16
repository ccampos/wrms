define([
	'jquery',
	'util/timed'
], function($, timed) {
	var initialize = function() {
		var canvasPractice = $('canvas#practice')[0];

		if (canvasPractice.getContext) {
			// set context
			var ctxP = canvasPractice.getContext('2d');

			// drawing code here

			// set context background color
			$('canvas#practice').css('background-color', '#ccc');

			// create red square
			ctxP.fillStyle = 'rgb(200, 0, 0)';
			ctxP.fillRect(120, 40, 70, 70);

			// create blue square with opacity
			ctxP.fillStyle = 'rgba(0, 0, 200, 0.5)';
			ctxP.fillRect(160, 80, 70, 70);

			// remove chunk of blue square
			ctxP.clearRect(190, 110, 80, 80);

			// create new rectangle stroke only
			ctxP.strokeRect(200, 120, 50, 50);

			// triangle skewed
			ctxP.beginPath();
			ctxP.moveTo(75, 54);
			ctxP.lineTo(80, 35);
			ctxP.lineTo(90, 60);
			ctxP.closePath();
			ctxP.stroke();

			// joined polygon
			ctxP.fillStyle = 'rgba(0, 200, 0, 0.5)';
			ctxP.beginPath();
			ctxP.moveTo(75, 54);
			ctxP.lineTo(60, 100);
			ctxP.lineTo(35, 100);
			ctxP.lineTo(20, 54);
			ctxP.closePath();
			ctxP.fill();

			// create arc
			ctxP.moveTo(320, 74);
			ctxP.arc(320, 74, 50, toRadians(0), toRadians(-270), true);
			ctxP.stroke();
		} else {
			// canvas-unsupported code here
			$('canvas#practice').html('canvas-unsupported');
		};

		// Canvas wrms
		var canvasWrms = $('canvas#wrms')[0];

		if (canvasWrms.getContext) {
			// set context
			var ctx = canvasWrms.getContext('2d');

			// drawing code here

			// set context background color
			$('canvas#wrms').css('background-color', '#ccc');

			// timed js
			ctx.fillStyle = 'rgba(0, 130, 190, 0.9)';
			ctx.moveTo(20, 100);
			timed.animLinWorm(ctx, 20, 100, 350, 90, 2);

			ctx.moveTo(50, 150);
			timed.animLinWorm(ctx, 50, 150, 180, 87, 1);
		} else {
			// canvas-unsupported code here
			$('canvas#wrms').html('canvas-unsupported');		
		}

		/**
		* Returns radians
		*
		* @method toRadians
		* @return {Number} radians
		*/
		function toRadians(degrees) {
			var deg = degrees,
				radians;

			radians = (Math.PI / 180) * degrees;

			return radians;
		};
	};

	return {
		initialize: initialize
	}
});