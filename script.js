const quizData = {
    easy: [
        {
            q: "パンダの主食は？",
            a: ["さかな", "たけ", "にく", "くだもの"],
            c: 1,
            exp: "パンダは竹を主食にしています。"
        },
        {
            q: "日本の首都は？",
            a: ["大阪", "京都", "東京", "名古屋"],
            c: 2,
            exp: "日本の首都は東京です。"
        }
    ],
    normal: [
        {
            q: "地球は太陽の周りを何日で一周？",
            a: ["100日", "365日", "200日", "30日"],
            c: 1,
            exp: "約365日で一周します。"
        }
    ],
    hard: [
        {
            q: "光の速さは1秒間に約？",
            a: ["3万km", "30万km", "300km", "3000km"],
            c: 1,
            exp: "光は約30万km/秒です。"
        }
    ]
};

let questions = [];
let current = 0;
let score = 0;
let timer;
let timeLeft = 10;

function startQuiz(level) {
    questions = [...quizData[level]];
    shuffle(questions);
    current = 0;
    score = 0;

    document.getElementById("menu").style.display = "none";
    document.getElementById("result").innerHTML = "";

    showQuestion();
}

function showQuestion() {
    if (current >= questions.length) {
        showResult();
        return;
    }

    timeLeft = 10;
    startTimer();

    const q = questions[current];

    let html = `<h2>問題 ${current + 1}</h2>`;
    html += `<p>${q.q}</p>`;
    html += `<p>残り時間: <span id="time">${timeLeft}</span>秒</p>`;

    q.a.forEach((choice, index) => {
        html += `<button onclick="checkAnswer(${index})">${choice}</button><br>`;
    });

    document.getElementById("quizArea").innerHTML = html;
}

function checkAnswer(index) {
    clearInterval(timer);

    const q = questions[current];

    if (index === q.c) {
        score++;
        alert("⭕ 正解！\n" + q.exp);
    } else {
        alert("❌ 不正解！\n" + q.exp);
    }

    current++;
    showQuestion();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("⏰ 時間切れ！");
            current++;
            showQuestion();
        }
    }, 1000);
}

function showResult() {
    const total = questions.length;
    const percent = ((score / total) * 100).toFixed(1);

    document.getElementById("quizArea").innerHTML = "";
    document.getElementById("result").innerHTML =
        `<h2>結果発表</h2>
         正解数: ${score}/${total}<br>
         正解率: ${percent}%`;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
