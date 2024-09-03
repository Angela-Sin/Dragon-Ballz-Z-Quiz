const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");

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
  {
    question: "Q.: Krillin trained under",
    choices: ["Picolo", "Tien", "Master Roshi"],
    answer: "Master Roshi",
  },
  {
    question:
      "Q.: This wise-cracking little pig-creature can shapeshift (well, for a few minutes):",
    choices: ["Oolong", "Ox King", "King Yemma"],
    answer: "Oolong",
  },
  {
    question: "Q.: Garlic Jr.'s power is greatest when he's closest to",
    choices: ["Kami", "Shenron", "The Makyo Star"],
    answer: "The Makyo Star",
  },
  {
    question: "Q.: Dr. Gero works for",
    choices: ["The Red Ribbon Army", "The Spice Boys", "Androids 19 and 20"],
    answer: "The Red Ribbon Army",
  },
  {
    question: "Q.: When Goku's energy level goes way up, his eyes turn",
    choices: ["Red", "Green", "Gold"],
    answer: "Green",
  },
  {
    question: "Q.: Like his father, Gohan had this when he was little:",
    choices: ["A cat", "A Flying disc", "A tail"],
    answer: "A tail",
  },
];


// Making Variables
let currentQuestionIndex = 0;

// Arrow Function to Show Questions
const showQuestions = () =>{
  const questionDetails = quiz[currentQuestionIndex];
  console.log(questionDetails);
}

nextBtn.addEventListener('click', () =>{
    showQuestions();
});
