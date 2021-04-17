let randomNumber = Math.floor(Math.random() * periodicTable.length);
let guesses = 0;
let question = periodicTable[randomNumber].questions[guesses].q1;
let rightAnswer = periodicTable[randomNumber].answer;
let points = 0; 
function askQuestion() {
    let question = periodicTable[randomNumber].questions[guesses].q1;
    document.getElementById("hint").innerText = ``;
    console.log(`${question} :: ${rightAnswer}`)
    let displayQa = document.getElementById("qa");
    console.log(question);
    displayQa.innerText = question;
}
askQuestion()
console.log(points);
function validate() {
    if (answer.value == rightAnswer) {
        document.getElementById("hint").innerText = `You guessed it! The answer was ${rightAnswer}`;
        points = periodicTable[randomNumber].questions[guesses].points; 
        document.getElementById("points").innerText = points;
    } else {
        console.log("BOOO")
        guesses = 1;
        askQuestion();
        document.getElementById("hint").innerText = ``;
  
    }
}

let playBtn = document.getElementById("play");
playBtn.addEventListener("click", validate);