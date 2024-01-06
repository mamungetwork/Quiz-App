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
    question: "Which river is the longest in Bangladesh?",
    a: "Padma",
    b: "Jamuna",
    c: "Meghna",
    d: "Brahmaputra",
    correct: "a",
  },
  {
    question: "What is the second-largest city in Bangladesh?",
    a: "Chittagong",
    b: "Rajshahi",
    c: "Khulna",
    d: "Sylhet",
    correct: "a",
  },
  {
    question: "Which district is known as the 'City of Mosques'?",
    a: "Dhaka",
    b: "Sylhet",
    c: "Rajshahi",
    d: "Chittagong",
    correct: "c",
  },
  {
    question: "In which year did Bangladesh gain independence?",
    a: "1971",
    b: "1965",
    c: "1980",
    d: "1952",
    correct: "a",
  },
  {
    question: "What is the national flower of Bangladesh?",
    a: "Water Lily",
    b: "Rose",
    c: "Sunflower",
    d: "Daisy",
    correct: "a",
  },
  {
    question: "Which famous mangrove forest is located in Bangladesh?",
    a: "Sundarbans",
    b: "Bialowieza",
    c: "Amazon Rainforest",
    d: "Everglades",
    correct: "a",
  },
  {
    question: "What is the official language of Bangladesh?",
    a: "English",
    b: "Hindi",
    c: "Bengali",
    d: "Urdu",
    correct: "c",
  },
  {
    question: "Which Nobel Laureate was born in Bangladesh?",
    a: "Nelson Mandela",
    b: "Mother Teresa",
    c: "Malala Yousafzai",
    d: "Muhammad Yunus",
    correct: "d",
  },
  {
    question: "What is the currency of Bangladesh?",
    a: "Rupee",
    b: "Taka",
    c: "Ringgit",
    d: "Yen",
    correct: "b",
  },
  {
    question:
      "Which festival is known as the 'Festival of Sacrifice' in Bangladesh?",
    a: "Durga Puja",
    b: "Eid al-Fitr",
    c: "Christmas",
    d: "Bengali New Year",
    correct: "b",
  },
  {
    question: "What is the highest mountain in Bangladesh?",
    a: "Mount Everest",
    b: "Siahaung",
    c: "Mowdok Mual",
    d: "Nanga Parbat",
    correct: "c",
  },
  {
    question: "Which river is known as the 'River of Sorrow' in Bangladesh?",
    a: "Ganges",
    b: "Padma",
    c: "Jamuna",
    d: "Meghna",
    correct: "d",
  },
  {
    question: "What is the traditional dress for men in Bangladesh?",
    a: "Sari",
    b: "Kurta-Pajama",
    c: "Hanbok",
    d: "Cheongsam",
    correct: "b",
  },
  {
    question:
      "Which historical event is observed as Language Movement Day in Bangladesh?",
    a: "Independence Day",
    b: "Victory Day",
    c: "21st February",
    d: "National Mourning Day",
    correct: "c",
  },
  {
    question: "In which year was the Liberation War of Bangladesh fought?",
    a: "1965",
    b: "1971",
    c: "1980",
    d: "1952",
    correct: "b",
  },
  {
    question: "What is the nickname of the Bangladesh national cricket team?",
    a: "Bengal Tigers",
    b: "Royal Bengals",
    c: "Tigers of Asia",
    d: "Cricket Warriors",
    correct: "a",
  },
  {
    question: "Which lake is the largest in Bangladesh?",
    a: "Ramsagar",
    b: "Kaptai",
    c: "Boga",
    d: "Lalakhal",
    correct: "b",
  },
  {
    question: "What is the main staple food in Bangladesh?",
    a: "Rice",
    b: "Wheat",
    c: "Maize",
    d: "Barley",
    correct: "a",
  },
  {
    question:
      "Which Bangladeshi filmmaker won the Palme d'Or at the Cannes Film Festival?",
    a: "Tareque Masud",
    b: "Satyajit Ray",
    c: "Ritwik Ghatak",
    d: "Mostofa Sarwar Farooki",
    correct: "a",
  },
  {
    question:
      "What is the nickname of the Jatiyo Sangsad Bhaban, the National Parliament House of Bangladesh?",
    a: "Lotus Temple",
    b: "People's Palace",
    c: "Palace of Dreams",
    d: "Jewel of the Delta",
    correct: "d",
  },
  {
    question:
      "Which famous Bengali poet and philosopher was born in Bangladesh?",
    a: "Rabindranath Tagore",
    b: "Kazi Nazrul Islam",
    c: "Jibanananda Das",
    d: "Allama Iqbal",
    correct: "c",
  },
  {
    question: "What is the literacy rate of Bangladesh?",
    a: "60%",
    b: "75%",
    c: "85%",
    d: "92%",
    correct: "c",
  },
  {
    question:
      "Which ancient city is known as the 'City of Mosques' in Bangladesh?",
    a: "Dhaka",
    b: "Bogra",
    c: "Khulna",
    d: "Rajshahi",
    correct: "b",
  },
  {
    question: "What is the famous traditional boat race held in Bangladesh?",
    a: "Vallam Kali",
    b: "Nehru Trophy Boat Race",
    c: "Teesta Rangit Boat Race",
    d: "Nouka Baich",
    correct: "d",
  },
  {
    question: "Which Bangladeshi cricketer is known as the 'Little Master'?",
    a: "Tamim Iqbal",
    b: "Shakib Al Hasan",
    c: "Mushfiqur Rahim",
    d: "Mohammad Ashraful",
    correct: "a",
  },
  {
    question: "What is the name of the currency used in Bangladesh?",
    a: "Rupee",
    b: "Taka",
    c: "Yen",
    d: "Ringgit",
    correct: "b",
  },
  {
    question:
      "Which UNESCO World Heritage Site is located in Bagerhat, Bangladesh?",
    a: "Sundarbans",
    b: "Ruins of the Buddhist Vihara at Paharpur",
    c: "Historic Mosque City of Bagerhat",
    d: "Historic Grand Mosque of Baitul Mukarram",
    correct: "c",
  },
  {
    question: "Which river is known as the 'Heart of Bangladesh'?",
    a: "Ganges",
    b: "Padma",
    c: "Jamuna",
    d: "Meghna",
    correct: "b",
  },
  {
    question:
      "In which district is the archaeological site of Mahasthangarh located?",
    a: "Bogra",
    b: "Dinajpur",
    c: "Rajshahi",
    d: "Comilla",
    correct: "a",
  },
  {
    question: "What is the traditional music style of Bangladesh?",
    a: "Baul",
    b: "Khayal",
    c: "Sitar",
    d: "Thumri",
    correct: "a",
  },
  {
    question: "Which famous 16th-century mosque is located in Bagerhat?",
    a: "Lalbagh Fort",
    b: "Kusumba Mosque",
    c: "Sixty Dome Mosque",
    d: "Star Mosque",
    correct: "c",
  },
  {
    question: "What is the national tree of Bangladesh?",
    a: "Bamboo",
    b: "Mango",
    c: "Neem",
    d: "Banyan",
    correct: "d",
  },
  {
    question:
      "Which famous literary figure from Bangladesh won the Nobel Prize in Literature in 1971?",
    a: "Kazi Nazrul Islam",
    b: "Rabindranath Tagore",
    c: "Jibanananda Das",
    d: "Humayun Ahmed",
    correct: "b",
  },
  {
    question:
      "What is the largest sea beach in the world, located in Bangladesh?",
    a: "Cox's Bazar",
    b: "Saint Martin's Island",
    c: "Kuakata",
    d: "Bakkhali",
    correct: "a",
  },
  {
    question:
      "Which famous Bangladeshi artist is known for his surrealistic paintings?",
    a: "Zainul Abedin",
    b: "Quamrul Hassan",
    c: "Rashid Choudhury",
    d: "Shahabuddin Ahmed",
    correct: "d",
  },
  {
    question: "What is the largest national park in Bangladesh?",
    a: "Lawachara National Park",
    b: "Sundarbans National Park",
    c: "Satchari National Park",
    d: "Hakaluki Haor",
    correct: "b",
  },
  {
    question: "Which city is known as the 'Silk City' of Bangladesh?",
    a: "Rajshahi",
    b: "Khulna",
    c: "Jessore",
    d: "Mymensingh",
    correct: "c",
  },
  {
    question:
      "In which year did Bangladesh become a member of the United Nations?",
    a: "1971",
    b: "1973",
    c: "1980",
    d: "1990",
    correct: "b",
  },
  {
    question:
      "What is the traditional boat race held during the Bengali New Year celebration?",
    a: "Vallam Kali",
    b: "Nouka Baich",
    c: "Teesta Rangit Boat Race",
    d: "Hornbill Festival",
    correct: "b",
  },
  {
    question:
      "Which Bangladeshi scientist won the Nobel Peace Prize in 2006 for his work on microcredit?",
    a: "Yunus Ahmed",
    b: "Muhammad Yunus",
    c: "Abul Barkat",
    d: "Fazle Hasan Abed",
    correct: "b",
  },
  {
    question:
      "What is the largest floating guava market in Asia, located in Bangladesh?",
    a: "Swat",
    b: "Char Kukri-Mukri",
    c: "Swandip",
    d: "Swarupkathi",
    correct: "d",
  },
  {
    question:
      "Which district in Bangladesh is famous for its pottery and ceramics?",
    a: "Bogra",
    b: "Barisal",
    c: "Mymensingh",
    d: "Comilla",
    correct: "c",
  },
  {
    question:
      "What is the traditional dance form of the Chakma community in Bangladesh?",
    a: "Bihu",
    b: "Hoza",
    c: "Paglaum",
    d: "Biju",
    correct: "d",
  },
  {
    question: "In which city is the Bangladesh National Museum located?",
    a: "Dhaka",
    b: "Chittagong",
    c: "Rajshahi",
    d: "Sylhet",
    correct: "a",
  },
  {
    question:
      "What is the traditional handloom fabric produced in Tangail, Bangladesh?",
    a: "Jamdani",
    b: "Muslin",
    c: "Khadi",
    d: "Tant",
    correct: "d",
  },
  {
    question:
      "Which Bangladeshi cricketer is known as the 'Magician' for his spin bowling?",
    a: "Shakib Al Hasan",
    b: "Mehidy Hasan Miraz",
    c: "Taskin Ahmed",
    d: "Mustafizur Rahman",
    correct: "b",
  },
  {
    question:
      "What is the main ingredient in the traditional Bengali sweet 'Roshogolla'?",
    a: "Paneer",
    b: "Khoya",
    c: "Chhena",
    d: "Mava",
    correct: "c",
  },
  {
    question:
      "Which famous Bangladeshi film won the Palme d'Or at the Cannes Film Festival?",
    a: "Matir Moina",
    b: "A River Called Titas",
    c: "The Clay Bird",
    d: "Antareen",
    correct: "a",
  },
  {
    question:
      "What is the traditional art of creating colorful patterns on the ground using rice powder called in Bangladesh?",
    a: "Rangoli",
    b: "Alpana",
    c: "Muggu",
    d: "Kolam",
    correct: "b",
  },
  {
    question:
      "Which ancient city was the capital of the Bengal Sultanate during the 15th century?",
    a: "Gaur",
    b: "Sonargaon",
    c: "Pandua",
    d: "Satgaon",
    correct: "a",
  },
  {
    question: "What is the longest sea beach in the world?",
    a: "Cox's Bazar",
    b: "Saint Martin's Island",
    c: "Kuakata",
    d: "Bakkhali",
    correct: "a",
  },
  {
    question: "Which river is known as the 'Sorrow of Bengal'?",
    a: "Ganges",
    b: "Padma",
    c: "Jamuna",
    d: "Meghna",
    correct: "d",
  },
  {
    question: "In which year did Bangladesh host the ICC Cricket World Cup?",
    a: "1996",
    b: "1999",
    c: "2003",
    d: "2011",
    correct: "a",
  },
  {
    question: "What is the traditional headgear worn by men in Bangladesh?",
    a: "Topi",
    b: "Pagri",
    c: "Jinnah Cap",
    d: "Pukhoor",
    correct: "c",
  },
  {
    question: "Which Bangladeshi singer is known as the 'King of Pop'?",
    a: "Ayub Bachchu",
    b: "Miles",
    c: "Asif Akbar",
    d: "James",
    correct: "d",
  },
];

// Initialize with an empty array

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
