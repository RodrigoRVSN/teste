document.getElementById('end').style.display = "none";
var dateFinal = new Date('Jan 4, 2021 00:00:00').getTime();
function timer() {
    var now = new Date().getTime();
    gap = dateFinal - now;
    var ss = 1000;
    var mm = ss * 60;
    var hh = mm * 60;
    var dd = hh * 24;

    var d = Math.floor(gap / (dd));
    var h = Math.floor((gap % (dd)) / (hh));
    var m = Math.floor((gap % (hh)) / (mm));
    var s = Math.floor((gap % (mm)) / (ss));

    if (d < 10) document.getElementById('day').innerHTML = '0' + d;
    else document.getElementById('day').innerHTML = d;
    if (h < 10) document.getElementById('hour').inndrHTML = '0' + h;
    else document.getElementById('hour').innerHTML = h;
    if (m < 10) document.getElementById('minute').innerHTML = '0' + m;
    else document.getElementById('minute').innerHTML = m;
    if (s < 10) document.getElementById('second').innerHTML = '0' + s;
    else document.getElementById('second').innerHTML = s;

    if ((d == 0 && h == 0 && m == 0 && s == 0) || gap < 0) {
        clearInterval(timer);
        document.getElementById('end').style.display = "block";
        document.getElementById('day').innerHTML = '00';
        document.getElementById('hour').innerHTML = '00';
        document.getElementById('minute').innerHTML = '00';
        document.getElementById('second').innerHTML = '00';
    }
}


timer = setInterval(timer, 1000);