timeH = document.getElementById("secNum");
let timeSecond = 5;

function displayTime(second) {
  const sec = Math.floor(second % 60);
  console.log({ sec });
  timeH.innerText = `${sec < 10 ? "0" : " "}${sec}`;
}
function endTime() {
  timeH.innerText = timeSecond;
}
const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond <= 0 || timeSecond < 1) {
    endTime();
    clearInterval(countDown);
  }
}, 1000);
//this function starts the countdown
const timeStart = function () {
  countDown();
};
//CLOCK CODE
const semicircles = document.querySelectorAll(".semiCircle");
function secondPart() {
  //   console.log(semicircles);
  let hr = 0;
  let min = 0;
  let sec = 5;
  let hours = hr * 3600000;
  let minutes = min * 60000;
  let seconds = sec * 1000;
  let setTime = hours + minutes + seconds;
}
let timerLoop = setInterval(countDownTimer);

function clockPart1() {
  let startTime = Date.now();
  let futureTime = startTime + setTime;
  return futureTime;
  if (remainingTime < 0) {
    clearInterval(timerLoop);
    // timeH.innerText = `0`;
  }
}
let futureTime = clockPart1();
//countDownTimer();
function countDownTimer() {
  let currentTime = Date.now();
  let remainingTime = futureTime - currentTime;
  let angle = (remainingTime / setTime) * 360;
  if (angle > 180) {
    semicircles[2].style.display = "none";
    // semicircles[0].style.display = "block";
    semicircles[0].style.transform = "rotate(180deg)";
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  } else {
    semicircles[2].style.display = "block";
    semicircles[0].style.transform = `rotate(${angle}deg)`;
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  }
  //timer
  //   const secs = Math.floor((remainingTime / 1000) % 60);
  //   timeH.innerText = `${secs}`;
  if (remainingTime < 0) {
    clearInterval(timerLoop);
  }
}
// console.log(nextButton);

// nextButton = document.querySelector("#nextButton");

// nextButton.addEventListener("click", displayTime);
// nextButton.addEventListener("click", endTime);
// nextButton.addEventListener("click", countDownTimer);
nextButton.addEventListener("click", countDownTimer);
nextButton.addEventListener("click", futureTime);
