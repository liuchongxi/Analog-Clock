const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hourPos = new Date().getHours() * 30;
let minPos = new Date().getMinutes() * 6;
let secPos= new Date().getSeconds() * 6;

HOURHAND.setAttribute("style", "transform: rotate(" + hourPos +"deg)");
MINUTEHAND.setAttribute("style", "transform: rotate(" + minPos +"deg)");
SECONDHAND.setAttribute("style", "transform: rotate(" + secPos + "deg)");
