let score = 0;
let timeLeft = 30;
let timer;
let gameActive = false;

function moveBall() {
    if (!gameActive) return;

    let gameContainer = document.getElementById("game-container");
    let ball = document.getElementById("ball");

    let maxX = gameContainer.clientWidth - ball.clientWidth;
    let maxY = gameContainer.clientHeight - ball.clientHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    ball.style.left = randomX + "px";
    ball.style.top = randomY + "px";
}

function startGame() {
    if (gameActive) return;

    score = 0;
    timeLeft = 30;
    gameActive = true;
    document.getElementById("score").innerText = score;
    document.getElementById("timer").innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            gameActive = false;
            alert("Time's up! Your final score is: " + score);
        }
    }, 1000);

    moveBall();
}

document.getElementById("ball").addEventListener("click", function () {
    if (gameActive) {
        score++;
        document.getElementById("score").innerText = score;
        moveBall();
    }
});
