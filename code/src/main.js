import {  getSecondsLeftOfYear, getTimeString } from "./clock";

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("seconds-left");

const render = () => {
  const now = new Date();
  timeLeft.innerText = Math.floor(getSecondsLeftOfYear(now) / 60);
  timeContainer.innerText = getTimeString(now);
  
}

render();
setInterval(render, 1000);