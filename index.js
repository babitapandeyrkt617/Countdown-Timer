let timer;
let isPaused = false;
let remainingTime = 0;

const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  const inputMinutes = document.getElementById('inputMinutes').value;
  const inputSeconds = document.getElementById('inputSeconds').value;
  if (!isPaused) {
    remainingTime = (parseInt(inputMinutes) * 60 || 0) + (parseInt(inputSeconds) || 0);
  }
  if (remainingTime > 0) {
    timer = setInterval(updateTimer, 1000);
    isPaused = false;
  }
}

function pauseTimer() {
  clearInterval(timer);
  isPaused = true;
}

function resetTimer() {
  clearInterval(timer);
  remainingTime = 0;
  isPaused = false;
  updateDisplay(0, 0);
}

function updateTimer() {
  if (remainingTime <= 0) {
    clearInterval(timer);
    alert("Time's up!");
  } else {
    remainingTime--;
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    updateDisplay(minutes, seconds);
  }
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}
