execInterval(0, 9, 1000, 100);

function execInterval(initialValue, endValue, intervalTime, decIntervalTime) {
	var initVal = initialValue,
		endVal = endValue,
		intTime = intervalTime,
		decIntTime = decIntervalTime,
		id;

	// code to execute
	console.log('hello', initVal);

	// increase initial value by 1
	initVal += 1;

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
		id = setTimeout(function(){ execInterval(initVal, endVal, intTime, decIntTime) }, intTime);
	} else {
		clearTimeout(id);
	}
}