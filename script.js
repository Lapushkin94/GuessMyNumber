let secretNumber = getRandomNumber();
let score = 10;
let highscore = 0;

document.querySelector(".check").addEventListener("click", gameProcess);
document.querySelector(".again").addEventListener("click", playAgain);

function getRandomNumber() {
  return Math.floor(Math.random() * 101);
}

function playAgain() {
  secretNumber = getRandomNumber();
  score = 10;
  document.querySelector(".score").textContent = score;
  document.querySelector(".check").disabled = false;
  document.querySelector(".guess").value = "";
  setMessage("Guess number!");
  document.querySelector(".number").style.background = "#eee";
  document.querySelector(".number").textContent = '?';
  document.querySelector(".check").style.textDecoration = 'none';
}

function gameProcess() {
  let inputNumber = Number(document.querySelector(".guess").value);

  if (!inputNumber) {
    setMessage("✋ No number!");
    return;
  }

  if (inputNumber === secretNumber) {
    setMessage("✌️ Congratulations!");
    if (highscore === 0) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
    document.querySelector(".check").disabled = true;
    document.querySelector(".check").style.textDecoration = 'line-through';
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.background = "#10D731";
    return;
  }

  inputNumber > secretNumber
    ? setMessage("👍 Too hight!")
    : setMessage("👎 Too low!");
  score--;
  document.querySelector(".score").textContent = score;

  if (score === 0) {
    youLost();
  }
}

function youLost() {
  setMessage("😭 You lost!");
  document.querySelector(".check").disabled = true;
  document.querySelector(".number").style.background = "#DE0E31";
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".check").style.textDecoration = 'line-through';
}

function setMessage(message) {
  document.querySelector(".message").textContent = message;
}
