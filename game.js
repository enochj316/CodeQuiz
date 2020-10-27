const question = document.querySelector("#question")
const choices = Array.from(document.querySelectorAll(".choice-text"))
const progressText = document.querySelector("#progressText")
const scoreText = document.querySelector("#score")
const progressBarFull = document.querySelector("#ProgressBarFull")


var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = []

var questions = [
{
    question: "What is 2 + 2",
    possibleChoices: [
    "2",
    "3",
    "4",
    "6",
    ],
    answer: "4",
},
{
    question: "What is 2 + 6",
    possibleChoices: [
    "2",
    "3",
    "4",
    "8",
    ],
    answer: "8",
},
{
    question: "What is 2 + 9",
    possibleChoices: [
    "2",
    "3",
    "4",
    "11",
    ],
    answer: "11",
},
{
    question: "What is 2 + 10",
    possibleChoices: [
    "2",
    "3",
    "12",
    "6",
    ],
    answer: "12",
},

]

const SCORE_POINT = 100
const MAX_QUESTIONS = 4

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion ()
}


const getNewQuestion = () => {
if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS)
{localStorage.setItem("mostRecentScore", score)

    return window.location.assign("/end.html")
}

questionCounter++
progressText.innerText = `Questions ${questionCounter} of ${MAX_QUESTIONS}`
// progressBarFull.style.width =`${(questionCounter/MAX_QUESTIONS) * 100}%`

const questionsIndex = Math.floor(Math.random() *availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach((choice, index) => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion.possibleChoices[index]
    choice.addEventListener("click",answerClick)
})

availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true

}

function answerClick ()
{ 
    var correctAnswer = currentQuestion.answer
  
    if ( correctAnswer == this.textContent)

alert("Correct")

else 
alert("Incorrect")

getNewQuestion()
}

startGame()





