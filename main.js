let randomNumber = Math.floor(Math.random() * periodicTable.length);
let guesses = 0;
let question = periodicTable[randomNumber].questions[guesses].q1;
let rightAnswer = periodicTable[randomNumber].answer;
let points = 0;
let next = document.getElementById("next");
next.style.display = "none";
function askQuestion(randomNumber) {
    document.getElementById("qa").innerText = ``;
    let question = periodicTable[randomNumber].questions[guesses].q1;
    document.getElementById("hint").innerText = ``;
    console.log(`${question} :: ${rightAnswer}`)
    let displayQa = document.getElementById("qa");
    displayQa.innerText = question
}
function generateNumber(){
    let randomNumber2 = Math.floor(Math.random() * periodicTable.length);
    if(randomNumber2 == randomNumber){
        randomNumber2 += 1
    }
    return randomNumber2
}
askQuestion(randomNumber)
function validate() {
    if (answer.value == rightAnswer) {
        document.getElementById("hint").innerText = `You guessed it! The answer was ${rightAnswer}`;
        points = periodicTable[randomNumber].questions[guesses].points; 
        document.getElementById("points").innerText = points;
        next.style.display = "block";
    } else {
        console.log("BOOO")
        guesses = 1;
        askQuestion(randomNumber);
        document.getElementById("hint").innerText = `Sorry That Is incrrect`;
  
    }
}
function nextQuestion() {
    let randomNumberNext = generateNumber();
    let rightAnswerNew = periodicTable[randomNumberNext].answer;
    let displayQa = document.getElementById("qa");
    let question2 = periodicTable[randomNumberNext].questions[guesses].q1;
    document.getElementById("qa").innerText = ``;
    document.getElementById("hint").innerText = ``;
    console.log(`${question2} :: ${rightAnswerNew}`)
    displayQa.innerText += question2;
    console.log(randomNumberNext)
}
console.log(generateNumber())
console.log(generateNumber())
let playBtn = document.getElementById("play");
playBtn.addEventListener("click", validate);
next.addEventListener("click", nextQuestion);