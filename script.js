const quizData = [
  {
    question: "16世紀から18世紀までの欧米諸国は，アジアの大国に対して，人口や国力では？",
    choices: [
      { text: "優れていた．" },
      { text: "劣っていた．" },
    ],
    correct: 1,
  },
  {
    question: "人口や国力では劣っていた欧米諸国がアジアの大国も支配させることができるようになったのはなぜ？",
    choices: [
      { text: "宗教家が多く，その宗教による国の団結力が高かったため．" },
      { text: "国権力者が，アジアの人々を人質として拉致したため．" },
      { text: "産業革命で，軍事や工業の優れた技術を手に入れたため．" },
      { text: "この頃のアジアは各地で内戦が起こり，国内の結束が緩くなっていたため．" },
    ],
    correct: 2,
  },
  {
    question: "18世紀の清が欧米との貿易をするために唯一開いた港はどこ？",
    choices: [
      { text: "旅順" },
      { text: "広州" },
      { text: "香港" },
      { text: "上海" },
    ],
    correct: 1,
  },
  {
    question: "この頃，イギリスが他国から多く輸入していたものは？",
    choices: [
      { text: "茶，陶磁器，絹" },
      { text: "鉄鉱石，石油" },
      { text: "香辛料，米，綿" },
      { text: "銀，工業製品，アヘン" },
    ],
    correct: 0,
  },
  {
    question: "同時期，清がイギリスに輸出していたものは？",
    choices: [
      { text: "金，銀" },
      { text: "石油，綿" },
      { text: "文書，鉱石" },
      { text: "茶，絹" },
    ],
    correct: 3,
  },
  {
    question: "イギリスが輸入しているものと，清が輸出しているものの関係により，イギリスは？",
    choices: [
      { text: "赤字になった．" },
      { text: "黒字になった．" },
    ],
    correct: 0,
  },
  {
    question: "イギリスは，清が輸出している茶や絹を他国から大量に輸入していて赤字になったため，どのようにした？",
    choices: [
      { text: "インドから綿織物を輸入し，国内でアヘンを栽培して清に売り，銀や金などの金属を買うようにした．" },
      { text: "綿織物をインドに輸出し，インドでアヘンを栽培させて清に売り，中国製品を買うようにした．" },
    ],
    correct: 1,
  },
  {
    question: "イギリスが，綿織物をインドに輸出し，インドでアヘンを栽培させて清に売り，中国製品を買うようにした．この貿易は何？",
    choices: [
      { text: "三角貿易" },
      { text: "三国貿易" },
      { text: "英印清貿易" },
      { text: "ヨーロッパ-アジア貿易" },
    ],
    correct: 0,
  },
  {
    question: "清がアヘンを厳しく取り締まったためにイギリスが1840年に起こした戦争は？",
    choices: [
      { text: "英清戦争" },
      { text: "西南戦争" },
      { text: "アヘン戦争" },
      { text: "英清アヘン戦争" },
    ],
    correct: 2,
  },
  {
    question: "アヘン戦争に勝利したのは？",
    choices: [
      { text: "清" },
      { text: "イギリス" },
    ],
    correct: 1,
  },
  {
    question: "アヘン戦争に勝利したイギリスが，1842年に敗北国の清と結んだ講和条約は？",
    choices: [
      { text: "北京条約" },
      { text: "南京条約" },
      { text: "南西条約" },
      { text: "天津条約" },
    ],
    correct: 1,
  },
  {
    question: "南京条約の内容は？",
    choices: [
      { text: "北京・南京の2港を開く，上海はイギリスのものとする" },
      { text: "清に罰金2億ドルを課す，清には関税自主権を与えないものとする" },
      { text: "清でイギリス人が起こした事件はイギリスの法律によって罰するものとする" },
      { text: "上海などの5港を開く，清に罰金を課す，香港はイギリスのものとする" },
    ],
    correct: 3,
  },
  {
    question: "南京条約を結んだ翌年，イギリスと清とが結んだ不平等条約の内容は？",
    choices: [
      { text: "清に関税自主権がなく，イギリスに領事裁判権を認めさせる" },
      { text: "清に関税自主権がなく，清の代表はイギリスで定めた者しか認めない" },
      { text: "イギリスに領事裁判権を認め，貿易をする際は，より一層高価なものに変更する" },
      { text: "イギリスに関税自主権がなく，清に領事裁判権を認めさせる" },
    ],
    correct: 0,
  },
  {
    question: "不平等条約が結ばれた後，アヘン戦争後の社会不安と，清が賠償金のために貸した重税のために，清の各地で起こった乱は？",
    choices: [
      { text: "アヘン反抗の乱" },
      { text: "大西地獄の乱" },
      { text: "清内批英の乱" },
      { text: "太平天国の乱" },
    ],
    correct: 3,
  },
  {
    question: "太平天国の乱が起こっている中，イギリスはフランスと共に再び清を攻めて認めさせたのは？",
    choices: [
      { text: "貿易のいっそうの自由化やキリスト教の布教" },
      { text: "清の生産を管理する権利や南京条約で開かせた5港の植民地化" },
    ],
    correct: 0,
  },
  {
    question: "戦争と征服によってイギリスの支配地が内陸に広がったことによってイギリスの安い綿織物が大量に流入して伝統的なインドの綿織物業は打撃を受け，イギリスはインドから税を取ったため1857年に，インド内にあるイギリスの支配地各地で起こった，インド人兵士のイギリス人上官に対する反乱は？",
    choices: [
      { text: "対イギリス反乱" },
      { text: "インド大反乱" },
      { text: "ムガル帝国大反乱" },
      { text: "ムガル反乱" },
    ],
    correct: 1,
  },
  {
    question: "インド大反乱を鎮圧したイギリスは，ムガル皇帝を退位させてイギリス国王を皇帝とした，世界に広がる植民地支配の拠点とした国は？",
    choices: [
      { text: "インド帝国" },
      { text: "インドシナ公国" },
      { text: "南インド共和国" },
      { text: "インド皇国" },
    ],
    correct: 0,
  },
  {
    question: "イギリスから独立したアメリカはアヘン戦争後に中国との関わりを強め，東アジアとの貿易を望むようになり，また，鯨油を採るために太平洋で捕鯨を盛んに行っていたため，アメリカは，日本を開国させて太平洋を横断する貿易船や捕鯨船の寄港地とするために派遣した東インド艦隊司令長官の名前は？",
    choices: [
      { text: "ヘンリー・キャベンディッシュ" },
      { text: "ジャン・ジャック．ルソー" },
      { text: "マシュー・ペリー" },
      { text: "ウィリアム・トムソン" },
    ],
    correct: 2,
  },
  {
    question: "1853年，ペリーは4隻の軍艦を率いて神奈川県のどこに来航した？",
    choices: [
      { text: "浦賀" },
      { text: "横浜" },
      { text: "平塚" },
      { text: "伊勢原" },
    ],
    correct: 0,
  },
  {
    question: "1854年に再び来航したペリーの軍事的な圧力を前に，幕府が結んだ条約は？",
    choices: [
      { text: "日米修好通商条約" },
      { text: "日米和親条約" },
      { text: "日米通商条約" },
      { text: "日米交和条約" },
    ],
    correct: 1,
  },
  {
    question: "日米和親条約によって開港したのはどことどこ？",
    choices: [
      { text: "下関と長崎" },
      { text: "神戸と横浜" },
      { text: "下田と函館" },
      { text: "甲府と上越" },
    ],
    correct: 2,
  },
  {
    question: "日米和親条約の内容として認められたのは？",
    choices: [
      { text: "アメリカの領事を下田に置くこと，アメリカ船に食料や水，石炭などを供給すること" },
      { text: "アメリカの領事を函館に置くこと，日本に来航してきたアメリカ船の修理，改良をすること" },
    ],
    correct: 0,
  },
  {
    question: "日米和親条約を結んだことによって日本はどうなった？",
    choices: [
      { text: "鎖国した．" },
      { text: "閉国した．" },
      { text: "植民地化した．" },
      { text: "開国した．" },
    ],
    correct: 3,
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
