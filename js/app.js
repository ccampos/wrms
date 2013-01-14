define([
	'jquery'
], function($) {
	var initialize = function() {
		var canvas = $('canvas#wrms')[0];

		if (canvas.getContext) {
			// set context
			var ctx = canvas.getContext('2d');

			// drawing code here

			// set context background color
			$('canvas#wrms').css('background-color', '#ccc');

			// create red square
			ctx.fillStyle = 'rgb(200, 0, 0)';
			ctx.fillRect(120, 40, 70, 70);

			// create blue square with opacity
			ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
			ctx.fillRect(160, 80, 70, 70);

			// remove chunk of blue square
			ctx.clearRect(190, 110, 80, 80);

			// create new rectangle stroke only
			ctx.strokeRect(200, 120, 50, 50);

			// triangle skewed
			ctx.beginPath();
			ctx.moveTo(75, 54);
			ctx.lineTo(80, 35);
			ctx.lineTo(90, 60);
			ctx.closePath();
			ctx.stroke();

			// joined polygon
			ctx.fillStyle = 'rgba(0, 200, 0, 0.5)';
			ctx.beginPath();
			ctx.moveTo(75, 54);
			ctx.lineTo(60, 100);
			ctx.lineTo(35, 100);
			ctx.lineTo(20, 54);
			ctx.closePath();
			ctx.fill();

			// create arc
			ctx.moveTo(320, 74);
			ctx.arc(320, 74, 50, toRadians(0), toRadians(-270), true);
			ctx.stroke();


		} else {
			// canvas-unsupported code here
			$('canvas#wrms').html('canvas-unsupported');
		};

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
		}
	};

	return {
		initialize: initialize
	}
});