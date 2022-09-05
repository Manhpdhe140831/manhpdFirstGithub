let contentCal = document.querySelector('#contentCal');
let resulText = document.querySelector('#result');
let scoreText = document.querySelector("#score");
let levelText = document.querySelector("#level");
let check = false;
let score = 0;
let level = 0;
let myVar;
var i = 0;
step();
upload();
function step() {
    myVar = setTimeout(checkTimeOut, 20000);
    
    let num1 = Math.floor(Math.random() * 999);
    let num2 = Math.floor(Math.random() * 999);
   
    let operator = new Array("+", "-", "*");
    const randomOperator = operator[Math.floor(Math.random() * operator.length)];
    
    contentCal.innerHTML = num1 + ' ' + randomOperator + ' ' + num2;

    function calculation(a, b, stringData) {
        if (stringData == "+") {
            return eval(a + '+' + b);
        } else if (stringData == "-") {
            return eval(a + '-' + b);
        } else {
            return eval(a + '*' + b);
        }
    }
    let result = calculation(num1, num2, randomOperator);
    const randomFailResult = Math.round(Math.random() * (10 - (-10))) + (-10);

    let arrayChoose = new Array('true', 'false');
    let randomArrayChoose = arrayChoose[Math.floor(Math.random() * arrayChoose.length)];
    if (randomArrayChoose == "true") {
        check = true;
        resulText.innerHTML = result;
    } else {
        check = false;
        resulText.innerHTML = randomFailResult;
    }
    console.log(randomArrayChoose);
}

function checkYes() {
    if (check == true) {
        score += 5;
        scoreText.innerHTML = score;
        level += 1;
        levelText.innerHTML = level;
        clearTimeout(myVar);
        upload();
        step();
        
        console.log("dung");
    } else {
        alert("Game over!!! Score: " + score);
        score = 0;
        scoreText.innerHTML = score;
        level = 1;
        levelText.innerHTML = level;
        upload();
        step();
        
    }
}

function checkNo() {
    if (check == false) {
        score += 5;
        scoreText.innerHTML = score;
        level += 1;
        levelText.innerHTML = level;
        clearTimeout(myVar);
        upload();
        step();
        
        console.log("dung");
    } else {
        alert("Game over!!! Score: " + score);
        score = 0;
        scoreText.innerHTML = score;
        level = 1;
        levelText.innerHTML = level;
        upload();
        step();
        
    }
}

function checkTimeOut() {
    alert("Game over!!! Score: " + score);
    score = 0;
    scoreText.innerHTML = score;
    level = 1;
    levelText.innerHTML = level;
    upload();
    step();
}

function upload(){
    const progressBar = document.querySelector('.myBar');
    progressBar.setAttribute('id','play-animation');
}