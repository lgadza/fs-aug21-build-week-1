// let wrong = document.querySelector("#third-layer ");
// let wrong2 = document.querySelector("#inner-layer ");
// let correctRotate = document.querySelector("#inner-layer2 ");
// let correctRotate2 = document.querySelector("#second-layer ");

// let totalQns = 37;
// let random = Math.floor(Math.random() * totalQns + 1);
// let results = random / totalQns;
// let passed = (random / totalQns) * 100;
// passed = Math.round(passed * 10) / 10;
// let failed = ((totalQns - random) / totalQns) * 100;
// failed = Math.round(failed * 10) / 10;

// console.log(results);
// function pass() {
//   //   totalQns = 10;
//   let half = 0.5;
//   let percAboveHalf = results - 0.5;
//   let percBelowHalf = results;
//   let semiCircle = 180;
//   let rotatePassDeg = (percAboveHalf / half) * semiCircle;
//   let rotateFailDeg = (percBelowHalf / half) * semiCircle;

//   console.log(rotatePassDeg);
//   console.log(rotateFailDeg);
//   if (results >= 0.5) {
//     wrong2.style.display = "none";
//     correctRotate.style.display = "block";
//     correctRotate2.style.display = "block";
//     correctRotate.style.transform = `rotate(${rotatePassDeg / 2}deg)`;
//     correctRotate2.style.transform = `rotate(${-rotatePassDeg / 2}deg)`;

//     //} else if (results >= 0.5) {
//     // wrong.style.width = remainLength + "px";
//     //}
//     console.log(wrong);
//   } else {
//     wrong2.style.transform = `rotate(${rotateFailDeg}deg)`;
//   }
// }
// console.log(random);
// pass();
// // console.log(5 + "px")
// let div1 = document.querySelector("#percentage-pass-info");
// let numberOfQsPass = document.createElement("div");
// let percentagePassed = document.createElement("div");
// function displayPass() {
//   numberOfQsPass.classList = "number_of_qs_pass";
//   percentagePassed.classList = "percentage-passed";
//   percentagePassed.innerText = `${passed}%`;
//   numberOfQsPass.innerText = `${random} | ${totalQns}`;
//   div1.appendChild(percentagePassed);
//   div1.appendChild(numberOfQsPass);
// }
// displayPass();
// let div2 = document.querySelector("#percentage-fail-info");
// let numberOfQsFail = document.createElement("div");
// let percentageFailed = document.createElement("div");
// function displayFail() {
//   numberOfQsFail.classList = "number_of_qs_fail;";
//   percentageFailed.classList = "percentage-fail";
//   percentageFailed.innerText = `${failed}%`;
//   numberOfQsFail.innerText = `${totalQns - random} | ${totalQns}`;
//   div2.appendChild(percentageFailed);
//   div2.appendChild(numberOfQsFail);
// }
// displayFail();
// function getCert() {
//   let getCv = document.querySelector("#getCv");
//   if (results <= 0.6) {
//     getCv.innerHTML = "";

//     let fail = document.createElement("p");
//     fail.classList = "again";
//     fail.innerText = "Unfortunately!";
//     let nextTime = document.createElement("p");
//     nextTime.classList = "do_not_give_up";
//     nextTime.innerText = "You failed the exam";
//     let note = document.createElement("p");
//     note.classList = "come_back";
//     note.innerText = "You can contact your TA's for help on 1on1";
//     getCv.appendChild(fail);
//     getCv.appendChild(nextTime);
//     getCv.appendChild(note);
//     getCv.style.marginLeft = "0px";
//     getCv.style.marginTop = "40px";
//   }
// }
// getCert();

//this is the script for the review page
let divStars = document.querySelector("#stars");
function darkStars() {
  for (let i = 1; i <= 10; i++) {
    let star = document.createElement("img");
    star.src = "star.svg";
    star.classList = "darkStar";

    star.style.color = "black";
    star.style.padding = "10px";
    divStars.appendChild(star);
  }
}
darkStars();

let arrStars = document.querySelectorAll(".darkStar");
console.log(arrStars);

function brightStars() {
  for (let i = 0; i <= arrStars.length; i++) {
    let star2 = document.createElement("img");
    star2.src = "star.svg";
    star2.classList = "darkStar";

    star2.style.color = "black";
    star2.style.padding = "10px";
    divStars.appendChild(star2);
  }
}
// darkStars();
