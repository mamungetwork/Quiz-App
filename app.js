"use-strict";

let quizQuestion = [
  {
    question: "What is the capital city of Bangladesh?",
    a: "Dhaka",
    b: "Chittagong",
    c: "Rajshahi",
    d: "Khulna",
    correct: "a",
  },
  {
    question: "Which major river flows through Bangladesh?",
    a: "Ganges",
    b: "Brahmaputra",
    c: "Yamuna",
    d: "Meghna",
    correct: "b",
  },
  {
    question:
      "Name the largest mangrove forest in the world, which is located in Bangladesh?",
    a: "Sundarbans",
    b: "Madhupur Forest",
    c: "Sylhet Forest",
    d: "Cox's Bazar Forest",
    correct: "a",
  },
  {
    question: "In what year did Bangladesh gain independence from Pakistan?",
    a: "1970",
    b: "1971",
    c: "1972",
    d: "1973",
    correct: "b",
  },
  {
    question: "What is the traditional dress for Bangladeshi women?",
    a: "Salwar Kameez",
    b: "Pashmina",
    c: "Lehenga",
    d: "Sari",
    correct: "d",
  },
  {
    question: "Name the famous traditional Bengali New Year celebration?",
    a: "Durga Puja",
    b: "Diwali",
    c: "Pohela Boishakh",
    d: "Eid-ul-Fitr",
    correct: "c",
  },
  {
    question: "What is the currency of Bangladesh?",
    a: "Rupee",
    b: "Taka",
    c: "Ringgit",
    d: "Baht",
    correct: "b",
  },
  {
    question:
      "Name one of the major industries contributing to Bangladesh's economy.",
    a: "Textile and Garments",
    b: "Information Technology",
    c: "Tourism",
    d: "Agriculture",
    correct: "a",
  },
  {
    question: "What is the largest mammal in the world?",
    a: "Elephant",
    b: "Blue Whale",
    c: "Giraffe",
    d: "Polar Bear",
    correct: "b",
  },
  {
    question: "What is the name of national animal of Bangladesh.",
    a: "Royal Bengal Tiger",
    b: "Asian Elephant",
    c: "Hoolock Gibbon",
    d: "Red Panda",
    correct: "a",
  },
];

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

let currentQuiz = 0;
let currentScore = 0;
let answerSelected = false;

loadQuiz();
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

console.log(currentQuiz);
submitBtn.addEventListener("click", () => {
  answerSelected = checkSelect();
  if (currentQuiz <= quizQuestion.length - 1 && answerSelected) {
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
        }, 200);
      }
    });

    //   Change Quiz *****
    setTimeout(() => {
      loadQuiz();
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
      console.log(currentQuiz);
    }, 300);
    currentQuiz++;
  } else if (currentQuiz < quizQuestion.length - 1) {
    gameFinish.classList.add("finish");
  } else {
    addFeedback();
    feedback.textContent = "Please choose a answer to continue";
    addFeedbackClass("warn");
  }
  console.log(currentQuiz);
});
