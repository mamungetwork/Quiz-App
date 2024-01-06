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
const aText = document.querySelector(".a");
const bText = document.querySelector(".b");
const cText = document.querySelector(".c");
const dText = document.querySelector(".d");
const boardQuestion = document.querySelector(".question .number");
const boardScore = document.querySelector(".score .number");
const submitBtn = document.querySelector(".submit");
const answereBtn = document.querySelectorAll(".answere");

let currentQuiz = 0;
let currentScore = 0;
let answereSelected = false;

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

// Toggle Class when answere Selected
answereBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    answereBtn.forEach((btn) => {
      btn.classList.remove("selected");
    });
    btn.classList.add("selected");
  });
});

//  Check if answere is Selected or not
function checkSelect() {
  return Array.from(answereBtn).some(({ classList }) =>
    classList.contains("selected")
  );
}

submitBtn.addEventListener("click", () => {
  answereSelected = checkSelect();
  if (currentQuiz < quizQuestion.length && answereSelected) {
    console.log(currentQuiz);

    //   Check if the answere is correnct or not
    answereBtn.forEach((element) => {
      if (element.classList.contains("selected")) {
        // Get the class letter (assuming it's the only class)
        const classLetter = element.classList[0];

        // Check if the class letter exists as a key in yourObject
        if (quizQuestion[currentQuiz].correct === classLetter) {
          console.log("Correct");
          currentScore++;
          boardScore.textContent = currentScore;
        } else {
          console.log("Wrong");
        }
      }
    });

    //   Change Quiz *****
    setTimeout(() => {
      loadQuiz();
      answereBtn.forEach((btn) => {
        btn.classList.remove("selected");
      });
    }, 1000);
    currentQuiz++;
  } else {
  }
});
