function makeArray(){
    let elements = [];
    for (let i = 1; i <= 118; i++){
        elements.push(`el${i}`);
    }
    return elements
}
function validate(){
    document.getElementById("hint").innerHTML = `You guessed it! The answer was  ${secert.title}, element ${secert.id.slice(2)}`;
}
function playGame(){
    document.getElementById("hint").innerHTML = "";
    let elements = makeArray();
    let randomIndex = Math.floor(Math.random() * 118);
    let randomElement = document.getElementById(elements[randomIndex]);
    let secert = randomElement;
    console.log(secert.id.slice(2));
    secert.addEventListener('click', function(){
        document.getElementById("hint").innerHTML = `You guessed it! The answer was  ${secert.title}, element ${secert.id.slice(2)}`;
    });
}
playGame();
let playBtn = document.getElementById("play");
playBtn.addEventListener("click", playGame);