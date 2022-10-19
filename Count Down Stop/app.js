//The time timer inside the clock

const timeH = document.querySelector("#secNum");
let timeSecond = 10;

//this function returns the initial value of time second
const resetTimer = function () {
  return (timeSecond = 10);
};

const button = document.getElementById("button");

function displayTime(second) {
  //  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  console.log({ sec });
  timeH.innerText = /*`${min<10 ? "0": " "}${min}:*/ `${
    sec < 10 ? "0" : " "
  }${sec}`;
}

//displayTime(second)

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
  //displayTime(timeSecond);
  countDown();

  //endTime();
};
// button.addEventListener("click", timeStart);
// button.addEventListener("click", resetTimer);
//button.addEventListener("click", timeStart)*/

//CLOCK CODE
const semicircles = document.querySelectorAll(".semiCircle");
console.log(semicircles);
const hr = 0;
const min = 0;
const sec = 10;

const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
let setTime = hours + minutes + seconds;
const startTime = Date.now();
const futureTime = startTime + setTime;
const timerLoop = setInterval(countDownTimer);
countDownTimer();
function countDownTimer() {
  const currentTime = Date.now();
  const remainingTime = futureTime - currentTime;
  const angle = (remainingTime / setTime) * 360;

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

  if (remainingTime < 0) {
    clearInterval(timerLoop);
  }
}
