var seconds = 0;
var minutes = 0;
var hours = 0;
var interval;

function start(){
    watch();
    interval = setInterval(watch,1000);
}

function pause(){
    clearInterval(interval);
}

function stop(){
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    document.getElementById('watch').innerText=  "00:00:00";
}

function twoDigits(digit) {
    if (digit < 10) {
        return("0" + digit);
    } else {
        return(digit);
    }
}

function watch() {
    seconds++
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('watch').innerText= twoDigits(hours) + ":" + twoDigits(minutes) + ":" + twoDigits(seconds);
}