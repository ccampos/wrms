define(function() {

	/**
	* Draws a linear worm
	*
	* @method animLinWorm
	* @param {Object} context
	* @param {Number} initialValue
	* @param {Number} yCoord
	* @param {Number} endValue
	* @param {Number} intervalTime
	* @param {Number} decIntervalTime
	*/
	function animLinWorm(context, initialValue, yCoord, endValue, intervalTime, decIntervalTime) {
		var ctx = context,
			initVal = initialValue,
			endVal = endValue,
			y = yCoord,
			intTime = intervalTime,
			decIntTime = decIntervalTime,
			id;

		// increase initial value by 1
		initVal += 1;

		// code to execute
		console.log('executing animLinWorm');
		ctx.lineTo(initVal, y);
		// ctx.stroke();
		ctx.fill();

		// if decrement is less than zero, set decrement to zero
		if (decIntTime < 0) {
			decIntTime = 0;
		// if interval time is less than or equal to 'interval time plus decrement',
		// decrease interval time
		} else if (intTime <= intTime + decIntTime) {
			intTime -= decIntTime;
		}


		// if initial value is less than or equal to end value keep executing this function
		if (initVal <= endValue) {
			id = setTimeout(function(){ animLinWorm(ctx, initVal, y, endVal, intTime, decIntTime) }, intTime);
		} else {
			clearTimeout(id);
		};
	};

	return {
		animLinWorm: animLinWorm
	}
});