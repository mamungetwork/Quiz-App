"use-strict";

let currentQuiz = 0;
let currentScore = 0;
let answerSelected = false;

const questionText = document.querySelector(".main_question");
const aText = document.querySelector(`[data-answer="a"]`);
const bText = document.querySelector(`[data-answer="b"]`);
const cText = document.querySelector(`[data-answer="c"]`);
const dText = document.querySelector(`[data-answer="d"]`);
const boardQuestion = document.querySelector(".question .number");
const boardScore = document.querySelector(".score .number");
const submitBtn = document.querySelector(".submit");
const answerBtn = document.querySelectorAll(".answer");
const feedback = document.querySelector(".ans_feedback");
const gameFinish = document.querySelector(".game_finish");
const finalScore = document.querySelector(".final_number");

const apiUrl =
  "https://opentdb.com/api.php?amount=50&difficulty=medium&type=multiple";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Handle the array of questions in 'data.results'
    // console.log(data.results);
    getQuestion(data);
  })
  .catch((error) => {
    console.error("Error fetching quiz questions:", error);
  });

let quizQuestion = [];

function getQuestion(data) {
  quizQuestion = data.results;
  quizQuestion[currentQuiz].incorrect_answers.push(
    quizQuestion[currentQuiz].correct_answer
  );
  let newAnswearArr = quizQuestion[currentQuiz].incorrect_answers;

  for (let i = newAnswearArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newAnswearArr[i], newAnswearArr[j]] = [newAnswearArr[j], newAnswearArr[i]];
  }
  quizQuestion[currentQuiz].a = newAnswearArr[0];
  quizQuestion[currentQuiz].b = newAnswearArr[1];
  quizQuestion[currentQuiz].c = newAnswearArr[2];
  quizQuestion[currentQuiz].d = newAnswearArr[3];

  newAnswearArr.forEach((option, index) => {
    switch (index) {
      case 0:
        index = "a";
        break;
      case 1:
        index = "b";
        break;
      case 2:
        index = "c";
        break;
      case 3:
        index = "d";
        break;
    }
    if (quizQuestion[currentQuiz].correct_answer === option) {
      console.log(index, option);
      quizQuestion[currentQuiz].correct = index;
    }
  });
  console.log(quizQuestion[currentQuiz]);
  loadQuiz();
}

function loadQuiz() {
  questionText.textContent = quizQuestion[currentQuiz].question;
  aText.textContent = quizQuestion[currentQuiz].a;
  bText.textContent = quizQuestion[currentQuiz].b;
  cText.textContent = quizQuestion[currentQuiz].c;
  dText.textContent = quizQuestion[currentQuiz].d;

  // Scoreboard ******
  boardQuestion.textContent = `${currentQuiz + 1}/${quizQuestion.length}`;
}

// Toggle Class when answer Selected
answerBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    answerBtn.forEach((btn) => {
      btn.classList.remove("selected");
    });
    btn.classList.add("selected");
    // removeFeedback();
    feedback.textContent = "Submit to find out if it's the right answer";
    removeFeedbackClass("warn");
  });
});

//  Check if answer is Selected or not
function checkSelect() {
  return Array.from(answerBtn).some(({ classList }) =>
    classList.contains("selected")
  );
}

// Add or remove Feedback
function addFeedback() {
  feedback.style.display = "block";
}
function removeFeedback() {
  feedback.style.display = "none";
}
function addFeedbackClass(classText) {
  feedback.classList.add(`${classText}`);
}
function removeFeedbackClass(classText) {
  feedback.classList.remove(`${classText}`);
}

submitBtn.addEventListener("click", () => {
  answerSelected = checkSelect();
  if (currentQuiz < quizQuestion.length && answerSelected) {
    //   Check if the answer is correnct or not
    answerBtn.forEach((element) => {
      // When Answer is correct ***************
      element.style.pointerEvents = "none";
      if (element.classList.contains("selected")) {
        if (quizQuestion[currentQuiz].correct === element.dataset.answer) {
          element.classList.add("correct");
          currentScore++;
          boardScore.textContent = currentScore;
          finalScore.textContent = currentScore;
          submitBtn.style.pointerEvents = "none";
          addFeedback();
          addFeedbackClass("correct");
          feedback.innerHTML = `<b>Great!</b> your answer is correct.`;
        } else {
          // When Answer is wrong ***************
          addFeedback();
          addFeedbackClass("wrong");
          element.classList.add("wrong");
          feedback.innerHTML = `<b>Oops!</b> your answer is wrong.`;
        }
      }
      // Show the Correct answer
      if (quizQuestion[currentQuiz].correct === element.dataset.answer) {
        setTimeout(() => {
          element.classList.add("correct");
        }, 500);
      }
    });

    //   Change Quiz *****
    setTimeout(() => {
      if (currentQuiz < quizQuestion.length) {
        loadQuiz();
      }
      answerBtn.forEach((btn) => {
        btn.classList.remove("selected");
        btn.classList.remove("correct");
        btn.classList.remove("wrong");
        btn.style.pointerEvents = "auto";
      });
      submitBtn.style.pointerEvents = "auto";
      // removeFeedback();
      feedback.textContent = "Please choose a answer";
      removeFeedbackClass("correct");
      removeFeedbackClass("wrong");
    }, 1500);
    currentQuiz++;
  } else {
    addFeedback();
    feedback.textContent = "Please choose a answer to continue";
    addFeedbackClass("warn");
  }
  setTimeout(() => {
    if (currentQuiz === quizQuestion.length) {
      gameFinish.classList.add("finish");
    }
  }, 1500);
});

const reload = document.querySelector(".reload");

reload.addEventListener("click", () => {
  window.location.reload();
});
