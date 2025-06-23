const quizData = [
  {
    question: "次の単語や文章を英訳せよ　2度",
    choices: [
      { text: "twice" },
      { text: "once" },
      { text: "two times" },
      { text: "second" },
    ],
    correct: 0,
  },
  {
    question: "未確認飛行物体",
    choices: [
      { text: "UFO" },
      { text: "UFOW" },
      { text: "U.F.O." },
      { text: "U.F.O" },
    ],
    correct: 2,
  },
  {
    question: "直面する",
    choices: [
      { text: "get" },
      { text: "fase" },
      { text: "meet" },
      { text: "face" },
    ],
    correct: 3,
  },
  {
    question: "投稿する",
    choices: [
      { text: "pond" },
      { text: "spend" },
      { text: "post" },
      { text: "update" },
    ],
    correct: 2,
  },
  {
    question: "マスメディア",
    choices: [
      { text: "media" },
      { text: "medea" },
      { text: "mathmadia" },
      { text: "masmedea" },
    ],
    correct: 0,
  },
  {
    question: "ソーシャルメディア",
    choices: [
      { text: "media" },
      { text: "social media" },
      { text: "socale midea" },
      { text: "midea" },
    ],
    correct: 1,
  },
  {
    question: "ブログ",
    choices: [
      { text: "brog" },
      { text: "vlag" },
      { text: "vrog" },
      { text: "blog" },
    ],
    correct: 3,
  },
  {
    question: "〜を思いつく",
    choices: [
      { text: "get up to~" },
      { text: "come up to~" },
      { text: "come up with~" },
      { text: "get come with~" },
    ],
    correct: 2,
  },
  {
    question: "研究会",
    choices: [
      { text: "scienction" },
      { text: "solution" },
      { text: "workshop" },
      { text: "warcshap" },
    ],
    correct: 2,
  },
  {
    question: "魅了する",
    choices: [
      { text: "attract" },
      { text: "atruct" },
      { text: "attruct" },
      { text: "atract" },
    ],
    correct: 0,
  },
  {
    question: "ビデオクリップ",
    choices: [
      { text: "a video crips" },
      { text: "video clips" },
      { text: "video crips" },
      { text: "a vedio crip" },
    ],
    correct: 1,
  },
  {
    question: "編集する",
    choices: [
      { text: "make" },
      { text: "editation" },
      { text: "edit" },
      { text: "rode" },
    ],
    correct: 2,
  },
  {
    question: "私は以前にも同じような問題に直面したことがある．",
    choices: [
      { text: "I have been facing the plobrem similar later." },
      { text: "I've been faced same problem." },
      { text: "I have been faced same problems before." },
      { text: "I've faced the same problem before." },
    ],
    correct: 3,
  },
  {
    question: "彼は今までで3回マラソンをしたことがある．",
    choices: [
      { text: "He have running a marason three times." },
      { text: "He's run a marathon three times." },
      { text: "He has ran a marathonn three times." },
      { text: "He has running a marathon three times." },
    ],
    correct: 1,
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
