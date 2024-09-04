const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");
const scoreCont = document.querySelector(".scoreCont");
const alert = document.querySelector(".alert");
const startBtn = document.querySelector(".startBtn");
const exitBtn = document.querySelector(".exitBtn");
const contactBtn = document.querySelector(".contactBtn");
const form = document.querySelector(".form");
const logo = document.querySelector(".logo");


//Question list
const quiz = [
  {
    question: "Q.: What was Goku's name before he came to Earth as a baby?",
    choices: ["Gohan", "Kakarot", "Saiyan"],
    answer: "Kakarot",
  },
  {
    question: "Q.: Raditz is Goku's",
    choices: ["Master", "Father", "Brother"],
    answer: "Brother",
  },
  {
    question: "Q.: What planet do Kami and Piccolo come from?",
    choices: ["Namek", "Sayan", "Truffle"],
    answer: "Namek",
  },
  {
    question: "Q.: What do all the dragon balls have inside?",
    choices: ["Crystals", "Stars", "Dragons"],
    answer: "Stars",
  },
  //{
  //question: "Q.: Krillin trained under",
  //choices: ["Picolo", "Tien", "Master Roshi"],
  //answer: "Master Roshi",
  //},
  //{
  // question:
  //  "Q.: This wise-cracking little pig-creature can shapeshift (well, for a few minutes):",
  //choices: ["Oolong", "Ox King", "King Yemma"],
  //answer: "Oolong",
  // },
  // {
  // question: "Q.: Garlic Jr.'s power is greatest when he's closest to",
  // choices: ["Kami", "Shenron", "The Makyo Star"],
  // answer: "The Makyo Star",
  //},
  //{
  // question: "Q.: Dr. Gero works for",
  // choices: ["The Red Ribbon Army", "The Spice Boys", "Androids 19 and 20"],
  // answer: "The Red Ribbon Army",
  //},
  //{
  // question: "Q.: When Goku's energy level goes way up, his eyes turn",
  // choices: ["Red", "Green", "Gold"],
  //  answer: "Green",
  //},
  // {
  //  question: "Q.: Like his father, Gohan had this when he was little:",
  //  choices: ["A cat", "A Flying disc", "A tail"],
  //  answer: "A tail",
  //},
];

// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;

// Arrow Function to Show Questions
const showQuestions = () => {
  const questionDetails = quiz[currentQuestionIndex];

  questionBox.textContent = questionDetails.question;

  choicesBox.textContent = "";
  for (let i = 0; i < questionDetails.choices.length; i++) {
    const currentChoice = questionDetails.choices[i];
    const choiceDiv = document.createElement("div");
    choiceDiv.textContent = currentChoice;
    choiceDiv.classList.add("choice");
    choicesBox.appendChild(choiceDiv);

    choiceDiv.addEventListener("click", () => {
      if (choiceDiv.classList.contains("selected")) {
        choiceDiv.classList.remove("selected");
      } else {
        choiceDiv.classList.add("selected");
      }
    });
  }
};

// Function to check answers
const checkAnswer = () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
    //alert("Correct Answer!");
    displayAlert("Correct Answer!");
    score++;
  } else {
    //alert("Wrong Answer!");
    displayAlert("Wrong Answer!");
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quiz.length) {
    showQuestions();
  } else {
    showScore();
    quizOver = true;
  }
  //console.log(selectedChoice);
};

//Show score function

const showScore = () => {
  questionBox.textContent = "";
  choicesBox.textContent = "";
  scoreCont.textContent = `You Scored ${score} out of ${quiz.length}!`;
  displayAlert("You have completed this quiz!");
  nextBtn.textContent = "Play Again";
  //nextBtn.addEventListener('click', ()=>{
  //currentQuestionIndex = 0;
  //showQuestions();
  //nextBtn.textContent = "Next";
  //scoreCont.textContent = "";
  //});
};

// Function to Show Alert
const displayAlert = (msg) => {
  alert.style.display = "block";
  alert.textContent = msg;
  setTimeout(() => {
    alert.style.display = "none";
  }, 1000);
};


// Event Listener to Start Button
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  container.style.display = "block";
  contactBtn.style.display = "none";
  logo.style.display = "none";

  showQuestions();
});

exitBtn.addEventListener("click", () => {
  container.style.display = "none";
  startBtn.style.display = "block";
  contactBtn.style.display = "block";
  logo.style.display = "block";

  showQuestions();
});

showQuestions();
nextBtn.addEventListener("click", () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (!selectedChoice && nextBtn.textContent === "Next") {
    //alert("Select Answer");
    displayAlert("Select Answer");
    return;
  }
  if (quizOver) {
    //currentQuestionIndex = 0;
    nextBtn.textContent = "Next";
    scoreCont.textContent = "";
    currentQuestionIndex = 0;

    quizOver = false;
    score = 0;
    showQuestions();
  } else {
    checkAnswer();
  }
});

// Event Listener to Contact Button
contactBtn.addEventListener("click", () => { //Have an issue with a modal
  contactBtn.style.display = "none";
  form.style.display = "block";
  startBtn.style.display = "none";
  logo.style.display = "none";

});
