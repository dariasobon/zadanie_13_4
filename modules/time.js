function getTime(secs) {
	var h = Math.floor(secs / 3600);
    var m = Math.floor(secs % 3600 / 60);
    var s = Math.floor(secs % 3600 % 60);
    return 'Uptime: ' +h +' h ' + m + ' min ' + s + ' sec';
}

exports.getTime = getTime;