var os = require('os');

function getTime() {
	var time = os.uptime();
	var timeRounded = Math.round(time);
	var timeMin = Math.floor(timeRounded/60);

	return 'Uptime: ' + timeMin + ' min';
}

exports.getTime = getTime;