function initializeGame() {

    let title = document.querySelector("h1");
    title.innerHTML = "Let's Play!";

    let dice1 = document.querySelector(".img1");
    let dice2 = document.querySelector(".img2");
    dice1.src = `./images/dice6.png`; 
    dice2.src = `./images/dice6.png`; 
}

function setupGame() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    console.log(randomNumber1, randomNumber2);

    let dice1 = document.querySelector(".img1");
    let dice2 = document.querySelector(".img2");

    dice1.src = `./images/dice${randomNumber1}.png`;
    dice2.src = `./images/dice${randomNumber2}.png`;

    let title = document.querySelector("h1");

    if (randomNumber1 === randomNumber2) {
        title.innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        title.innerHTML = "Player 1 Wins!";
    } else {
        title.innerHTML = "Player 2 Wins!";
    }
}

initializeGame();

let button = document.querySelector(".btn");
button.addEventListener("click", function () {
    setupGame();
});

