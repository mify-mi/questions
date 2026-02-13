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
        { q "世界で一番大きい大陸は？",a:["アフリカ","アジア","ヨーロッパ","南極"],c:1,exp:"アジア大陸です。"},
{q:"エッフェル塔がある国は？",a:["ドイツ","フランス","イタリア","スペイン"],c:1,exp:"フランスです。"},
{q:"ピラミッドが有名な国は？",a:["中国","エジプト","ギリシャ","インド"],c:1,exp:"エジプトです。"},
{q:"イタリアの首都は？",a:["ローマ","ミラノ","ナポリ","ベネチア"],c:0,exp:"ローマです。"},
{q:"万里の長城がある国は？",a:["韓国","中国","日本","タイ"],c:1,exp:"中国です。"},
{,q:"オーストラリアの首都は？",a:["シドニー","キャンベラ","メルボルン","パース"],c:1,exp:"キャンベラです。"},
{q:"世界最小の国は？",a:["モナコ","バチカン市国","シンガポール","マルタ"],c:1,exp:"バチカン市国です。"},
{cat:"science",d:"easy",q:"水の化学式は？",a:["CO2","H2O","O2","NaCl"],c:1,exp:"H2Oです。"},
{q:"地球は太陽から何番目？",a:["1","2","3","4"],c:2,exp:"3番目です。"},
{q"人間の骨の数は？",a:["100","206","300","150"],c:1,exp:"約206本です。"},
{q:"酸素の元素記号は？",a:["O","Ox","Os","Om"],c:0,exp:"Oです。"},
{q:"1日は何時間？",a:["12","24","36","48"],c:1,exp:"24時間です。"},
{q:"光合成とは？",a:["呼吸","栄養作り","蒸発","発酵"],c:1,exp:"植物が栄養を作ることです。"},
{q:"血液を送る臓器は？",a:["肺","心臓","肝臓","腎臓"],c:1,exp:"心臓です。"},
{cat:"animal",d:"easy",q:"世界最大の動物は？",a:["ゾウ","シロナガスクジラ","サメ","キリン"],c:1,exp:"シロナガスクジラです。"},
{cat:"animal",d:"easy",q:"ペンギンは何類？",a:["魚類","鳥類","哺乳類","爬虫類"],c:1,exp:"鳥類です。"},
{cat:"animal",d:"easy",q:"イルカは何類？",a:["魚類","両生類","哺乳類","爬虫類"],c:2,exp:"哺乳類です。"},
{cat:"animal",d:"easy",q:"タコの足は何本？",a:["6","8","10","12"],c:1,exp:"8本です。"},
{cat:"animal",d:"easy",q:"ライオンは何科？",a:["ネコ科","イヌ科","クマ科","ウマ科"],c:0,exp:"ネコ科です。"},
{cat:"animal",d:"easy",q:"カエルは何類？",a:["魚類","両生類","爬虫類","哺乳類"],c:1,exp:"両生類です。"},
{cat:"animal",d:"easy",q:"ハチは何類？",a:["昆虫","鳥","魚","哺乳類"],c:0,exp:"昆虫です。"},
// NORMAL 7
    ],
    normal: [
        {
            q: "地球は太陽の周りを何日で一周？",
            a: ["100日", "365日", "200日", "30日"],
            c: 1,
            exp: "約365日で一周します。"
        }
        {cat:"world",d:"normal",q:"ブラジルの公用語は？",a:["スペイン語","英語","ポルトガル語","フランス語"],c:2,exp:"ポルトガル語です。"},
{cat:"world",d:"normal",q:"世界一長い川は？",a:["ナイル川","アマゾン川","長江","ミシシッピ川"],c:0,exp:"ナイル川です。"},
{cat:"world",d:"normal",q:"カナダの首都は？",a:["トロント","オタワ","バンクーバー","モントリオール"],c:1,exp:"オタワです。"},
{cat:"world",d:"normal",q:"ギリシャの首都は？",a:["アテネ","スパルタ","ローマ","イスタンブール"],c:0,exp:"アテネです。"},
{cat:"world",d:"normal",q:"世界最大の海は？",a:["大西洋","太平洋","インド洋","北極海"],c:1,exp:"太平洋です。"},
{cat:"world",d:"normal",q:"アフリカで一番高い山は？",a:["キリマンジャロ","ケニア山","アトラス山","エルゴン山"],c:0,exp:"キリマンジャロです。"},
{cat:"world",d:"normal",q:"スペインの有名な祭りは？",a:["トマト祭り","雪祭り","灯籠祭り","仮面祭り"],c:0,exp:"トマト祭りです。"},
{cat:"world",d:"normal",q:"ブラジルの公用語は？",a:["スペイン語","英語","ポルトガル語","フランス語"],c:2,exp:"ポルトガル語です。"},
{cat:"world",d:"normal",q:"世界一長い川は？",a:["ナイル川","アマゾン川","長江","ミシシッピ川"],c:0,exp:"ナイル川です。"},
{cat:"world",d:"normal",q:"カナダの首都は？",a:["トロント","オタワ","バンクーバー","モントリオール"],c:1,exp:"オタワです。"},
{cat:"world",d:"normal",q:"ギリシャの首都は？",a:["アテネ","スパルタ","ローマ","イスタンブール"],c:0,exp:"アテネです。"},
{cat:"world",d:"normal",q:"世界最大の海は？",a:["大西洋","太平洋","インド洋","北極海"],c:1,exp:"太平洋です。"},
{cat:"world",d:"normal",q:"アフリカで一番高い山は？",a:["キリマンジャロ","ケニア山","アトラス山","エルゴン山"],c:0,exp:"キリマンジャロです。"},
{cat:"world",d:"normal",q:"スペインの有名な祭りは？",a:["トマト祭り","雪祭り","灯籠祭り","仮面祭り"],c:0,exp:"トマト祭りです。"},
{cat:"animal",d:"normal",q:"世界最速の陸上動物は？",a:["チーター","馬","ライオン","犬"],c:0,exp:"チーターです。"},
{cat:"animal",d:"normal",q:"ゾウの妊娠期間は約？",a:["6か月","12か月","22か月","3か月"],c:2,exp:"約22か月です。"},
{cat:"animal",d:"normal",q:"キリンの首の骨の数は？",a:["5","7","10","12"],c:1,exp:"7本です。"},
{cat:"animal",d:"normal",q:"フクロウは主にいつ活動？",a:["昼","夜","朝","夕方"],c:1,exp:"夜行性です。"},
{cat:"animal",d:"normal",q:"世界最大の鳥は？",a:["ワシ","ダチョウ","ハト","ペンギン"],c:1,exp:"ダチョウです。"},
{cat:"animal",d:"normal",q:"クジラは何呼吸？",a:["えら呼吸","肺呼吸","皮膚呼吸","水呼吸"],c:1,exp:"肺呼吸です。"},
{cat:"animal",d:"normal",q:"ジンベエザメは何類？",a:["魚類","哺乳類","両生類","爬虫類"],c:0,exp:"魚類です。"},

    ],
    hard: [
        {
            q: "光の速さは1秒間に約？",
            a: ["3万km", "30万km", "300km", "3000km"],
            c: 1,
            exp: "光は約30万km/秒です。"
        }
    ]
  hard: [
    {q:"πは何の比？",a:["円周と直径","面積と半径","体積と高さ","角度と半径"],c:0,exp:"円周÷直径です。"},
     {q:"元素記号Feは何？",
     a:["銀","鉄","金","銅"],
     c:1,
     exp:"鉄です。"}
       {cat:"world",d:"hard",q:"ナイアガラの滝は何国の国境？",a:["米加","米墨","仏独","中韓"],c:0,exp:"アメリカとカナダです。"},
{cat:"world",d:"hard",q:"エベレストがある山脈は？",a:["アルプス","ヒマラヤ","ロッキー","アンデス"],c:1,exp:"ヒマラヤ山脈です。"},
{cat:"world",d:"hard",q:"イギリスの通貨は？",a:["ユーロ","ドル","ポンド","クローネ"],c:2,exp:"ポンドです。"},
{cat:"world",d:"hard",q:"インドの首都は？",a:["ムンバイ","デリー","コルカタ","チェンナイ"],c:1,exp:"ニューデリーです。"},
{cat:"world",d:"hard",q:"アルゼンチンの首都は？",a:["リマ","ボゴタ","ブエノスアイレス","サンティアゴ"],c:2,exp:"ブエノスアイレスです。"},
{cat:"world",d:"hard",q:"トルコの最大都市は？",a:["アンカラ","イスタンブール","イズミル","ブルサ"],c:1,exp:"イスタンブールです。"},
{cat:"science",d:"hard",q:"シャルルの法則は何の関係？",a:["圧力と体積","温度と体積","速度と時間","電流と電圧"],c:1,exp:"温度と体積です。"},
{cat:"science",d:"hard",q:"万有引力の法則を提唱したのは？",a:["ニュートン","アインシュタイン","ガリレオ","ボイル"],c:0,exp:"ニュートンです。"},
{cat:"science",d:"hard",q:"元素記号Feは？",a:["金","鉄","銀","銅"],c:1,exp:"鉄です。"},
{cat:"science",d:"hard",q:"pH7は何性？",a:["酸性","中性","アルカリ性","強酸"],c:1,exp:"中性です。"},
{cat:"science",d:"hard",q:"人体最大の臓器は？",a:["心臓","肺","皮膚","肝臓"],c:2,exp:"皮膚です。"},
{cat:"science",d:"hard",q:"気圧の単位は？",a:["パスカル","ボルト","ヘルツ","アンペア"],c:0,exp:"パスカルです。"},
  ]

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
