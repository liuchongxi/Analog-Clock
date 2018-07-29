// get Hour, Minute, Second arm
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// get Hour, Minute, Second arm pos use math
let secPos= new Date().getSeconds() * 6;
let minPos = (new Date().getMinutes() * 6) + secPos/60;
let hourPos = (new Date().getHours() * 30) + minPos/12;

HOURHAND.setAttribute("style", "transform: rotate(" + hourPos +"deg)");
MINUTEHAND.setAttribute("style", "transform: rotate(" + minPos +"deg)");
SECONDHAND.setAttribute("style", "transform: rotate(" + secPos + "deg)");
