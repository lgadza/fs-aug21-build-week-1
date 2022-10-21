//The time timer inside the clock
let btn = document.querySelector(".btn");
let timeH = document.querySelector("#secNum");
let timeSecond = 10;

//this function returns the initial value of time second
function timingTimer() {
  const resetTimer = function () {
    return (timeSecond = 10);
  };

  // const button = document.querySelector(".btn");

  function displayTime(second) {
    //  const min = Math.floor(second / 60);
    let sec = Math.floor(second % 60);
    console.log({ sec });
    timeH.innerText = /*`${min<10 ? "0": " "}${min}:*/ `${
      sec < 10 ? "0" : " "
    }${sec}`;
  }
  // console.log(displayTime(timeSecond));
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
    countDown;

    //endTime();
  };

  timeStart();
  // countDown();
  endTime();
  // timeStart();
  resetTimer();
  displayTime(timeSecond);
}

//CLOCK CODE
const semicircles = document.querySelectorAll(".semiCircle");
function wholeClock() {
  // console.log(semicircles);
  let hr = 0;
  let min = 0;
  let sec = timeSecond;
  let hours = hr * 3600000;
  let minutes = min * 60000;
  let seconds = sec * 1000;
  let setTime = hours + minutes + seconds;
  const startTime = Date.now();
  const futureTime = startTime + setTime;

  // console.log(futureTime);
  // countDownTimer();
  const timerLoop = setInterval(countDownTimer);
  function countDownTimer() {
    const currentTime = Date.now();
    const remainingTime = futureTime - currentTime;
    const angle = (remainingTime / setTime) * 360;

    if (angle > 180) {
      semicircles[2].style.display = "none";
      semicircles[0].style.display = "block";
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
  countDownTimer();
  const currentTime = Date.now();
  const remainingTime = futureTime - currentTime;

  if (remainingTime === timeSecond) {
    clearInterval(timerLoop);
  }
}
// wholeClock();

btn.addEventListener("click", wholeClock);
btn.addEventListener("mousedown", timingTimer);

// btn.addEventListener("click", countDownTimer);
