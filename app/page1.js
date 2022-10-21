const button = document.getElementById("proceed");
const check = document.getElementById("terms");
//const input = document.getElementById("terms")
button.hidden = true;
const checking = function () {
  button.hidden = !button.hidden;
  console.log("hello");
};

check.addEventListener("click", checking);
