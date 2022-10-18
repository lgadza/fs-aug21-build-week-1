let wrong = document.querySelector("#third-layer ");
let wrong2 = document.querySelector("#inner-layer ");
let correctRotate = document.querySelector("#inner-layer2 ");
let correctRotate2 = document.querySelector("#second-layer ");

let totalQns = 100;
let random = Math.floor(Math.random() * totalQns + 1);
let results = random / totalQns;

console.log(results);
function aboveHalf() {
  //   totalQns = 10;
  let half = 0.5;
  let percAboveHalf = results - 0.5;
  let percBelowHalf = results;
  let semiCircle = 180;
  let rotatePassDeg = (percAboveHalf / half) * semiCircle;
  let rotateFailDeg = (percBelowHalf / half) * semiCircle;

  console.log(rotatePassDeg);
  console.log(rotateFailDeg);
  if (results >= 0.5) {
    wrong2.style.display = "none";
    correctRotate.style.display = "block";
    correctRotate2.style.display = "block";
    correctRotate.style.transform = `rotate(${rotatePassDeg / 2}deg)`;
    correctRotate2.style.transform = `rotate(${-rotatePassDeg / 2}deg)`;

    //} else if (results >= 0.5) {
    // wrong.style.width = remainLength + "px";
    //}
    console.log(wrong);
  } else {
    wrong2.style.transform = `rotate(${rotateFailDeg}deg)`;
  }
}
console.log(random);
aboveHalf();
// console.log(5 + "px")
