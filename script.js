// get Hour, Minute, Second arm
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// get Hour, Minute, Second arm pos use math
var secPos= new Date().getSeconds() * 6;
var minPos = (new Date().getMinutes() * 6) + secPos/60;
var hourPos = (new Date().getHours() * 30) + minPos/12;

function runClock(){
    secPos = secPos + 6;
    minPos = minPos + 1/10;
    hourPos = hourPos + 1/120;

    HOURHAND.setAttribute("style", "transform: rotate(" + hourPos +"deg)");
    MINUTEHAND.setAttribute("style", "transform: rotate(" + minPos +"deg)");
    SECONDHAND.setAttribute("style", "transform: rotate(" + secPos + "deg)");
}

setInterval( runClock, 1000);