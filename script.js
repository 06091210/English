const quizData = [
  {
    question: "",
    choices: [
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
    ],
    correct: ,
  },
];
let currentQuiz = quizData;
let currentQuestion = 0;
let score = 0;
const totalQuestions = quizData.length;
document.getElementById("total-questions").textContent = totalQuestions;
function initQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}
function loadQuestion() {
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("answer-section").style.display = "none";
  document.getElementById("final-result").style.display = "none";
  document.getElementById("question-number").textContent = `第 ${
    currentQuestion + 1
  } 問`;
  const questionData = currentQuiz[currentQuestion];
  document.getElementById("question").textContent = questionData.question;
  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";
  questionData.choices.forEach((choice, index) => {
    const choiceDiv = document.createElement("div");
    choiceDiv.classList.add("choice");
    choiceDiv.textContent = `${index + 1}. ${choice.text}`;
    choiceDiv.onclick = () => checkAnswer(index, questionData);
    choicesContainer.appendChild(choiceDiv);
  });
}
function checkAnswer(selected, questionData) {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("answer-section").style.display = "block";
  const resultText = document.getElementById("answer-result");
  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";
  if (selected === questionData.correct) {
    resultText.innerHTML = "<span class='correct'>正解</span>";
    score++;
  } else {
    resultText.innerHTML = "<span class='wrong'>不正解</span>";
  }
  if (currentQuestion === currentQuiz.length - 1) {
    document.getElementById("next-question").textContent = "結果を見る";
  } else {
    document.getElementById("next-question").textContent = "次の問題へ";
  }
}
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < currentQuiz.length) {
    loadQuestion();
    document.getElementById("container").scrollIntoView({ behavior: "smooth" });
  } else {
    showResult();
  }
}
function showResult() {
  document.getElementById("answer-section").style.display = "none";
  document.getElementById("final-result").style.display = "block";

  const percentage = (score / currentQuiz.length) * 100;
  document.getElementById("score").textContent = `正解数: ${score}/${
    currentQuiz.length
  } (${percentage.toFixed(quizData.length)}%)`;
}
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  initQuiz();
}
initQuiz();
