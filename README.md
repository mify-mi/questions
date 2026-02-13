# questions
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>本格 豆知識クイズ</title>
<style>
body{
    font-family:sans-serif;
    background:#111;
    color:white;
    text-align:center;
}
.container{
    width:500px;
    margin:30px auto;
    background:#222;
    padding:20px;
    border-radius:10px;
}
button{
    margin:5px;
    padding:8px 15px;
    cursor:pointer;
}
.correct{ background:green; }
.wrong{ background:red; }
</style>
</head>
<body>

<div class="container">
<h2>🧠 本格 豆知識クイズ</h2>

<div id="menu">
    <p>難易度を選んでください</p>
    <button onclick="startQuiz('easy')">かんたん</button>
    <button onclick="startQuiz('normal')">ふつう</button>
    <button onclick="startQuiz('hard')">むずかしい</button>
</div>

<div id="quizArea"></div>
<div id="result"></div>
</div>

<script>

const quizData = {
easy:[
{q:"パンダの主食は？",
a:["さかな","たけ","にく","くだもの"],
c:1,
exp:"パンダは竹を主食にしています。"},
{q:"日本の首都は？",
a:["大阪","京都","東京","名古屋"],
c:2,
exp:"日本の首都は東京です。"}
],
normal:[
{q:"地球は太陽の周りを何日で一周？",
a:["100日","365日","200日","30日"],
c:1,
exp:"約365日で一周します。"},
{q:"人間の骨の数は？",
a:["100本","206本","300本","50本"],
c:1,
exp:"大人の骨は約206本あります。"}
],
hard:[
{q:"世界一深い海溝は？",
a:["日本海溝","マリアナ海溝","トンガ海溝","フィリピン海溝"],
c:1,
exp:"マリアナ海溝が最も深いです。"},
{q:"光の速さは1秒間に約？",
a:["3万km","30万km","300km","3000km"],
c:1,
exp:"光は約30万km/秒で進みます。"}
]
};

let questions = [];
let current = 0;
let score = 0;
let streak = 0;
let timer;
let timeLeft = 10;

function startQuiz(level){
    questions = [...quizData[level]];
    shuffle(questions);
    current = 0;
    score = 0;
    streak = 0;
    document.getElementById("menu").style.display="none";
    showQuestion();
}

function showQuestion(){
    if(current >= questions.length){
        showResult();
        return;
    }

    timeLeft = 10;
    startTimer();

    let q = questions[current];
    let html = `<h3>問題 ${current+1}</h3>`;
    html += `<p>${q.q}</p>`;
    html += `<p>残り時間: <span id="time">${timeLeft}</span>秒</p>`;

    q.a.forEach((choice,index)=>{
        html += `<button onclick="checkAnswer(${index})">${choice}</button><br>`;
    });

    document.getElementById("quizArea").innerHTML = html;
}

function checkAnswer(index){
    clearInterval(timer);
    let q = questions[current];

    if(index === q.c){
        score++;
        streak++;
        alert("⭕ 正解！\n" + q.exp);
    }else{
        streak = 0;
        alert("❌ 不正解！\n" + q.exp);
    }

    current++;
    showQuestion();
}

function startTimer(){
    timer = setInterval(()=>{
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if(timeLeft <= 0){
            clearInterval(timer);
            alert("⏰ 時間切れ！");
            streak = 0;
            current++;
            showQuestion();
        }
    },1000);
}

function showResult(){
    let total = questions.length;
    let percent = ((score/total)*100).toFixed(1);

    document.getElementById("quizArea").innerHTML="";
    document.getElementById("result").innerHTML=
    `<h3>結果発表</h3>
    正解数: ${score}/${total}<br>
    正解率: ${percent}%<br>
    最高連続正解: ${streak}`;
}

function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
}

</script>
</body>
</html>
