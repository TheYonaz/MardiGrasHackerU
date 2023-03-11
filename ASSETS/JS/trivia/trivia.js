const questions = [  {    question: "What does 'Mardi Gras' mean in French?",    choices: ["Fat Tuesday", "Good Monday", "Happy Wednesday", "Sad Thursday"],
    answer: "Fat Tuesday"
  },
  {
    question: "Which city is most famous for its Mardi Gras celebration?",
    choices: ["New Orleans", "Rio de Janeiro", "Venice", "Paris"],
    answer: "New Orleans"
  },
  {
    question: "What is the traditional Mardi Gras colors?",
    choices: ["Green, Yellow, and Red", "Purple, Green, and Gold", "Blue, White, and Red", "Black and Orange"],
    answer: "Purple, Green, and Gold"
  },
  {
    question: "What is the name of the king cake baby?",
    choices: ["Manny", "Jack", "Joe", "Max"],
    answer: "Manny"
  },
  {
    question: "What is the name of the famous Mardi Gras parade in New Orleans?",
    choices: ["Bacchus", "Orpheus", "Zulu", "Endymion"],
    answer: "Bacchus"
  },
  {
    question: "What is the name of the famous Mardi Gras song?",
    choices: ["When the Saints Go Marching In", "Iko Iko", "Mardi Gras Mambo", "Hey Pocky A-Way"],
    answer: "Mardi Gras Mambo"
  },
  {
    question: "What is the name of the krewe that hosts the Mardi Gras ball in Mobile, Alabama?",
    choices: ["Krewe of Endymion", "Krewe of Rex", "Krewe of Comus", "Krewe of Mardi Gras"],
    answer: "Krewe of Comus"
  },
  {
    question: "What is the name of the Mardi Gras parade that is known for throwing coconuts?",
    choices: ["Krewe of Zulu", "Krewe of Bacchus", "Krewe of Endymion", "Krewe of Orpheus"],
    answer: "Krewe of Zulu"
  },
  {
    question: "What is the name of the traditional Mardi Gras food?",
    choices: ["Jambalaya", "Red Beans and Rice", "Gumbo", "King Cake"],
    answer: "King Cake"
  },
  {
    question: "What is the name of the Mardi Gras parade that is known for its flambeaux carriers?",
    choices: ["Krewe of Proteus", "Krewe of Thoth", "Krewe of Hermes", "Krewe of Rex"],
    answer: "Krewe of Proteus"
  }
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    questionElement.innerHTML = questions[currentQuestion].question;
    choicesElement.innerHTML = "";
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
      const choice = questions[currentQuestion].choices[i];
      const button = document.createElement("button");
      button.innerHTML = choice;
      button.onclick = function() {
        if (choice === questions[currentQuestion].answer) {
          score++;
          scoreElement.innerHTML = `Score: ${score}`;
          button.style.background = "#8cbf3f" 
        } else {
          button.style.backgroundColor = "red"; 
        }
        button.disabled = true; 
         // Wait for 1 second before moving to the next question so the background could be altered
        setTimeout(function() {
            currentQuestion++;
            if (currentQuestion < questions.length) {
              showQuestion();
            } else {
              questionElement.innerHTML = "Quiz complete!";
              choicesElement.innerHTML = "";
              submitButton.style.display = "block";
            }
          }, 1000);
        };
        choicesElement.appendChild(button);
      }
  }
  

submitButton.onclick = function() {
  questionElement.innerHTML = `Your final score is ${score} out of ${questions.length}.`;
  submitButton.style.display = "none";
}

showQuestion();
//phone

function NavOpen() {
  var x = document.querySelector(".top-nav1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.querySelector('#burger').addEventListener('click',()=> NavOpen())