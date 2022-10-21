/* ------ 
        The Data:
                 -----*/
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
// we select the elements we ll need
const container = document.querySelector(".container");
const answers = document.querySelector(".answers");
const questionText = document.querySelector(".questionText");
const footer = document.getElementById("footer");
const constantString = document.getElementById("constantString");
const ramainingQuestions = document.getElementById("ramainingQuestions");
const totalQuestions = document.getElementById("totalQuestions");
const nextButton = document.querySelector(".nextButton");
const scoreboardButton = document.querySelector(".scoreboardButton");
scoreboardButton.hidden = true;
const score = document.getElementById("score");
// global variables
let userScore = 0;
let questionsLeft = 0;
let chosenAnswers = [];
let totalQs = questions.length;
let totalQuestionsArray = [];
// footer
// array of total number of questions:
const getCurrentQuestionArr = function () {
  for (let i = 1; i <= questions.length; i++) {
    totalQuestionsArray.push(i);
  }
  console.log({ totalQuestionsArray });
  return totalQuestionsArray;
};
getCurrentQuestionArr();
// remaining questions
const showRemainingQuestions = function () {
  totalQuestions.innerText = `/  ${totalQs}`;
};
console.log(showRemainingQuestions());
// we create an array of arrays with the question and the answers [correct and incorrect]
let allQsAndAnswers = [];
const getAllAnswers = function (arr) {
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i].question;
    let correctAnswer = questions[i].correct_answer;
    let incorrectAnswersArr = questions[i].incorrect_answers;
    let answers = [];
    answers.push(question, correctAnswer);
    for (let incorrectAnswer of incorrectAnswersArr) {
      answers.push(incorrectAnswer);
    }
    allQsAndAnswers.push(answers);
    // If we want to create an array of arrays with correct answer ans the incorrect answers
    // let correctAnswerArr = [];
    // let answers = [];
    // correctAnswerArr.push(questions[i].correct_answer);
    // answers.push(correctAnswerArr, questions[i].incorrect_answers);
    // allAnswers.push(answers);
  }
  console.log(allQsAndAnswers.length);
  console.log({ allQsAndAnswers });
  return allQsAndAnswers;
};
console.log(getAllAnswers(questions));
// we create a function that will act as random index generator for rendering the questions
const newRandomQuestion = function () {
  let random = Math.floor(Math.random() * questions.length); // we need indexes from 0 to 9
  return random;
};
console.log(newRandomQuestion());
// ARRAY OF ONLY THE QUESTIONS
let onlyQuestionsArray = [];
const getOnlytheQuestions = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    onlyQuestionsArray.push(arr[i].question);
  }
  console.log({ onlyQuestionsArray });
  return onlyQuestionsArray;
};
console.log(getOnlytheQuestions(questions));
// function that creates an array out of the values of an object
const arrayFromObject = function (obj) {
  let correctAnswer = "";
  let array = [];
  let incorrectArray = [];
  let onlyAnswers = [];
  for (let prop of Object.entries(obj)) {
    array.push(prop);
  }
  incorrectArray = array[5][1];
  correctAnswer = array[4][1];
  for (let i = 0; i < incorrectArray.length; i++) {
    onlyAnswers.push(incorrectArray[i]);
  }
  onlyAnswers.push(correctAnswer);
  return onlyAnswers;
};
console.log(
  arrayFromObject({
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  })
);
let arrayWithRandomValues = [];
// we create the function that, when the button is clicked, the question with the possible answers [including the correct one] appears
// and, when an answer is clicked, the useScore global variable increases by 1 [only after the click for the moment]
let compareArray = [];
let questionsDuplicate = questions;
window.onload = function () {
  showQuestion();
};
const showQuestion = function () {
  // we clear the content every time a question is asked
  answers.innerHTML = "";
  console.log("big array: ", questionsDuplicate);
  console.log("questions array: ", questions);
  let random = newRandomQuestion();
  let obj = questionsDuplicate[random];
  console.log({ obj });
  let questionShow = obj.question;
  questionText.innerText = questionShow;
  // for (let i = 0; i < questionsDuplicate.length; i++) {
  let correctAnswer = obj.correct_answer;
  questionsDuplicate.splice(random, 1);
  console.log({ questionsDuplicate });
  let allAnswers = arrayFromObject(obj);
  console.log("the all answers array: ", allAnswers);
  for (let j = 0; j < allAnswers.length; j++) {
    const answer = document.createElement("h3");
    answer.classList.add("answer");
    answer.innerText = allAnswers[j];
    answer.addEventListener("click", (event) => {
      // the answerActive class is found in the css file [page2Style.css] at line 72
      let prevAnswer;
      if ((prevAnswer = document.querySelector(".answerActive"))) {
        prevAnswer.classList.toggle("answerActive");
        console.log({ prevAnswer });
      } else {
        event.currentTarget.classList.toggle("answerActive");
        console.log(event.currentTarget);
      }
      if (
        allAnswers[j] === correctAnswer &&
        answer.classList.contains("answerActive")
        //   // the 4 conditions so that the score is increased by 1 are:
        //   // 1. the selected answer is correct
        //   // 2. the selected answer is highlighted
        //   // 3. there are NO other highlighted buttons
        //   // 4. the score is incremented ONLY by 1 [even we clicked on the answer more than once and]
        //   //    AND only after the previous conditions are clicked
      ) {
        userScore++;
      }
    });
    answers.appendChild(answer);
  }
  console.log({ userScore });
  localStorage.setItem("userScore", `${userScore}`);
  // }
};

// dynamically change the question number
const changeQuestionNumber = function () {
  let result = "";
  let array = questionsDuplicate;
  console.log({ array });
  let questionNr = "";
  console.log({ questionNr });
  let nr = parseInt(ramainingQuestions.innerText);
  console.log({ nr });

  if (nr === 10) {
    nextButton.hidden = true;
    scoreboardButton.hidden = false;
    // scoreboardButton.classList.toggle("showBtn");
    //ramainingQuestions.toggle("hideBtn");
    //result = userScore;
    //score.innerText = `Your total score is ${result}`;
    questionText.innerText = `🥳 Congrats on finalizing the test, click the button to see your result 👻`;
  } else {
    nr++;
    questionNr = nr;
    ramainingQuestions.innerText = questionNr;
  }
};
nextButton.addEventListener("click", showQuestion);
nextButton.addEventListener("click", changeQuestionNumber);

//CLOCK

//The time timer inside the clock
// let btn = document.querySelector(".btn");
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
wholeClock();
timingTimer();

nextButton.addEventListener("click", wholeClock);
nextButton.addEventListener("mousedown", timingTimer);

// btn.addEventListener("click", countDownTimer);
